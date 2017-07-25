/* eslint-disable max-len */

import React from 'react';
import PropTypes from 'prop-types';
import ReactGA from 'react-ga';

import styles from './LandingHeader.scss';

/**
 * LandingHeader
 */

const ButtonText = 'Participate Now';

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
    <section id={styles.headerBackground}>
      <div className={styles.main}>
        <div className={styles.mainContent}>
          <p className={styles.text4}>Design for San Diego&#39;s 2017 Civic Challenge</p>
          <h1 className={styles.text2}>Mobility</h1>
          <p className={styles.text3}>Sharpen your design skills while solving mobility challenges for the city.</p>
          <div className={styles.button}>
            <div className={styles.buttonContainer}>
              <a onClick={logClick} href="/getinvolved" rel="noopener noreferrer" target="_blank">{ButtonText}</a>
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
