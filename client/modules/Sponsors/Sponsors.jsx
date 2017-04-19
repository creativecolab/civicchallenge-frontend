import React from 'react';
import { Link } from 'react-router';

import styles from './Sponsors.scss';

/**
 * Sponsors
 */

function Sponsors() {
  return (
    <div className={styles.sponsors}>
      I am the sponsor page
      <br />
      <Link to="/">Back to homepage</Link>
    </div>
  );
}

export default Sponsors;
