import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import App from './App';
import configureStore from './store';

const mountElement = document.getElementById('root');
const store = configureStore(window.__INITIAL_STATE__);

let routerKey = 0;

render(
  <AppContainer>
    <App routerKey={routerKey} store={store} />
  </AppContainer>,
  mountElement
);

// Hot Reloading
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
