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
      <div className={styles.description}>
        <p>D4SD has partnered with the <a href="http://designlab.ucsd.edu/>">UC San Diego Design Lab</a>, <a href="http://www.designforwardsd.com/">the Design Forward Summit</a>, <a href="http://www.scalesd.com/">SCALE SD</a> to
        host an inaugural design challenge to engage San Diego residents in human-centered design. This year’s Civic Challenge focuses on the complex issue of mobility.</p>
        <p>We all have places to go and people to see. Whether for work or play—and by car, bike, train, bus, boat, or foot—mobility significantly affects millions in on a daily basis. San Diego is culturally and economically diverse, as well as geographically dispersed, which makes getting around the city a rich issue to explore. The mobility themes below investigate concerns currently facing San Diegans while looking towards the future of urban transportation.
        </p>
      </div>
    </section>
  );
}

ChallengeText.propTypes = propTypes;
ChallengeText.contextTypes = contextTypes;
ChallengeText.defaultProps = defaultProps;

export default ChallengeText;
