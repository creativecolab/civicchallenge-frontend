/* eslint-disable max-len */

import React from 'react';
import PropTypes from 'prop-types';
import { withCollectRef } from 'util/RefCollector';

import globalStyles from 'main.scss';
import styles from './ChallengeDescription.scss';


/**
 * ChallengeDescription
 */


const propTypes = {
  componentRef: PropTypes.func.isRequired,
};

const contextTypes = {
  router: PropTypes.object,
};

const defaultProps = {};

function ChallengeDescription(props) {
  return (
    <section id={styles.ChallengeDescription} ref={props.componentRef}>
      <div className={globalStyles.sectionTitle}>
        <h1>We want your voice to be heard.</h1>
        <div className={styles.descr}>
          <p>We are excited to announce that Design for San Diego (D4SD) is partnering with
          the <a href="http://designlab.ucsd.edu/">UC San Diego Design Lab</a>, <a href="http://www.designforwardsd.com/">the Design Forward Summit</a>, <a href="http://www.scalesd.com/">SCALE SD</a> to
           to co-organize our 2017 challenges on topics related to Mobility. We want YOU to get involved!
           D4SD will lead you through a design thinking approach to discover issues, generate ideas,
           and develop prototypes for the city’s most pressing challenges.</p>
          <br />
          <p>Through generous support and encouragement from our sponsors,
          D4SD is proud to offer cash rewards and a range of other exciting prizes
          for solutions with the greatest potential to improve mobility in San Diego.
            Register now and participant in discussions, meetups, and design sprints!</p>
        </div>
        <div className={globalStyles.sectionBtn}>
          <a className={globalStyles.blueOutline} href="/howitworks">HOW IT WORKS</a>
        </div>
      </div>
    </section>
  );
}

ChallengeDescription.propTypes = propTypes;
ChallengeDescription.contextTypes = contextTypes;
ChallengeDescription.defaultProps = defaultProps;

export default withCollectRef('ChallengeDescription')(ChallengeDescription);
