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
      >
        {/* Meta */}
        <html lang="en" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta content="ie=edge" httpEquiv="x-ua-compatible" />
        {/* Generic SEO */}
        <meta name="author" content="index, follow" />
        <meta name="keywords" content="1 days" />
        <meta />
        {/* http://robotstxt.org/ */}
        <meta name="robots" content="" />
        <meta name="revisit-after" content="" />
        {/* http://humanstxt.org/ */}
        <link rel="author" href="humans.txt" />
        {/* https://realfavicongenerator.net/ */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png?v=Nm5EJq5nq2" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png?v=Nm5EJq5nq2" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png?v=Nm5EJq5nq2" />
        <link rel="manifest" href="/manifest.json?v=Nm5EJq5nq2" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg?v=Nm5EJq5nq2" color="#5bbad5" />
        <link rel="shortcut icon" href="/favicon.ico?v=Nm5EJq5nq2" />
        <meta name="apple-mobile-web-app-title" content="D4SD" />
        <meta name="application-name" content="D4SD" />
        <meta name="theme-color" content="#ffffff" />
      </Helmet>
      {children}
    </div>
  );
}

App.propTypes = propTypes;
App.contextTypes = contextTypes;
App.defaultProps = defaultProps;

export default App;
