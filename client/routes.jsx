import React from 'react';
import { Route, IndexRoute } from 'react-router';
import ReactGA from 'react-ga';

import App from './modules/App/App';
import Landing from './modules/Landing/Landing';

// require.ensure Polyfill
if (typeof require.ensure !== 'function') {
  require.ensure = function requireModule(deps, callback) {
    callback(require);
  };
}

const getSponsors = (nextState, cb) => require.ensure([], require => cb(null, require('./modules/Sponsors/Sponsors').default), 'sponsors');
const getAbout = (nextState, cb) => require.ensure([], require => cb(null, require('./modules/About/About').default), 'about');
const getProcess = (nextState, cb) => require.ensure([], require => cb(null, require('./modules/Process/Process').default), 'process');
const getTeam = (nextState, cb) => require.ensure([], require => cb(null, require('./modules/Team/Team').default), 'team');
const getEvents = (nextState, cb) => require.ensure([], require => cb(null, require('./modules/Events/Events').default), 'events');
const getChallenges = (nextState, cb) => require.ensure([], require => cb(null, require('./modules/Challenges/Challenges').default), 'challenges');
const getChallenge = (nextState, cb) => require.ensure([], require => cb(null, require('./modules/Challenge/Challenge').default), 'challenge');
const getRewards = (nextState, cb) => require.ensure([], require => cb(null, require('./modules/Rewards/Rewards').default), 'rewards');
const getOnboard = (nextState, cb) => require.ensure([], require => cb(null, require('./modules/Onboarding/Onboarding').default), 'onbaording');
const getFeedback = (nextState, cb) => require.ensure([], require => cb(null, require('./modules/Feedback/Feedback').default), 'feedback');
const getPlaceholder = (nextState, cb) => require.ensure([], require => cb(null, require('./modules/Placeholder/Placeholder').default), 'placeholder');

function onRouteChange(prev, next) {
  ReactGA.pageview(next.location.pathname);
}

export default (
  <Route path="/" component={App} onChange={onRouteChange}>
    <IndexRoute component={Landing} />
    <Route path="/sponsors" getComponent={getSponsors} />
    <Route path="/about" getComponent={getAbout} />
    <Route path="/process" getComponent={getProcess} />
    <Route path="/team" getComponent={getTeam} />
    <Route path="/events" getComponent={getEvents} />
    <Route path="/challenges" getComponent={getChallenges} />
    <Route path="/challenges/:id" getComponent={getChallenge} />
    <Route path="/rewards" getComponent={getRewards} />
    <Route path="/onboarding" getComponent={getOnboard} />
    <Route path="/feedback" getComponent={getFeedback} />
    <Route path="/placeholder" getComponent={getPlaceholder} />
  </Route>
);
