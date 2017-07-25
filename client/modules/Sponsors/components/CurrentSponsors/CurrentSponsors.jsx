/* eslint-disable max-len */

import React from 'react';
import PropTypes from 'prop-types';

import globalStyles from 'main.scss';

import styles from './CurrentSponsors.scss';

import nsfLogo from './nsf-logo.png';

/*
 * Constants
 */

const ButtonText = 'Become a Sponsor Today';

const T1_SPONSORS = [
  {
    href: 'https://www.nsf.gov/',
    img: nsfLogo,
    alt: 'NSF',
  },
];

/*
 * Current Sponsors
 */

const propTypes = {};

const contextTypes = {
  router: PropTypes.object,
};

const defaultProps = {};

function CurrentSponsors() {
  return (
    <div className={globalStyles.contentContainer}>
      <h2 className={globalStyles.sponsorBenefits}>Current Sponsors</h2>
      <div className={styles.sponsors}>
        <div className={styles.sponsorContainer}>
          <div className={styles.sponsorList}>
            {T1_SPONSORS.map(({ href, img, alt }) => (
              <a key={alt} href={href} target="_blank" rel="noopener noreferrer">
                <img className={styles.backgroundFill} src={img} alt={alt} />
              </a>
            ))}
          </div>
        </div>
        <div className={globalStyles.sectionBtn}>
          <a className={globalStyles.blueOutline} href="mailto:team@d4sd.org">{ButtonText}</a>
        </div>
      </div>
    </div>
  );
}

CurrentSponsors.propTypes = propTypes;
CurrentSponsors.contextTypes = contextTypes;
CurrentSponsors.defaultProps = defaultProps;

export default CurrentSponsors;
