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

class Landing extends React.Component {
  state = { messages: [] }

  componentDidMount() {
    fetch('../api/landing')
      .then(res => res.json())
      .then(messages => this.setState({ messages }));
  }

  render() {
    return (
      <div className={styles.landing}>
        <Helmet
          title="Home"
        />
        <Navbar />
        <LandingHeader />
        {this.state.messages.map(message =>
          <div>Welcome {message.message}</div>
        )}
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
}

Landing.propTypes = propTypes;
Landing.contextTypes = contextTypes;
Landing.defaultProps = defaultProps;

export default Landing;
