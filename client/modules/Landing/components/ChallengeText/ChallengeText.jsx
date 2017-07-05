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
    <section className={styles.challengeText}>
      <div className={styles.header}>
        <div className={styles.main}>
          <h1 className={styles.text3}>Design for San Diego&#39;s</h1>
          <h1 className={styles.text1}>2017 Civic Challenge</h1>
          <h1 className={styles.text2}>Mobility</h1>
          <p className={styles.text4}><i>Build design skills as you turn your mobility challenges into civic innovations!</i></p>
          <div className={styles.button}>
            <div className={styles.buttonContainer}>
              <a onClick={logClick} href="https://docs.google.com/forms/d/e/1FAIpQLSe-DzyjLGgLHdXkc8Fj7yGJrxm-PJ2Gr_LABKGeQDH699O6Hw/viewform?usp=sf_link" rel="noopener noreferrer" target="_blank">Register Today</a>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.description}>
        <p>D4SD and Design Forward are hosting an inaugural design challenge to foster innovations by the public for San Diego through human-centered design. This year’s Civic Challenge is focused on the complex issue of <b>mobility</b>.</p>
        <p>We all have places to go and people to see. Whether for work or play—and by car, bike, train, bus, boat, or foot—mobility significantly affects millions in on a daily basis. San Diego is culturally and economically diverse, as well as geographically dispersed, which makes getting around the city a rich issue to explore. The mobility themes below investigate concerns currently facing San Diegans while looking towards the future of urban transportation.
        </p>
        <p>D4SD has partnered with the <a href="http://designlab.ucsd.edu/>">UC San Diego Design Lab</a>, <a href="http://www.designforwardsd.com/">the Design Forward Summit</a>, <a href="http://www.scalesd.com/">SCALE SD</a> to
         host an inaugural design challenge to engage San Diego residents in human-centered design. This year’s Civic Challenge focuses on the complex issue of mobility.</p>
      </div>
    </section>
  );
}

ChallengeText.propTypes = propTypes;
ChallengeText.contextTypes = contextTypes;
ChallengeText.defaultProps = defaultProps;

export default ChallengeText;
