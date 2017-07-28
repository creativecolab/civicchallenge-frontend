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
const getHowItWorks = (nextState, cb) => require.ensure([], require => cb(null, require('./modules/HowItWorks/HowItWorks').default), 'howitworks');
const getChallenges = (nextState, cb) => require.ensure([], require => cb(null, require('./modules/Challenges/Challenges').default), 'challenges');
const getChallenge = (nextState, cb) => require.ensure([], require => cb(null, require('./modules/Challenge/Challenge').default), 'challenge');
const getChallengeBrief = (nextState, cb) => require.ensure([], require => cb(null, require('./modules/DesignBrief/DesignBrief').default), 'challengebrief');
const getRewards = (nextState, cb) => require.ensure([], require => cb(null, require('./modules/Rewards/Rewards').default), 'rewards');
const getResources = (nextState, cb) => require.ensure([], require => cb(null, require('./modules/Resources/Resources').default), 'resources');
const getFAQ = (nextState, cb) => require.ensure([], require => cb(null, require('./modules/FAQ/FAQ').default), 'faq');
const getDesignBrief = (nextState, cb) => require.ensure([], require => cb(null, require('./modules/DesignBrief/DesignBrief').default), 'designbrief');
const getGetInvolved = (nextState, cb) => require.ensure([], require => cb(null, require('./modules/GetInvolved/GetInvolved').default), 'getinvolved');
const getPressEvents = (nextState, cb) => require.ensure([], require => cb(null, require('./modules/PressEvents/PressEvents').default), 'pressevents');
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
    <Route path="/howitworks" getComponent={getHowItWorks} />
    <Route path="/challenges" getComponent={getChallenges} />
    <Route path="/challenges/:id" getComponent={getChallenge} />
    <Route path="/challenges/:id" getComponent={getChallengeBrief} />
    <Route path="/rewards" getComponent={getRewards} />
    <Route path="/resources" getComponent={getResources} />
    <Route path="/faq" getComponent={getFAQ} />
    <Route path="/designbrief" getComponent={getDesignBrief} />
    <Route path="/getinvolved" getComponent={getGetInvolved} />
    <Route path="/press-and-events" getComponent={getPressEvents} />
    <Route path="/placeholder" getComponent={getPlaceholder} />
  </Route>
);
