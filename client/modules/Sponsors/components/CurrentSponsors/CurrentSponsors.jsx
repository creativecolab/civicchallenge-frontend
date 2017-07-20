/* eslint-disable max-len */

import React from 'react';
import PropTypes from 'prop-types';

import styles from './CurrentSponsors.scss';

import nsfLogo from './nsf-logo.png';
import designLabLogo from './design-lab-logo.png';
import designForwardLogo from './design-forward-logo.png';
import protolabLogo from './protolab-logo.png';
import scaleSDLogo from './scale-sd-logo.png';

/*
 * Constants
 */

const T1_SPONSORS = [
  {
    href: 'https://www.nsf.gov/',
    img: nsfLogo,
    alt: 'NSF',
  },
];

const T3_SPONSORS = [
  {
    href: 'http://protolab.ucsd.edu/',
    img: protolabLogo,
    alt: 'ProtoLab',
  },
];

const PARTNERS = [
  {
    href: 'http://designlab.ucsd.edu/',
    img: designLabLogo,
    alt: 'UC San Diego Design Lab',
  },
  {
    href: 'http://designforwardsd.com/',
    img: designForwardLogo,
    alt: 'Design Forward Alliance',
  },
  {
    href: 'http://www.scalesd.com/',
    img: scaleSDLogo,
    alt: 'Scale SD',
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
    <div>
      <div id="sponsor-description" className={styles.contentContainer}>
        <p>D4SD sponsors are committed to advancing innovation concepts aimed to improve Mobility
        for the millions of residents in the San Diego region. Sponsorship may come in many forms.
        In-kind sponsors can commit access to training and human resources, studio space, or technology.
        Financial sponsorship will help provide incentives for challenge competitions and hackathons planned
        throughout the Mobility challenge. Sponsorship will allow D4SD to offer design teams cash awards
        for the best designs for improving Mobility in our city.</p>
      </div>
      <div className={styles.contentContainer}>
        <h2>Current Sponsors</h2>
        <div className={styles.sponsors}>
          <h3>Tier 1</h3>
          <div className={styles.sponsorContainer}>
            <div className={styles.sponsorList}>
              {T1_SPONSORS.map(({ href, img, alt }) => (
                <a key={alt} href={href} target="_blank" rel="noopener noreferrer">
                  <img className={styles.backgroundFill} src={img} alt={alt} />
                </a>
              ))}
            </div>
          </div>
          <h3>Tier 3</h3>
          <div className={styles.sponsorContainer}>
            <div className={styles.sponsorList}>
              {T3_SPONSORS.map(({ href, img, alt }) => (
                <a key={alt} href={href} target="_blank" rel="noopener noreferrer">
                  <img className={styles.backgroundFill} src={img} alt={alt} />
                </a>
              ))}
            </div>
          </div>
          <h3>Partners</h3>
          <div className={styles.sponsorContainer}>
            <div className={styles.sponsorList}>
              {PARTNERS.map(({ href, img, alt }) => (
                <a key={alt} href={href} target="_blank" rel="noopener noreferrer">
                  <img className={styles.backgroundFill} src={img} alt={alt} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

CurrentSponsors.propTypes = propTypes;
CurrentSponsors.contextTypes = contextTypes;
CurrentSponsors.defaultProps = defaultProps;

export default CurrentSponsors;
