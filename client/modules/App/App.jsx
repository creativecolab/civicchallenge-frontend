import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

/**
 * App
 */

const propTypes = {
  children: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

const contextTypes = {
  router: PropTypes.object,
};

const defaultProps = {};

function App({ children }) {
  return (
    <div>
      <Helmet
        titleTemplate="%s - Design for San Diego"
        meta={[
          { charset: 'utf-8' },
          { 'http-equiv': 'x-ua-compatible', content: 'ie=edge' },
          { name: 'viewport', content: 'width=device-width, initial-scale=1' },
          { name: 'keywords', content: '' },
          { name: 'author', content: '' },
          { name: 'robots', content: 'index, follow' },
          { name: 'revisit-after', content: '1 days' },
          { name: 'theme-color', content: '#2d324d' },
          { name: 'ms-application-TileColor', content: 'FFFFFF' },
          { name: 'ms-application-TileImage', content: 'mstile-144x144.png' },
          { name: 'ms-application-square70x70logo', content: 'mstile-70x70.png' },
          { name: 'ms-application-square150x150logo', content: 'mstile-150x150.png' },
          { name: 'ms-application-wide310x150logo', content: 'mstile-310x150.png' },
          { name: 'ms-application-square310x310logo', content: 'mstile-310x310.png' },
        ]}
        link={[
          { rel: 'author', href: '/humans.txt' },
          { rel: 'apple-touch-icon-precomposed', sizes: '57x57', href: '/apple-touch-icon-57x57.png' },
          { rel: 'apple-touch-icon-precomposed', sizes: '114x114', href: '/apple-touch-icon-114x114.png' },
          { rel: 'apple-touch-icon-precomposed', sizes: '72x72', href: '/apple-touch-icon-72x72.png' },
          { rel: 'apple-touch-icon-precomposed', sizes: '144x144', href: '/apple-touch-icon-144x144.png' },
          { rel: 'apple-touch-icon-precomposed', sizes: '60x60', href: '/apple-touch-icon-60x60.png' },
          { rel: 'apple-touch-icon-precomposed', sizes: '120x120', href: '/apple-touch-icon-120x120.png' },
          { rel: 'apple-touch-icon-precomposed', sizes: '76x76', href: '/apple-touch-icon-76x76.png' },
          { rel: 'apple-touch-icon-precomposed', sizes: '152x152', href: '/apple-touch-icon-152x152.png' },
          { rel: 'icon', type: 'image/png', sizes: '196x196', href: '/favicon-196x196.png' },
          { rel: 'icon', type: 'image/png', sizes: '96x96', href: '/favicon-96x96.png' },
          { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
          { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
          { rel: 'icon', type: 'image/png', sizes: '128x128', href: '/favicon-128x128.png' },
          { rel: 'manifest', href: '/manifest.json' },
          { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#2d324d' },
        ]}
      />
      {children}
    </div>
  );
}

App.propTypes = propTypes;
App.contextTypes = contextTypes;
App.defaultProps = defaultProps;

export default App;
