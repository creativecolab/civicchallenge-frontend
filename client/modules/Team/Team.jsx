import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

import styles from './Team.scss';

/**
 * Team
 */

const propTypes = {};

const contextTypes = {
  router: PropTypes.object,
};

const defaultProps = {};

function Team(props, { router }) {
  return (
    <div className={styles.team}>
      Path: {router.location.pathname}
      <br />
      <Link to="/">Back to homepage</Link>
    </div>
  );
}

Team.propTypes = propTypes;
Team.contextTypes = contextTypes;
Team.defaultProps = defaultProps;

export default Team;
