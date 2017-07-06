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
  {
    href: 'http://protolab.ucsd.edu/',
    img: protolabLogo,
    alt: 'ProtoLab',
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
      <div className={styles.current}>
        <h3 className={styles.sectionTitle}>Current Sponsors</h3>
      </div>
      <div className={styles.sponsors}>
        <h4>Tier 1</h4>
        <div className={styles.sponsorContainer}>
          <div className={styles.sponsorList}>
            {T1_SPONSORS.map(({ href, img, alt }) => (
              <a key={alt} href={href} target="_blank" rel="noopener noreferrer">
                <img className={styles.backgroundFill} src={img} alt={alt} />
              </a>
            ))}
          </div>
        </div>
        <h4>Tier 3</h4>
        <div className={styles.sponsorContainer}>
          <div className={styles.sponsorList}>
            {T3_SPONSORS.map(({ href, img, alt }) => (
              <a key={alt} href={href} target="_blank" rel="noopener noreferrer">
                <img className={styles.backgroundFill} src={img} alt={alt} />
              </a>
            ))}
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
