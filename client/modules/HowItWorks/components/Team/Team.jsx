/* eslint-disable max-len */

import React from 'react';
import PropTypes from 'prop-types';

import TeamComponent from './components/Team/Team';

import styles from './Team.scss';

/**
 * Team
 */

const propTypes = {};

const contextTypes = {
  router: PropTypes.object,
};

const defaultProps = {};

function Team() {
  return (
    <div className={styles.team}>
      <TeamComponent />
    </div>
  );
}

Team.propTypes = propTypes;
Team.contextTypes = contextTypes;
Team.defaultProps = defaultProps;

export default Team;
