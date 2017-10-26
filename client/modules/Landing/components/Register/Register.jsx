/* eslint-disable max-len */

import React from 'react';
import PropTypes from 'prop-types';
import { withCollectRef } from 'util/RefCollector';

import globalStyles from 'main.scss';
import styles from './Register.scss';

/**
 * Constants
 */

const sectionTitle = 'Congratulations to the 2017 D4SD Finalists!';
const description = 'Out of 23 entries into this year\'s challenge, we selected 8 finalists that represent a mix of our four challenge briefs  (commuter experience, accessibility, biking/walking, and autonomous vehicles).';
const btnLink = '/finalists';
const btnText = 'SEE FINALISTS';

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
      <div className={globalStyles.contentWrapper}>
        <div className={styles.content}>
          <h1 className={globalStyles.white}>{sectionTitle}</h1>
          <p className={globalStyles.white}>{description}</p>
          <div className={globalStyles.sectionBtn}>
            <a className={globalStyles.whiteOutline} href={btnLink}>{btnText}</a>
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
