/* eslint-disable max-len */

import React from 'react';
import PropTypes from 'prop-types';
import { withCollectRef } from 'util/RefCollector';

import globalStyles from 'main.scss';
import styles from './Register.scss';

/**
 * Constants
 */

const sectionTitle = 'Ready to Get Started?';
const description = 'Learn how you can get involved in the D4SD Mobility Challenges.';
const btnLink = '/getinvolved';
const btnText = 'Get Involved';

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
      <div className={globalStyles.componentWrapper}>
        <div className={globalStyles.contentContainer}>
          <h1>{sectionTitle}</h1>
          <p>{description}</p>
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
