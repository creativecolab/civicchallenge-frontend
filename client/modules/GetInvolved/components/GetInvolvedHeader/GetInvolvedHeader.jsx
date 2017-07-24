import React from 'react';
import PropTypes from 'prop-types';

import globalStyles from 'main.scss';

import styles from './GetInvolvedHeader.scss';

/**
 * GetInvolvedHeader
 */

const propTypes = {};

const contextTypes = {
  router: PropTypes.object,
};

const defaultProps = {};

function GetInvolvedHeader() {
  return (
    <div className={styles.getInvolvedHeader}>
      <p className={globalStyles.hi}>placeholder</p>
    </div>
  );
}

GetInvolvedHeader.propTypes = propTypes;
GetInvolvedHeader.contextTypes = contextTypes;
GetInvolvedHeader.defaultProps = defaultProps;

export default GetInvolvedHeader;
