/* eslint-disable max-len */

import React from 'react';
import PropTypes from 'prop-types';
import ReactGA from 'react-ga';

import styles from './ChallengeText.scss';

/**
 * ChallengeText
 */

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

function ChallengeText() {
  return (
    <section id={styles.headerBackground}>
      <div className={styles.main}>
        <div className={styles.mainContent}>
          <p className={styles.text4}>Design for San Diego&#39;s 2017 Civic Challenge</p>
          <h1 className={styles.text2}>Mobility</h1>
          <p className={styles.text4}>Build design skills as you turn your mobility challenges into civic innovations!</p>
          <div className={styles.button}>
            <div className={styles.buttonContainer}>
              <a onClick={logClick} href="https://docs.google.com/forms/d/e/1FAIpQLSe-DzyjLGgLHdXkc8Fj7yGJrxm-PJ2Gr_LABKGeQDH699O6Hw/viewform?usp=sf_link" rel="noopener noreferrer" target="_blank">Register Today</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

ChallengeText.propTypes = propTypes;
ChallengeText.contextTypes = contextTypes;
ChallengeText.defaultProps = defaultProps;

export default ChallengeText;
