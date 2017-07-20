import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import CurrentSponsors from './components/CurrentSponsors/CurrentSponsors';
import SponsorBenefits from './components/SponsorBenefits/SponsorBenefits';


import styles from './Sponsors.scss';

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
        backgroundImg={''}
        headerText={'Sponsors'}
        subheaderText={''}
        showButton={false}
      />
      <div className={styles.contentWrapper}>
        <CurrentSponsors />
        <SponsorBenefits />
      </div>
      <Footer />
    </div>
  );
}

Sponsors.propTypes = propTypes;
Sponsors.contextTypes = contextTypes;
Sponsors.defaultProps = defaultProps;

export default Sponsors;
