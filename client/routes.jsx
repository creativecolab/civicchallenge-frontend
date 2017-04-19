import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './modules/App/App';
import Landing from './modules/Landing/Landing';

// require.ensure Polyfill
if (typeof require.ensure !== 'function') {
  require.ensure = function requireModule(deps, callback) {
    callback(require);
  };
}

const getSponsors = (nextState, cb) => require.ensure([], require => cb(null, require('./modules/Sponsors/Sponsors').default));
const getTeam = (nextState, cb) => require.ensure([], require => cb(null, require('./modules/Team/Team').default));
const getPlaceholder = (nextState, cb) => require.ensure([], require => cb(null, require('./modules/Placeholder/Placeholder').default));

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Landing} />
    <Route path="/sponsors" getComponent={getSponsors} />
    <Route path="/team" getComponent={getTeam} />
    <Route path="/placeholder" getComponent={getPlaceholder} />
  </Route>
);
