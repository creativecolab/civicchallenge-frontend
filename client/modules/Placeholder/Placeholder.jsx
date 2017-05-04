import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

import styles from './Placeholder.scss';

/**
 * Placeholder
 */

const propTypes = {};

const contextTypes = {
  router: PropTypes.object,
};

const defaultProps = {};

function Placeholder(props, { router }) {
  return (
    <div className={styles.placeholder}>
      Path: {router.location.pathname}
      <br />
      <Link to="/">Back to homepage</Link>
    </div>
  );
}

Placeholder.propTypes = propTypes;
Placeholder.contextTypes = contextTypes;
Placeholder.defaultProps = defaultProps;

export default Placeholder;
