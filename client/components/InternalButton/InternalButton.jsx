import React from 'react';
import PropTypes from 'prop-types';

import styles from './InternalButton.scss';

/**
 * InternalButton
 */

const propTypes = {
  btnText: PropTypes.string.isRequired,
  btnLink: PropTypes.string.isRequired,
};

const contextTypes = {
  router: PropTypes.object,
};

const defaultProps = {};

function InternalButton({ btnText, btnLink }) {
  return (
    <a href={btnLink} className={styles.solidBtn}>{ btnText }</a>
  );
}

InternalButton.propTypes = propTypes;
InternalButton.contextTypes = contextTypes;
InternalButton.defaultProps = defaultProps;

export default InternalButton;
