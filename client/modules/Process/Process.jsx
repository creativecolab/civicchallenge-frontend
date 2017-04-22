import React from 'react';
import { Link } from 'react-router';

import styles from './Process.scss';

/**
 * Process
 */

function Process() {
  return (
    <div className={styles.process}>
      I am a Process
      <br />
      <Link to="/">Back to homepage</Link>
    </div>
  );
}

export default Process;
