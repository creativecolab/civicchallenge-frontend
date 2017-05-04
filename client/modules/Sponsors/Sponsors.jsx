import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import Helmet from 'react-helmet';

import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';

import styles from './Sponsors.scss';

import ChallengeText from './components/ChallengeText/ChallengeText';
import CurrentSponsors from './components/CurrentSponsors/CurrentSponsors';

import headerBg from './header-bg.png';

/**
 * Sponsors
 */

const propTypes = {};

const contextTypes = {
  router: PropTypes.object,
};

const defaultProps = {};

function Sponsors() {
  const links = [];

  return (
    <div className={styles.sponsors}>
      <Helmet
        title="Sponsors"
      />
      <Header
        links={links}
        backgroundImg={headerBg}
        headerText={'Sponsors'}
        subheaderText={''}
        showButton={false}
      />
      <ChallengeText />
      <CurrentSponsors />
      <br />
      <Link to="/">Back to homepage</Link>
      <Footer />
    </div>
  );
}

Sponsors.propTypes = propTypes;
Sponsors.contextTypes = contextTypes;
Sponsors.defaultProps = defaultProps;

export default Sponsors;
