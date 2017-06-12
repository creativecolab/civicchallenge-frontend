/* eslint-disable max-len */

import React from 'react';
import PropTypes from 'prop-types';

import styles from './ChallengeText.scss';

/**
 * ChallengeText
 */

const propTypes = {};

const contextTypes = {
  router: PropTypes.object,
};

const defaultProps = {};

function ChallengeText() {
  return (
    <section className={styles.challengeText}>
      <div className={styles.header}>
        <h3>
          <span className={styles.text1}>Civic Challenge:</span>
          <br />
          <span className={styles.text2}>Mobility</span>
          <div className={styles.button}>
            <div className={styles.buttonContainer}>
              <a href="http://goo.gl/6VUXMD" rel="noopener noreferrer" target="_blank">Get Involved</a>
            </div>
          </div>
        </h3>
        <p className={styles.description}>People need to move around a city. Whether for work or play—and by car, bike, train, bus, boat, or foot— mobility significantly affects the daily lives of millions. D4SD is collaborating with the Design Lab at UC San Diego and the Design Forward Alliance to host a 2017 large-scale human-centered design challenge around the complex civic issue of Mobility in San Diego. Our city is home to over 3 million people who depend on our city roads and transportation systems daily. . The mobility challenges below investigate concerns currently facing San Diegans, and examine the tradeoffs to future transportation systems.</p>
      </div>
    </section>
  );
}

ChallengeText.propTypes = propTypes;
ChallengeText.contextTypes = contextTypes;
ChallengeText.defaultProps = defaultProps;

export default ChallengeText;
