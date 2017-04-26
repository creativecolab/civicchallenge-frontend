import React from 'react';
import { Link } from 'react-router';

import styles from './Sponsors.scss';

import Header from './components/Header/Header';
import ChallengeText from './components/ChallengeText/ChallengeText';
import CurrentSponsors from './components/CurrentSponsors/CurrentSponsors';
import Footer from './components/Footer/Footer';

/**
 * Sponsors
 */

function Sponsors() {
  return (
    <div className={styles.sponsors}>
      <Header />
      <ChallengeText />
      <CurrentSponsors />
      <br />
      <Link to="/">Back to homepage</Link>
      <Footer />
    </div>
  );
}

export default Sponsors;
