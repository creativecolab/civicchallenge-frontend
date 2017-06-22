/* eslint-disable max-len */

import React from 'react';
import PropTypes from 'prop-types';
import { withCollectRef } from 'util/RefCollector';

import styles from './Sponsors.scss';


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
      <div id={styles.sponsorWrapper}>
        <h1>Ready to Take on the Challenge?</h1>
        <div id={styles.sponsorRow}>
          <a href="" className={styles.solidBtn}>REGISTER NOW</a>
          <span>or see</span>
          <a href="" className={styles.outlineBtn}>HOW IT WORKS</a>
        </div>
      </div>
    </section>
  );
}

Sponsors.propTypes = propTypes;
Sponsors.contextTypes = contextTypes;
Sponsors.defaultProps = defaultProps;

export default withCollectRef('Sponsors')(Sponsors);
