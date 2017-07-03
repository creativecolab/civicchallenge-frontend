import React from 'react';
import PropTypes from 'prop-types';

import styles from './DBBox.scss';


/**
 * DBBox
 */

const propTypes = {};

const contextTypes = {
  router: PropTypes.object,
};

const defaultProps = {};

function DBBox() {
  return (
    <section className={styles.DBBox}>
      <div className={styles.dbBoxImg}>
        <span>Accessibility</span>
      </div>
      <div className={styles.dbBoxText} >
        <p>The lack of convenient, accessible, and affordable transportation for citizens witha  disability
        is a major problem in SD. Programs exist yet challenges persist around infrastructure and transit
        deficient areas.</p>
        <a href="/designbrief">Learn More</a>
      </div>

    </section>
  );
}

DBBox.propTypes = propTypes;
DBBox.contextTypes = contextTypes;
DBBox.defaultProps = defaultProps;

export default DBBox;
