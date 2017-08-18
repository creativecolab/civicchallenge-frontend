import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

import globalStyles from 'main.scss';
import styles from './ResourceBox.scss';

/**
 * ResourceBox
 */

const ButtonText = 'Learn More';

const propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  linkUrl: PropTypes.string.isRequired,
};

const contextTypes = {
  router: PropTypes.object,
};

const defaultProps = {};

function ResourceBox({ title, text, icon, linkUrl }) {
  return (
    <div className={styles.resourceBox}>
      <div className={styles.boxWrapper}>
        <div className={styles.boxContent}>
          <div className={styles.text}>
            <img src={icon} alt={title} />
            <h2 className={globalStyles.orange}>{title}</h2>
            <p className={globalStyles.grey}>{text}</p>
          </div>
          <div className={styles.button}>
            <div className={globalStyles.sectionBtn}>
              <a href={linkUrl} className={globalStyles.orangeOutline}>{ButtonText}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

ResourceBox.propTypes = propTypes;
ResourceBox.contextTypes = contextTypes;
ResourceBox.defaultProps = defaultProps;

export default ResourceBox;
