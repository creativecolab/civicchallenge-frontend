/* eslint-disable max-len */

import React from 'react';
import PropTypes from 'prop-types';
import { withCollectRef } from 'util/RefCollector';

import styles from './Register.scss';


/**
 * Register
 */

const propTypes = {
  componentRef: PropTypes.func.isRequired,
};

const contextTypes = {
  router: PropTypes.object,
};

const defaultProps = {};

function Register(props) {
  return (
    <section id={styles.register} ref={props.componentRef}>
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

Register.propTypes = propTypes;
Register.contextTypes = contextTypes;
Register.defaultProps = defaultProps;

export default withCollectRef('Register')(Register);
