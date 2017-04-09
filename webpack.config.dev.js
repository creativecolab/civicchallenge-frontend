const path = require('path');

const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');

const sassModule = require('./webpack-modules/sass-module');
const imgModule = require('./webpack-modules/img-module');
const jsPreModule = require('./webpack-modules/js-pre-module');
const jsModule = require('./webpack-modules/js-module');
const jsonModule = require('./webpack-modules/json-module');

const env = process.env.NODE_ENV;
const prod = env === 'production';

const rules = [
  sassModule,
  imgModule,
  jsPreModule,
  jsModule,
  jsonModule,
].map(module => module(prod));

module.exports = {
  devtool: 'cheap-module-eval-source-map',

  entry: {
    app: [
      'eventsource-polyfill',
      'webpack-hot-middleware/client?timeout=2000&reload=true&noInfo=true',
      'webpack/hot/only-dev-server',
      'react-hot-loader/patch',
      'babel-polyfill',
      './client/index.jsx',
    ],
    vendor: [
      'es6-promise',
      'isomorphic-fetch',
      'react',
      'react-dom',
      'react-helmet',
      'react-redux',
      'react-router',
      'redux',
    ],
  },

  output: {
    path: __dirname,
    filename: 'app.js',
    publicPath: '/',
  },

  resolve: {
    extensions: ['*', '.js', '.jsx'],
    modules: [
      path.resolve('./client'),
      path.resolve('./node_modules'),
    ],
  },

  module: {
    rules,
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
      },
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: Infinity,
      filename: 'vendor.js',
    }),
    new ExtractTextPlugin({
      filename: 'app.css',
      allChunks: true,
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      reportFilename: 'bundle-report/bundle-report.html',
      openAnalyzer: false,
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new FriendlyErrorsPlugin({
      clearConsole: true,
    }),
  ],
};
