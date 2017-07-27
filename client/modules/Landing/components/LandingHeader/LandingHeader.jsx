/* eslint-disable max-len */

import React from 'react';
import PropTypes from 'prop-types';
import ReactGA from 'react-ga';

import globalStyles from 'main.scss';
import styles from './LandingHeader.scss';

/**
 * LandingHeader
 */

/* const ButtonText = 'Participate Now'; */

const propTypes = {};

const contextTypes = {
  router: PropTypes.object,
};

const defaultProps = {};

function logClick() {
  ReactGA.event({
    category: 'Registration',
    action: 'Clicked Register Today',
    label: 'Challenge Text link',
  });
}

function LandingHeader() {
  return (
    <section id={styles.landingHeader}>
      <div className={styles.layer} />
      <div className={globalStyles.contentWrapper}>
        <div className={styles.content}>
          <div className={styles.textWrapper}>
            <h2 className={globalStyles.white}>Design for San Diego&#39;s 2017 Civic Challenge</h2>
            <h1 className={styles.title}>How do we create a San Diego where we all move freely?</h1>
          </div>
          <div className={styles.buttonWrapper}>
            <div className={globalStyles.sectionBtn}>
              <a className={globalStyles.whiteOutline} onClick={logClick} href="/getinvolved" rel="noopener noreferrer" target="_blank">Get Involved</a>
            </div>
            <p className={styles.or}>OR</p>
            <div className={globalStyles.sectionBtn}>
              <a className={globalStyles.blue} onClick={logClick} href="/getinvolved" rel="noopener noreferrer" target="_blank">Learn More</a>
            </div>
          </div>

          <div className={styles.buttonWrapper}>
            <div className={globalStyles.sectionBtn}>
              <a className={globalStyles.whiteOutline} onClick={logClick} href="/getinvolved" rel="noopener noreferrer" target="_blank">Get Involved</a>
            </div>
            <p className={styles.or}>OR</p>
            <div className={globalStyles.sectionBtn}>
              <a className={globalStyles.blue} onClick={logClick} href="/getinvolved" rel="noopener noreferrer" target="_blank">Learn More</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

LandingHeader.propTypes = propTypes;
LandingHeader.contextTypes = contextTypes;
LandingHeader.defaultProps = defaultProps;

export default LandingHeader;
