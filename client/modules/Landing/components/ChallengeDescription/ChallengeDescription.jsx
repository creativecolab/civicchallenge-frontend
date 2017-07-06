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
        <p>The people of San Diego know the citys treasures and frustrations firsthand and have the passion
        to shape its future. D4SD and Design Forward want to hear from you! This year, for the first time,
        we are hosting a city-wide design challenge to amplify your voices and ideas. We invite you to share
        your experiences, learn about htose of your neighbor and work together to propose answers for some
        of San Diegos toughest questions. The challenge is structure around design thinking--a human-centered
        approach to innovation--and offers prizes for the brightest solutions .Join us for the 2017 Civic
        Design Challenge to tackle the complex issue of mobility.</p>
        <a className={styles.blueOutline} href="/howitworks">LEARN MORE</a>
      </div>
    </section>
  );
}

ChallengeDescription.propTypes = propTypes;
ChallengeDescription.contextTypes = contextTypes;
ChallengeDescription.defaultProps = defaultProps;

export default withCollectRef('ChallengeDescription')(ChallengeDescription);
