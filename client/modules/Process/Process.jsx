import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

import styles from './Process.scss';

/**
 * Process
 */

const propTypes = {};

const contextTypes = {
  router: PropTypes.object,
};

const defaultProps = {};

function Process(props, { router }) {
  return (
    <div className={styles.process}>
      Path: {router.location.pathname}
      <br />
      <Link to="/">Back to homepage</Link>
    </div>
  );
}

Process.propTypes = propTypes;
Process.contextTypes = contextTypes;
Process.defaultProps = defaultProps;

export default Process;
