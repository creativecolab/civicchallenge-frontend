/* eslint-disable max-len */

import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Footer from 'components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import ChallengeText from './components/ChallengeText/ChallengeText';
import Process from './components/Process/Process';
import ChallengeGrid from './components/ChallengeGrid/ChallengeGrid';
import About from './components/About/About';
import GetInvolved from './components/GetInvolved/GetInvolved';
import Sponsors from './components/Sponsors/Sponsors';
import SponsorBar from './components/SponsorBar/SponsorBar';
import CivicFramework from './components/CivicFramework/CivicFramework';

import styles from './Landing.scss';

/**
 * Landing
 */

const propTypes = {};

const contextTypes = {
  router: PropTypes.object,
};

const defaultProps = {};

function Landing() {
  return (
    <div className={styles.landing}>
      <Helmet
        title="Home"
      />
      <Navbar />
      <ChallengeText />
      <ChallengeGrid />
      <GetInvolved />
      <Process />
      <CivicFramework />
      <About />
      <Sponsors />
      <SponsorBar />
      <Footer />
    </div>
  );
}

Landing.propTypes = propTypes;
Landing.contextTypes = contextTypes;
Landing.defaultProps = defaultProps;

export default Landing;
