import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';

import routes from './routes';

require('./main.scss');

const propTypes = {
  store: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  routerKey: PropTypes.number.isRequired,
};

function App(props) {
  return (
    <Provider store={props.store}>
      <Router key={props.routerKey} history={browserHistory}>
        {routes}
      </Router>
    </Provider>
  );
}

App.propTypes = propTypes;

export default App;
