/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
/* import classNames from 'util/classNames'; */

import Navbar from 'components/Navbar/Navbar';
import Footer from 'components/Footer/Footer';
import StandardSectionBox from 'components/StandardSectionBox/StandardSectionBox';

import globalStyles from 'main.scss';

import styles from './LatestInMobility.scss';

/**
 * Constants
 */

const sectionTitle = 'Latest In Mobility';
const description = 'LatestInMobility';


/**
 * Resources
 */

const propTypes = {};

const contextTypes = {
  router: PropTypes.object,
};

const defaultProps = {};

function LatestInMobility() {
  return (
    <div className={styles.resources}>
      <Helmet
        title="LatestInMobility"
      />
      <Navbar />

      <div className={globalStyles.pageWrapper}>
        <StandardSectionBox
          sectionTitle={sectionTitle}
          text={description}
        />
      </div>
      <Footer />
    </div>
  );
}

LatestInMobility.propTypes = propTypes;
LatestInMobility.contextTypes = contextTypes;
LatestInMobility.defaultProps = defaultProps;

export default LatestInMobility;
