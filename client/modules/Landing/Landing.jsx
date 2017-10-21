/* eslint-disable max-len */

import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Navbar from 'components/Navbar/Navbar';


import Footer from 'components/Footer/Footer';
import LandingHeader from './components/LandingHeader/LandingHeader';
import ChallengeDescription from './components/ChallengeDescription/ChallengeDescription';
import LandingJurors from './components/LandingJurors/LandingJurors';
import DesignForwardCallout from './components/DesignForwardCallout/DesignForwardCallout';
import TimeLineBox from './components/TimelineBox/TimelineBox';
import ChallengeBriefs from './components/ChallengeBriefs/ChallengeBriefs';
import WhyParticipate from './components/WhyParticipate/WhyParticipate';
import Register from './components/Register/Register';
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
      <LandingHeader />
      <ChallengeDescription />
      <DesignForwardCallout />
      <LandingJurors />
      <TimeLineBox />
      <WhyParticipate />
      <ChallengeBriefs />
      <Register />
      <Sponsors />
      <Footer />
    </div>
  );
}

Landing.propTypes = propTypes;
Landing.contextTypes = contextTypes;
Landing.defaultProps = defaultProps;

export default Landing;
