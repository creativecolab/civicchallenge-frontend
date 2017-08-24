/* eslint-disable max-len */

import React from 'react';
import PropTypes from 'prop-types';
import { withCollectRef } from 'util/RefCollector';

import styles from './Sponsors.scss';

import sdLogo from './city-of-sd-logo.png';
import nsfLogo from './nsf-logo.png';
import designLabLogo from './design-lab-logo.png';
import designForwardLogo from './design-forward-logo.png';
import scaleSDLogo from './scale-sd-logo.png';

/**
 * Sponsors
 */
const SPONSORS = [
  {
    href: 'https://www.sandiego.gov/',
    img: sdLogo,
    alt: 'City of San Diego',
  },
  {
    href: 'https://www.nsf.gov/',
    img: nsfLogo,
    alt: 'National Science Foundation',
  },
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

const propTypes = {
  componentRef: PropTypes.func.isRequired,
};

const contextTypes = {
  router: PropTypes.object,
};

const defaultProps = {};

function Sponsors(props) {
  return (
    <section id={styles.sponsors} ref={props.componentRef}>
      <div id={styles.sponsorWrapper}>
        {SPONSORS.map(({ href, img, alt }) => (
          <a key={alt} href={href} target="_blank" rel="noopener noreferrer">
            <img className={styles.backgroundFill} src={img} alt={alt} />
          </a>
        ))}
      </div>
    </section>
  );
}

Sponsors.propTypes = propTypes;
Sponsors.contextTypes = contextTypes;
Sponsors.defaultProps = defaultProps;

export default withCollectRef('Sponsors')(Sponsors);
