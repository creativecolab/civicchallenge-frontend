import React from 'react';
import PropTypes from 'prop-types';

import globalStyles from 'main.scss';
import styles from './DBHeader.scss';

/**
 * constants
 */

const buttonText = 'Coming soon';

/**
 * DBHeader
 */

const propTypes = {
  intro: PropTypes.string.isRequired,
};

const contextTypes = {
  router: PropTypes.object,
};

const defaultProps = {};

function DBHeader({ intro }) {
  return (
    <section className={styles.DBHeader}>
      <div className={styles.DBHeaderText}>
        <h2>Introduction</h2>
        <p>{intro}</p>
        <div className={globalStyles.sectionBtn}>
          <a className={globalStyles.blueOutline} href="">{buttonText}</a>
        </div>
      </div>
    </section>
  );
}

DBHeader.propTypes = propTypes;
DBHeader.contextTypes = contextTypes;
DBHeader.defaultProps = defaultProps;

export default DBHeader;
