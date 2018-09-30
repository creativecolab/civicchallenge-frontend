import React from 'react';
import PropTypes from 'prop-types';

import globalStyles from 'main.scss';
import styles from './PressBox.scss';

/**
 * PressBox
 */

const ButtonText = 'COMING SOON';

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

function PressBox({ title, text, icon, linkUrl }) {
  return (
    <div className={styles.PressBox}>
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

PressBox.propTypes = propTypes;
PressBox.contextTypes = contextTypes;
PressBox.defaultProps = defaultProps;

export default PressBox;
