/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Navbar from 'components/Navbar/Navbar';
import Footer from 'components/Footer/Footer';
import StandardSectionBox from 'components/StandardSectionBox/StandardSectionBox';

import globalStyles from 'main.scss';

import CurrentSponsors from './components/CurrentSponsors/CurrentSponsors';
import SponsorBenefits from './components/SponsorBenefits/SponsorBenefits';

import styles from './Sponsors.scss';


/**
 * Constants
 */

const sectionTitle = 'Sponsors';
const description = 'D4SD sponsors are committed to advancing innovative concepts aimed to improve mobility for the millions of residents in the San Diego region. Sponsorship may come in many forms. Financial sponsors provide monetary incentives for challenge competitions and hackathons planned throughout the 2017 Civic Design Challenge on Mobility. In-kind sponsors can provide gift incentives and access to training, human resources, studio space, or technology.';

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
      <Navbar />
      <div className={globalStyles.contentWrapper}>
        <StandardSectionBox
          sectionTitle={sectionTitle}
          text={description}
        />
      </div>
      <div className={globalStyles.contentWrapper}>
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
