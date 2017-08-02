import React from 'react';
import PropTypes from 'prop-types';

import globalStyles from 'main.scss';
import styles from './ToolBox.scss';

import tabIcon from './newtab_icon.png';

/**
 * Constants
 */

const propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  linkUrl: PropTypes.string.isRequired,
};

/**
 * DBBox
 */

const contextTypes = {
  router: PropTypes.object,
};

const defaultProps = {};

function ToolBox({ title, text, icon, linkUrl }) {
  return (
    <div className={styles.toolBox}>
      <div className={styles.boxWrapper}>
        <div className={styles.boxContent}>
          <p>{icon}</p>
          {/* <img src={icon} alt={title} className={styles.icon} /> */}
          <div className={styles.title}>
            <a href={linkUrl}><h3 className={globalStyles.blue}>{title}</h3></a>
            <img src={tabIcon} alt={title} />
          </div>
          <h4>{text}</h4>
        </div>
      </div>
    </div>
  );
}

ToolBox.propTypes = propTypes;
ToolBox.contextTypes = contextTypes;
ToolBox.defaultProps = defaultProps;

export default ToolBox;
