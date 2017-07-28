import React from 'react';
import PropTypes from 'prop-types';

import globalStyles from 'main.scss';
import styles from './ResourceBox.scss';

/**
 * ResourceBox
 */

const propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

const contextTypes = {
  router: PropTypes.object,
};

const defaultProps = {};

function ResourceBox({ title, text, icon }) {
  return (
    <div className={styles.resourceBox}>
      <div className={styles.boxWrapper}>
        <div className={styles.boxContent}>
          <img src={icon} alt={title} />
          <h2 className={globalStyles.orange}>{title}</h2>
          <p className={globalStyles.grey}>{text}</p>
          <p className={styles.orange}>Coming Soon</p>
        </div>
      </div>
    </div>
  );
}

ResourceBox.propTypes = propTypes;
ResourceBox.contextTypes = contextTypes;
ResourceBox.defaultProps = defaultProps;

export default ResourceBox;
