import React from 'react';
import PropTypes from 'prop-types';

import styles from './DBResources.scss';

/**
 * DBResources
 */

const propTypes = {
  resourceTitle: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

const contextTypes = {
  router: PropTypes.object,
};

const defaultProps = {};

function DBResources({ resourceTitle, description }) {
  return (
    <div className={styles.resources}>
      <div className={styles.resourcesContainer}>
        <div className={styles.resourcesBox}>
          <div className={styles.resourceImg} />
          <div className={styles.resourceText}>
            <h6>{resourceTitle}</h6>
            <p>{description}</p>
            <a href="">Link to Resource</a>
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
}

DBResources.propTypes = propTypes;
DBResources.contextTypes = contextTypes;
DBResources.defaultProps = defaultProps;

export default DBResources;
