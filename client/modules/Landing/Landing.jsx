/* eslint-disable max-len */

import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Footer from 'components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import ChallengeText from './components/ChallengeText/ChallengeText';
import ChallengeGrid from './components/ChallengeGrid/ChallengeGrid';
import GetInvolved from './components/GetInvolved/GetInvolved';
import Sponsors from './components/Sponsors/Sponsors';

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
      <Sponsors />
      <Footer />
    </div>
  );
}

Landing.propTypes = propTypes;
Landing.contextTypes = contextTypes;
Landing.defaultProps = defaultProps;

export default Landing;
