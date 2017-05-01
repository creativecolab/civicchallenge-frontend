import React from 'react';

import path from 'path';
import crypto from 'crypto';

import express from 'express';
import compression from 'compression';
import serveStatic from 'serve-static';
import bodyParser from 'body-parser';

import sessions from 'client-sessions';
import helmet from 'helmet';
import lusca from 'lusca';

import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import { Provider } from 'react-redux';
import reactHelmet from 'react-helmet';

import HtmlMinifier from 'html-minifier';

import d from 'debug';

import serverConfig from './config';

import configureStore from '../client/store';
import fetchComponentData from './util/fetchData';
import routes from '../client/routes';

/**
 * Debug
 */

const debug = {
  log: d('server:log'),
  err: d('server:err'),
};


/**
 * App
 */

const app = express();

app.enable('trust proxy');


/**
 * Middleware Stack
 */

// Webpack if in development
if (process.env.NODE_ENV === 'development') {
  const webpack = require('webpack'); // eslint-disable-line global-require, import/no-extraneous-dependencies
  const webpackConfig = require('../webpack.config.dev'); // eslint-disable-line global-require
  const webpackDevMiddleware = require('webpack-dev-middleware'); // eslint-disable-line global-require, import/no-extraneous-dependencies
  const webpackHotMiddleware = require('webpack-hot-middleware'); // eslint-disable-line global-require, import/no-extraneous-dependencies

  const compiler = webpack(webpackConfig);

  // Dev Middleware
  app.use(webpackDevMiddleware(compiler, {
    publicPath: webpackConfig.output.publicPath,
    stats: {
      colors: true,
    },
  }));

  // Hot Reloading Middleware
  app.use(webpackHotMiddleware(compiler, {
    log: () => {},
    heartbeat: 1000,
  }));
}

// Gzip Compression
app.use(compression());

// Session
const secure = process.env.NODE_ENV === 'production';
const sessionsSecret = crypto.randomBytes(256).toString('base64'); // TODO Change this when hosting situation is finalized

app.use(sessions({
  cookieName: 'session',
  secret: sessionsSecret,
  duration: 24 * 60 * 60 * 1000, // 1 day
  activeDuration: 5 * 60 * 1000, // 5 minutes
  cookie: {
    ephemeral: false,
    httpOnly: true,
    secure,
  },
}));

// Handle JSON/URL Encoding
app.use(bodyParser.json({
  limit: '20mb',
}));
app.use(bodyParser.urlencoded({
  limit: '20mb',
  extended: false,
}));

// Lusca
app.use(lusca({
  csrf: true,
  hsts: {
    maxAge: 31536000,
    includeSubDomains: true,
    preload: true,
  },

  // Also handled by Helmet
  xframe: 'SAMEORIGIN',
  xssProtection: true,
  nosniff: true,
}));

// Helmet
app.use((req, res, next) => {
  res.locals.nonce = crypto.randomBytes(128).toString('base64'); // eslint-disable-line no-param-reassign
  next();
});

const defaultSrc = [
  '\'self\'',
];

const scriptSrc = [
  '\'self\'',
  'https://www.google-analytics.com',
  'https://stats.g.doubleclick.net',
  (req, res) => { return `'nonce-${res.locals.nonce}'`; },
];
if (process.env.NODE_ENV !== 'production') {
  scriptSrc.push('\'unsafe-eval\'');
}

const styleSrc = [
  '\'self\'',
];
if (process.env.NODE_ENV !== 'production') {
  styleSrc.push('blob:');
}

const imgSrc = [
  '\'self\'',
  'https://www.google-analytics.com',
  'https://stats.g.doubleclick.net',
];
if (process.env.NODE_ENV !== 'production') {
  imgSrc.push('data:');
}

app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc,
      scriptSrc,
      styleSrc,
      imgSrc,
    },
  },
}));


/**
 * Static Content
 */

// Static client content from Webpack
app.use(serveStatic(path.join(__dirname, '../client-dist')));

// Other static content
app.use(serveStatic(path.join(__dirname, '../public')));


/**
 * Routes
 */


/**
 * Render Initial HTML
 */

const renderFullPage = (initialView, initialState, scriptNonce) => {
  const assetsManifest = process.env.webpackAssets && JSON.parse(process.env.webpackAssets);
  const chunkManifest = process.env.webpackChunkAssets && JSON.parse(process.env.webpackChunkAssets);

  const head = reactHelmet.renderStatic();
  const headString = Object.keys(head).map(key => head[key].toString()).join('');

  const manifestScript = `
window.__INITIAL_STATE__ = ${JSON.stringify(initialState)};
${process.env.NODE_ENV === 'production' ?
`//<![CDATA[
window.webpackManifest = ${JSON.stringify(chunkManifest)};
//]]>` : ''}
  `;

  const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      ${headString}
      ${process.env.NODE_ENV === 'production' ? `<link rel="stylesheet" href="${assetsManifest['/app.css']}" />` : ''}
    </head>
    <body>
      <div id="root" data-reactmount>${initialView}</div>
      <script nonce="${scriptNonce}">${manifestScript}</script>
      <script defer src="${process.env.NODE_ENV === 'production' ? assetsManifest['/vendor.js'] : './vendor.js'}"></script>
      <script defer src="${process.env.NODE_ENV === 'production' ? assetsManifest['/app.js'] : './app.js'}"></script>
    </body>
    </html>
  `;

  const minifiedHtml = HtmlMinifier.minify(html, {
    collapseBooleanAttributes: true,
    collapseInlineTagWhitespace: false,
    collapseWhitespace: true,
    decodeEntities: true,
    minifyCSS: true,
    minifyJS: false,
    removeComments: false,
    removeEmptyAttributes: true,
    removeRedundantAttributes: true,
    removeScriptTypeAttributes: true,
    removeStyleLinkTypeAttributes: true,
    sortAttributes: true,
    sortClassName: true,
  });

  return minifiedHtml;
};

app.use((req, res, next) => {
  match({ routes, location: req.url }, (matchErr, redirectLocation, renderProps) => {
    if (matchErr) {
      return debug.err(matchErr);
    }

    if (redirectLocation) {
      return res.redirect(302, redirectLocation.pathname + redirectLocation.search);
    }

    if (!renderProps) {
      return next();
    }

    const store = configureStore();

    return fetchComponentData(store, renderProps.components, renderProps.params)
      .then(() => {
        const initialView = renderToString(
          <Provider store={store}>
            <RouterContext {...renderProps} />
          </Provider>
        );

        const finalState = store.getState();

        finalState._csrf = res.locals._csrf;

        res
          .set('content-type', 'text/html')
          .status(200)
          .end(renderFullPage(initialView, finalState, res.locals.nonce));
      })
      .catch(fetchErr => next(fetchErr));
  });
});


/**
 * Create Server and Listen
 */

app.listen(serverConfig.port, (err) => {
  if (err) {
    debug.err(err);
  } else {
    debug.log(`Express server listening on port ${serverConfig.port}`);

    if (process.env.NODE_ENV === 'development') {
      const opn = require('opn'); // eslint-disable-line global-require, import/no-extraneous-dependencies
      opn(`http://127.0.0.1:${serverConfig.port}`);
    }
  }
});
