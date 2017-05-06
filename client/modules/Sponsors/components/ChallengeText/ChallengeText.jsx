/* eslint-disable max-len */

import React from 'react';
import PropTypes from 'prop-types';

import globalStyles from 'main.scss';
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
    <section className={styles.challengeText} ref={(element) => { this.rootElement = element; }}>
      <div className={styles.action}>
        <h3 className={globalStyles.ul}>Civic Challenge Sponsorship</h3>
        <p className={styles.description}>How can companies get onboard?</p>
        <ul className={styles.list}>
          <li> <b>Shape a design brief: </b> help inform and craft a design brief related to the mobility theme </li>
          <li> <b> Ideation rewards: </b> provides incentives for online ideation competitions in July/August </li>
          <li> <b> Prototyping team support: </b> support a team of creative and diverse thinkers, engineers, students, etc. to prototype and test promising concepts </li>
          <li> <b> Prototype showcase: </b> sponsor the challenge showcase and competition at the summit </li>
          <li> <b> Research: </b> provide support for Design Lab researchers investingating new approaches to problem-solving at scale </li>
        </ul>
      </div>
      <div className={styles.header}>
        <h3> Header </h3>
        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pretium hendrerit mauris, eu commodo libero tempus ac. Donec ligula ligula, sagittis sit amet pellentesque at, bibendum quis orci. Phasellus enim tortor, dictum nec quam in, iaculis facilisis libero. Etiam at aliquet neque. Pellentesque id pellentesque erat, et pulvinar ipsum. Maecenas aliquet mi vel nisl sollicitudin, semper ullamcorper est feugiat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris hendrerit tincidunt bibendum. Nam gravida metus magna, et venenatis est pharetra vitae. In sem eros, luctus in ultrices ut, varius eget mauris. Nulla faucibus arcu urna, mollis semper odio pellentesque eu.</p>
      </div>
    </section>
  );
}

ChallengeText.propTypes = propTypes;
ChallengeText.contextTypes = contextTypes;
ChallengeText.defaultProps = defaultProps;

export default ChallengeText;
