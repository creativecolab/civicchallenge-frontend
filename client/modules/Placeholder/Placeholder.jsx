import React from 'react';
import { Link } from 'react-router';

import styles from './Placeholder.scss';

/**
 * Placeholder
 */

function Placeholder() {
  return (
    <div className={styles.placeholder}>
      I am a placeholder
      <br />
      <Link to="/">Back to homepage</Link>
    </div>
  );
}

export default Placeholder;
