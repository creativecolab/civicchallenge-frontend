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
          <p>description here </p>
        </div>
        <div id="process" className={styles.contentContainer}>
          <h2>Process</h2>
          <Timeline />
          <div className={styles.sectionBtn}>
            <a className={styles.blueOutline} href="">LEARN MORE</a>
          </div>
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
          <p>Some tagline goes here some tagline goes here some </p>
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
