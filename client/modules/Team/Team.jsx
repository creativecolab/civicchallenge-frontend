import React from 'react';
import { Link } from 'react-router';

import styles from './Team.scss';

/**
 * Team
 */

function Team() {
  return (
    <div className={styles.team}>
      I am the team page
      <br />
      <Link to="/">Back to homepage</Link>
    </div>
  );
}

export default Team;
