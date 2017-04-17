import React from 'react';
import { render } from 'react-dom';
import { Promise } from 'es6-promise';
import ReactGA from 'react-ga';

import App from './App';
import configureStore from './store';

// Promise polyfill
if (!global.Promise) {
  global.Promise = Promise;
}

// Google Analytics
ReactGA.initialize('UA-79713589-1', { debug: process.env.NODE_ENV === 'development' });
ReactGA.pageview(window.location.pathname);

const mountElement = document.getElementById('root');
const store = configureStore(window.__INITIAL_STATE__);

let routerKey = 0;
let rootElement = null;

if (process.env.NODE_ENV === 'production') {
  rootElement = (
    <App routerKey={routerKey} store={store} />
  );
} else {
  const { AppContainer } = require('react-hot-loader'); // eslint-disable-line global-require

  rootElement = (
    <AppContainer>
      <App routerKey={routerKey} store={store} />
    </AppContainer>
  );

  // Hot reload in development
  if (module.hot) {
    module.hot.accept('./App', () => {
      routerKey += 1;

      const NextApp = require('./App').default; // eslint-disable-line global-require
      render(
        <AppContainer>
          <NextApp routerKey={routerKey} store={store} />
        </AppContainer>,
        mountElement
      );
    });
  }
}

render(
  rootElement,
  mountElement
);
