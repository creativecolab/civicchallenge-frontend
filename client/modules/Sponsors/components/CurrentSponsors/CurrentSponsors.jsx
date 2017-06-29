/* eslint-disable max-len */

import React from 'react';
import PropTypes from 'prop-types';

import globalStyles from 'main.scss';
import styles from './CurrentSponsors.scss';

import designLabLogo from './design-lab-logo.png';
import designForwardLogo from './design-forward-logo.png';
import protolabLogo from './protolab-logo.png';

/*
 * Constants
 */

const T1_SPONSORS = [
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
];

const T3_SPONSORS = [
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
        <h3 className={globalStyles.sectionTitle}>Current Sponsors</h3>
      </div>
      <div className={styles.sponsors}>
        <h4>Tier 1</h4>
        <div className={styles.sponsorList}>
          {T1_SPONSORS.map(({ href, img, alt }) => (
            <a key={alt} href={href} target="_blank" rel="noopener noreferrer">
              <img className={styles.backgroundFill} src={img} alt={alt} />
            </a>
          ))}
        </div>
        <h4>Tier 2</h4>
        <div className={styles.sponsorList}>
          {T3_SPONSORS.map(({ href, img, alt }) => (
            <a key={alt} href={href} target="_blank" rel="noopener noreferrer">
              <img className={styles.backgroundFill} src={img} alt={alt} />
            </a>
          ))}
        </div>

      </div>
    </div>
  );
}

CurrentSponsors.propTypes = propTypes;
CurrentSponsors.contextTypes = contextTypes;
CurrentSponsors.defaultProps = defaultProps;

export default CurrentSponsors;
