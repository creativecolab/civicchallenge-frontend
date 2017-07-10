/* eslint-disable max-len */

import React from 'react';
import PropTypes from 'prop-types';
import { withCollectRef } from 'util/RefCollector';

import InternalButton from 'components/InternalButton/InternalButton';

import globalStyles from 'main.scss';
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
      <div className={globalStyles.sectionTitle}>
        <h1>Ready to Take on the Challenge?</h1>
        <div id={styles.sponsorRow}>
          <div className={styles.button}>
            <InternalButton
              btnText="Register Now"
              btnLink=""
            />
          </div>
          <div id={styles.or}><p>or see</p></div>
          <div className={styles.button}>
            <a href="" className={styles.outlineBtn}>HOW IT WORKS</a>
          </div>
        </div>
      </div>
    </section>
  );
}

Register.propTypes = propTypes;
Register.contextTypes = contextTypes;
Register.defaultProps = defaultProps;

export default withCollectRef('Register')(Register);
