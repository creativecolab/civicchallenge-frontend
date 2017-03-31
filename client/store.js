import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import callApiMiddleware from './redux-middleware/callApiMiddleware';
import rootReducer from './reducers';

export default function configureStore(initialState = {}) {
  const enhancers = [
    applyMiddleware(
      thunkMiddleware,
      callApiMiddleware
    ),
  ];

  const store = createStore(rootReducer, initialState, compose(...enhancers));

  // Hot Reloading
  if (module.hot) {
    module.hot.accept('./reducers', () => {
      const nextReducer = require('./reducers').default; // eslint-disable-line global-require
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}
