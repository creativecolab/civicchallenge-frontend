/* eslint-disable max-len */

import React from 'react';
import PropTypes from 'prop-types';

import globalStyles from 'main.scss';
import styles from './CurrentSponsors.scss';

import intel from './intel.png';
import cisco from './cisco.png';
import xfinity from './xfinity.png';

const propTypes = {};

const contextTypes = {
  router: PropTypes.object,
};

const defaultProps = {};

function CurrentSponsors() {
  return (
    <div>
      <div className={styles.current}>
        <h3 className={globalStyles.ul}>Current Sponsors</h3>
      </div>
      <div className={styles.sponsors}>
        <img src={intel} alt="intel" className={styles.sponsorImage} />
        <img src={cisco} alt="cisco" className={styles.sponsorImage} />
        <img src={xfinity} alt="xfinity" className={styles.sponsorImage} />
      </div>
    </div>
  );
}

CurrentSponsors.propTypes = propTypes;
CurrentSponsors.contextTypes = contextTypes;
CurrentSponsors.defaultProps = defaultProps;

export default CurrentSponsors;
