/* eslint-disable max-len */

import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Navbar from 'components/Navbar/Navbar';


import Footer from 'components/Footer/Footer';
import LandingHeader from './components/LandingHeader/LandingHeader';
import LandingVideo from './components/LandingVideo/LandingVideo';
import ChallengeDescription from './components/ChallengeDescription/ChallengeDescription';
import LandingJurors from './components/LandingJurors/LandingJurors';
import DesignForwardCallout from './components/DesignForwardCallout/DesignForwardCallout';
import TimeLineBox from './components/TimelineBox/TimelineBox';
import ChallengeBriefs from './components/ChallengeBriefs/ChallengeBriefs';
import WhyParticipate from './components/WhyParticipate/WhyParticipate';
import Register from './components/Register/Register';
import Sponsors from './components/Sponsors/Sponsors';

import styles from './Landing.scss';
// import LandingVideo from './components/LandingVideo/LandingVideo';

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
      <div style={{"position":"fixed", "backgroundColor":"#4496ff", "top":"0", "left":"0", "right":"0", "color":"white", "textAlign":"center"}}>
        <p style={{"font-size":"22px", "font-weight":"500", "fontFamily":"'Montserrat', sans-serif"}}>
          RETURNING SOON -- Get Involved in D4SD2020!
          <a target="_blank" href="/whitepaper.pdf" style={{"border":"1.5px solid white", "padding": "0.5em 1em 0.5em 1em", "textDecoration":"none", "marginLeft":"3rem", "fontSize":"16px", "color":"white"}}>
            Review D4SD2017!
          </a>
        </p>
      </div>
      <Navbar />
      <LandingHeader />
      <Register />
      {/* TODO: Make this a LandingVideo component */}
      <LandingVideo />
      <ChallengeDescription />
      <DesignForwardCallout />
      <LandingJurors />
      <TimeLineBox />
      <WhyParticipate />
      <ChallengeBriefs />
      <Sponsors />
      <Footer />
    </div>
  );
}

Landing.propTypes = propTypes;
Landing.contextTypes = contextTypes;
Landing.defaultProps = defaultProps;

export default Landing;
