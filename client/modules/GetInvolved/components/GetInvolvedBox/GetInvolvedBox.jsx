import React from 'react';
import PropTypes from 'prop-types';

import globalStyles from 'main.scss';

import styles from './GetInvolvedBox.scss';

/**
 * GetInvolvedBox
 */

const propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  linkUrl: PropTypes.string.isRequired,
  rel: PropTypes.string.isRequired,
  target: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  boxColor: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired,
};

const contextTypes = {
  router: PropTypes.object,
};

const defaultProps = {};

function GetInvolvedBox({ title, text, buttonText, linkUrl, rel, target, icon, boxColor, textColor }) {
  const sectStyle = { backgroundColor: boxColor, color: textColor };
  return (
    <section className={globalStyles.sectionWrapper} style={sectStyle}>
      <div className={styles.getInvolvedBox}>
        <div className={styles.boxWrapper}>
          <div className={styles.boxContent}>
            <img src={icon} alt={title} />
            <h2>{title}</h2>
            <p>{text}</p>
            <br />
            <div className={globalStyles.sectionBtn}>
              <a className={globalStyles.blueOutline} href={linkUrl} rel={rel} target={target}>{buttonText}</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

GetInvolvedBox.propTypes = propTypes;
GetInvolvedBox.contextTypes = contextTypes;
GetInvolvedBox.defaultProps = defaultProps;

export default GetInvolvedBox;
