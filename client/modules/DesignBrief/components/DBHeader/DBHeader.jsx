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
};

const contextTypes = {
  router: PropTypes.object,
};

const defaultProps = {};

function DBHeader() {
  return (
    <section className={styles.DBHeader}>
      <div className={styles.DBHeaderText}>
        <h2>Introduction</h2>
        <p>Many people face challenges getting around. Mobility can be difficult for any combination of physical, sensory, mental, or cognitive impairments. Approximately 17% of San Diegans have some form of impairment that affects mobility. Individuals older than 60 represent the fastest growing segment of the population, with the number of senior residents expected to double by 2030 [cite]. These challenges are worsened by the sprawling nature of our region compared to other cities, since people often go farther to reach their destination.</p>
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
