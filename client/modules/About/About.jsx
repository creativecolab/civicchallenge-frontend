import React from 'react';
import { Link } from 'react-router';

import styles from './About.scss';

/**
 * About
 */

function About() {
  return (
    <div className={styles.about}>
      I am a About
      <br />
      <Link to="/">Back to homepage</Link>
    </div>
  );
}

export default About;
