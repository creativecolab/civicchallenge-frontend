import React from 'react';
import PropTypes from 'prop-types';

import styles from './dbHeader.scss';

/**
 * dbHeader
 */

const propTypes = {};

const contextTypes = {
  router: PropTypes.object,
};

const defaultProps = {};

function dbHeader() {
  return (
    <p> hi </p>
  );
}

dbHeader.propTypes = propTypes;
dbHeader.contextTypes = contextTypes;
dbHeader.defaultProps = defaultProps;

export default dbHeader;
