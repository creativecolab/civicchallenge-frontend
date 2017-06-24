import React from 'react';
import PropTypes from 'prop-types';

import styles from './InternalButton.scss';

/**
 * InternalButton
 */

const propTypes = {};

const contextTypes = {
  router: PropTypes.object,
};

const defaultProps = {};

function InternalButton() {
  return (
    <a href="" className={styles.solidBtn}>REGISTER NOW</a>
  );
}

InternalButton.propTypes = propTypes;
InternalButton.contextTypes = contextTypes;
InternalButton.defaultProps = defaultProps;

export default InternalButton;
