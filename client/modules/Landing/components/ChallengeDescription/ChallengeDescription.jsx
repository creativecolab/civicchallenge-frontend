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
        <h1>The Challenge</h1>
        <div className={styles.descr}>
          <p>D4SD has partnered with the <a href="http://designlab.ucsd.edu/>">UC San Diego Design Lab</a>, <a href="http://www.designforwardsd.com/">the Design Forward Summit</a>, <a href="http://www.scalesd.com/">SCALE SD</a> to
          host an inaugural design challenge to engage San Diego residents in human-centered design. This year’s Civic Challenge focuses on the complex issue of mobility.</p>
          <br />
          <p>The people of San Diego know the citys treasures and frustrations firsthand and have the passion
          to shape its future. D4SD and Design Forward want to hear from you! This year, for the first time,
          we are hosting a city-wide design challenge to amplify your voices and ideas. We invite you to share
          your experiences, learn about those of your neighbor and work together to propose answers for some
          of San Diegos toughest questions. The challenge is structure around design thinking--a human-centered
          approach to innovation--and offers prizes for the brightest solutions .Join us for the 2017 Civic
          Design Challenge to tackle the complex issue of mobility.</p>
        </div>
        <div className={styles.button}>
          <a className={styles.blueOutline} href="/howitworks">HOW IT WORKS</a>
        </div>
      </div>
    </section>
  );
}

ChallengeDescription.propTypes = propTypes;
ChallengeDescription.contextTypes = contextTypes;
ChallengeDescription.defaultProps = defaultProps;

export default withCollectRef('ChallengeDescription')(ChallengeDescription);
