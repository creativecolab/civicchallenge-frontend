import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';

import Timeline from './components/Process/Process';

import styles from './HowItWorks.scss';


/**
 * HowItWorks
 */

const propTypes = {};

const contextTypes = {
  router: PropTypes.object,
};

const defaultProps = {};

function HowItWorks() {
  return (
    <div className={styles.HowItWorks}>
      <Helmet
        title="HowItWorks"
      />
      <Header
        backgroundImg={''}
        headerText="How It Works"
        subheaderText={''}
        showButton={false}
      />
      <div className={styles.contentText}>
        <div id="theChallenge" className={styles.contentContainer}>
          <h2>The Challenge</h2>
          <p>The 2017 Civic Design Challenge is focused on shaping a San Diego in which
          everybody is able to move freely.</p>
          <p>There are four phases, each of which is a different opportunity to get involved
          and contribute to the effort. During the Discover phase, you will learn about the
          briefs and discuss what you find with fellow San Diegans. In Ideate, you will turn
          your critical conversations into imaginative strategies. Finally, Prototype and Take
          Action involve forming teams (so you can compete for prizes) and then making those
          ideas tangible—first on paper, then in the city!</p>
          <p>Mobility is a complex issue with many facets. Our design briefs frame specific aspects
          of this wicked problem. Look at the design briefs, pick one or two that interest you,
          then jump into the discussion by registering for Slack, our discussion platform.
          We’re excited to see you there!</p>
        </div>
        <div id="process" className={styles.contentContainer}>
          <h2>Process</h2>
          <Timeline />
          <div className={styles.sectionBtn}>
            <a className={styles.blueOutline} href="">LEARN MORE</a>
          </div>
        </div>
        <div id="rules" className={styles.contentContainer}>
          <h2>Rules & Guildlines </h2>
          <p>Check back here for more specific rules and guidelines, as well as how to submit
          a proposal, as we near the Prototype phase.</p>
        </div>
        <div id="designBriefs" className={styles.contentContainer}>
          <h2>Design Briefs</h2>
          <p>description here</p>
          <div className={styles.sectionBtn}>
            <a className={styles.blueOutline} href="/challenges">BROWSE BRIEFS</a>
          </div>
        </div>
        <div id="registerCallout" className={styles.contentContainer}>
          <h2>Ready to take on the challenge?</h2>
          <p>Ready to take on the challenge tagline here</p>
          <div className={styles.sectionBtn}>
            <a className={styles.salmon} href="">REGISTER TODAY</a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

HowItWorks.propTypes = propTypes;
HowItWorks.contextTypes = contextTypes;
HowItWorks.defaultProps = defaultProps;

export default HowItWorks;
