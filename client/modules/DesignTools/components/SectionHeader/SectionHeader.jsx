/* eslint-disable react/no-danger */

import React from 'react';
import PropTypes from 'prop-types';

import globalStyles from 'main.scss';
import styles from './SectionHeader.scss';

/**
 * StandardSectionBox
 */

const propTypes = {
  sectionTitle: PropTypes.string,
  text: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

const contextTypes = {
  router: PropTypes.object,
};

const defaultProps = {
  sectionTitle: '',
};

function SectionHeader({ sectionTitle, text, icon }) {
  return (
    <div className={styles.contentContainer}>
      <div className={styles.sectionBox}>
        <div className={styles.headerTitle}>
          <h2 className={globalStyles.grey}>{sectionTitle}</h2>
          <img src={icon} alt={sectionTitle} className={styles.icon} />
        </div>
        <p
          dangerouslySetInnerHTML={{
            __html: text,
          }}
        />
      </div>
    </div>
  );
}

SectionHeader.propTypes = propTypes;
SectionHeader.contextTypes = contextTypes;
SectionHeader.defaultProps = defaultProps;

export default SectionHeader;
