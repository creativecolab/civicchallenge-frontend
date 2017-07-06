import React from 'react';
import PropTypes from 'prop-types';

import styles from './ResourceBox.scss';
import pIcon from './placeholdericon.png';

/**
 * ResourceBox
 */

const propTypes = {
  resourceName: PropTypes.string.isRequired,
  resourceText: PropTypes.string.isRequired,
  resourceLink: PropTypes.string.isRequired,
};

const contextTypes = {
  router: PropTypes.object,
};

const defaultProps = {};

function ResourceBox({ resourceName, resourceText, resourceLink }) {
  return (
    <div className={styles.ResourceBox}>
      <a href={resourceLink}>
        <div className={styles.contentContainer}>
          <div className={styles.iconContainer}>
            <img className={styles.resourceIcon} src={pIcon} alt="icon" />
          </div>
          <div className={styles.resourceText}>
            <h2>{resourceName}</h2>
            <p>{resourceText}</p>
          </div>
        </div>
      </a>
    </div>
  );
}

ResourceBox.propTypes = propTypes;
ResourceBox.contextTypes = contextTypes;
ResourceBox.defaultProps = defaultProps;

export default ResourceBox;
