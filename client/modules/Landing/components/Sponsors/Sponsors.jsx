/* eslint-disable max-len */

import React from 'react';
import PropTypes from 'prop-types';
import { withCollectRef } from 'util/RefCollector';

import globalStyles from 'main.scss';
import styles from './Sponsors.scss';

import ChallengeText from './components/ChallengeText/ChallengeText';


/**
 * Sponsors
 */

const propTypes = {
  componentRef: PropTypes.func.isRequired,
};

const contextTypes = {
  router: PropTypes.object,
};

const defaultProps = {};

function Sponsors(props) {
  return (
    <section id={styles.sponsors} ref={props.componentRef}>
      <h3 className={globalStyles.ul}>Sponsor Us</h3>
      <div className="{styles.sponsorsBox}">
        <ChallengeText />
        <div className={styles.button}>
          <div className={styles.buttonContainer}>
            <a href="mailto:spdow@ucsd.edu">Become a Sponsor now</a>
          </div>
        </div>
      </div>
    </section>
  );
}

Sponsors.propTypes = propTypes;
Sponsors.contextTypes = contextTypes;
Sponsors.defaultProps = defaultProps;

export default withCollectRef('Sponsors')(Sponsors);
