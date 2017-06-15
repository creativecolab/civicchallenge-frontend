import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import ChallengeText from './components/ChallengeText/ChallengeText';

import styles from './Sponsors.scss';

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
  return (
    <div className={styles.sponsors}>
      <Helmet
        title="Sponsors"
      />
      <Header
        backgroundImg={headerBg}
        headerText={'Sponsors'}
        subheaderText={''}
        showButton={false}
      />
      <ChallengeText />
      <Footer />
    </div>
  );
}

Sponsors.propTypes = propTypes;
Sponsors.contextTypes = contextTypes;
Sponsors.defaultProps = defaultProps;

export default Sponsors;
