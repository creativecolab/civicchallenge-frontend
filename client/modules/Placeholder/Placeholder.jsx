import React from 'react';
import PropTypes from 'prop-types';
import Navbar from './components/Navbar/Navbar';

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
      <Navbar />
      <p>This is the aa placeholder page ldjldsksdf</p>
    </div>
  );
}

Placeholder.propTypes = propTypes;
Placeholder.contextTypes = contextTypes;
Placeholder.defaultProps = defaultProps;

export default Placeholder;
