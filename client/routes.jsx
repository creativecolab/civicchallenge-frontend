import React from 'react';
import { Route, IndexRoute } from 'react-router';
import ReactGA from 'react-ga';

import App from './modules/App/App';
import Landing from './modules/Landing/Landing';
import SignUp from './modules/SignUp/SignUp';
import Login from './modules/Login/Login';
import Activation from './modules/Activation/Activation';
// require.ensure Polyfill
if (typeof require.ensure !== 'function') {
  require.ensure = function requireModule(deps, callback) {
    callback(require);
  };
}

const getPress = (nextState, cb) => require.ensure([], require => cb(null, require('./modules/Press/Press').default), 'press');
const getSponsors = (nextState, cb) => require.ensure([], require => cb(null, require('./modules/Sponsors/Sponsors').default), 'sponsors');
const getAbout = (nextState, cb) => require.ensure([], require => cb(null, require('./modules/About/About').default), 'about');
const getChallenges = (nextState, cb) => require.ensure([], require => cb(null, require('./modules/Challenges/Challenges').default), 'challenges');
const getResources = (nextState, cb) => require.ensure([], require => cb(null, require('./modules/Resources/Resources').default), 'resources');
const getNews = (nextState, cb) => require.ensure([], require => cb(null, require('./modules/News/News').default), 'News');
const getFAQ = (nextState, cb) => require.ensure([], require => cb(null, require('./modules/FAQ/FAQ').default), 'faq');
const getDesignBrief = (nextState, cb) => require.ensure([], require => cb(null, require('./modules/DesignBrief/DesignBrief').default), 'designbrief');
const getGetInvolved = (nextState, cb) => require.ensure([], require => cb(null, require('./modules/GetInvolved/GetInvolved').default), 'getinvolved');
const getEvents = (nextState, cb) => require.ensure([], require => cb(null, require('./modules/Events/Events').default), 'events');
const getCodeOfConduct = (nextState, cb) => require.ensure([], require => cb(null, require('./modules/CodeOfConduct/CodeOfConduct').default), 'codeofconduct');
const getPosterTemplates = (nextState, cb) => require.ensure([], require => cb(null, require('./modules/PosterTemplates/PosterTemplates').default), 'postertemplates');
const getJurors = (nextState, cb) => require.ensure([], require => cb(null, require('./modules/Jurors/Jurors').default), 'jurors');
const getEntries = (nextState, cb) => require.ensure([], require => cb(null, require('./modules/Entries/Entries').default), 'entries');
const getPlaceholder = (nextState, cb) => require.ensure([], require => cb(null, require('./modules/Placeholder/Placeholder').default), 'placeholder');


function onRouteChange(prev, next) {
  ReactGA.pageview(next.location.pathname);
}

export default (
  <Route path="/" component={App} onChange={onRouteChange}>
    <IndexRoute component={Landing} />
    <Route path="/signup" component={SignUp} />
    <Route path="/login" component={Login} />
    <Route path="/activation/:id" component={Activation} />
    <Route path="/sponsors" getComponent={getSponsors} />
    <Route path="/about" getComponent={getAbout} />
    <Route path="/challenges" getComponent={getChallenges} />
    <Route path="/challenges/:id" getComponent={getDesignBrief} />
    <Route path="/resources" getComponent={getResources} />
    <Route path="/resources/News" getComponent={getNews} />
    <Route path="/faqs" getComponent={getFAQ} />
    <Route path="/designbrief" getComponent={getDesignBrief} />
    <Route path="/getinvolved" getComponent={getGetInvolved} />
    <Route path="/events" getComponent={getEvents} />
    <Route path="/codeofconduct" getComponent={getCodeOfConduct} />
    <Route path="/postertemplates" getComponent={getPosterTemplates} />
    <Route path="/judging" getComponent={getJurors} />
    <Route path="/entries" getComponent={getEntries} />
    <Route path="/placeholder" getComponent={getPlaceholder} />
    <Route path="/press" getComponent={getPress} />
  </Route>
);
