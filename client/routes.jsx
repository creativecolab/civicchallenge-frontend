import React from 'react';
// import {  } from 'react-router';
import { IndexRoute, Route } from 'react-router';
import ReactGA from 'react-ga';

import App from './modules/App/App';
import Landing from './modules/Landing/Landing';
import Auth from './modules/UserLogin/components/Auth/Auth';
// import Callback from './modules/UserLogin/components/Callback/Callback';
// import history from './modules/UserLogin/components/history'

// require.ensure Polyfill
if (typeof require.ensure !== 'function') {
  require.ensure = function requireModule(deps, callback) {
    callback(require);
  };
}

// auth0
const auth = new Auth();

const getSponsors = (nextState, cb) => require.ensure([], require => cb(null, require('./modules/Sponsors/Sponsors').default), 'sponsors');
const getAbout = (nextState, cb) => require.ensure([], require => cb(null, require('./modules/About/About').default), 'about');
const getChallenges = (nextState, cb) => require.ensure([], require => cb(null, require('./modules/Challenges/Challenges').default), 'challenges');
const getResources = (nextState, cb) => require.ensure([], require => cb(null, require('./modules/Resources/Resources').default), 'resources');
const getLatestInMobility = (nextState, cb) => require.ensure([], require => cb(null, require('./modules/LatestInMobility/LatestInMobility').default), 'latestinmobility');
const getFAQ = (nextState, cb) => require.ensure([], require => cb(null, require('./modules/FAQ/FAQ').default), 'faq');
const getDesignBrief = (nextState, cb) => require.ensure([], require => cb(null, require('./modules/DesignBrief/DesignBrief').default), 'designbrief');
const getGetInvolved = (nextState, cb) => require.ensure([], require => cb(null, require('./modules/GetInvolved/GetInvolved').default), 'getinvolved');
const getEvents = (nextState, cb) => require.ensure([], require => cb(null, require('./modules/Events/Events').default), 'events');
const getCodeOfConduct = (nextState, cb) => require.ensure([], require => cb(null, require('./modules/CodeOfConduct/CodeOfConduct').default), 'codeofconduct');
const getPosterTemplates = (nextState, cb) => require.ensure([], require => cb(null, require('./modules/PosterTemplates/PosterTemplates').default), 'postertemplates');
const getJurors = (nextState, cb) => require.ensure([], require => cb(null, require('./modules/Jurors/Jurors').default), 'jurors');
const getFinalists = (nextState, cb) => require.ensure([], require => cb(null, require('./modules/Finalists/Finalists').default), 'finalists');
const getPlaceholder = (nextState, cb) => require.ensure([], require => cb(null, require('./modules/Placeholder/Placeholder').default), 'placeholder');
const getUserLogin = (nextState, cb) => require.ensure([], require => cb(null, require('./modules/UserLogin/UserLogin').default), 'userlogin');
const getCallback = (nextState, cb) => require.ensure([], require => cb(null, require('./modules/UserLogin/components/Callback/Callback').default), 'callback');


function onRouteChange(prev, next) {
  ReactGA.pageview(next.location.pathname);
}

export default (
  <Route path="/" component={App} onChange={onRouteChange}>
    <IndexRoute component={Landing} auth={auth} />
    <Route path="/sponsors" getComponent={getSponsors} auth={auth} />
    <Route path="/about" getComponent={getAbout} auth={auth} />
    <Route path="/challenges" getComponent={getChallenges} auth={auth} />
    <Route path="/challenges/:id" getComponent={getDesignBrief} auth={auth} />
    <Route path="/resources" getComponent={getResources} auth={auth} />
    <Route path="/resources/latestinmobility" getComponent={getLatestInMobility} auth={auth} />
    <Route path="/faqs" getComponent={getFAQ} auth={auth} />
    <Route path="/designbrief" getComponent={getDesignBrief} auth={auth} />
    <Route path="/getinvolved" getComponent={getGetInvolved} auth={auth} />
    <Route path="/events" getComponent={getEvents} auth={auth} />
    <Route path="/codeofconduct" getComponent={getCodeOfConduct} auth={auth} />
    <Route path="/postertemplates" getComponent={getPosterTemplates} auth={auth} />
    <Route path="/judging" getComponent={getJurors} auth={auth} />
    <Route path="/finalists" getComponent={getFinalists} auth={auth} />
    <Route path="/placeholder" getComponent={getPlaceholder} auth={auth} />
    <Route path="/userlogin" getComponent={getUserLogin} auth={auth} />
    <Route path="/callback" getComponent={getCallback} auth={auth} />
  </Route>
);
