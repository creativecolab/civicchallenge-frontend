import React from 'react';
import PropTypes from 'prop-types';

import styles from './Placeholder.scss';

/**
 * Placeholder
 */

const propTypes = {};

const contextTypes = {
  router: PropTypes.object,
};

const defaultProps = {};

function Placeholder() {
  return (
    <div className={styles.placeholder}>
      <p>This is the a placeholder page</p>
    </div>
  );
}

Placeholder.propTypes = propTypes;
Placeholder.contextTypes = contextTypes;
Placeholder.defaultProps = defaultProps;

export default Placeholder;
