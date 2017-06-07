/* eslint-disable max-len */

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'util/classNames';

import styles from './ChallengeText.scss';

import designLabLogo from './design-lab-logo.png';
import designForwardLogo from './design-forward-logo.png';
import protolabLogo from './protolab-logo.png';

/**
 * Constants
 */

const T1_SPONSORS = [
  {
    href: 'http://designlab.ucsd.edu/',
    img: designLabLogo,
    alt: 'UC San Diego Design Lab',
  },
];

const FRIENDS = [
  {
    href: 'https://designforwardsd.com/',
    img: designForwardLogo,
    alt: 'Design Forward Alliance',
  },
  {
    href: 'http://protolab.ucsd.edu/',
    img: protolabLogo,
    alt: 'Protolab',
  },
];


/**
 * Sponsors
 */

const propTypes = {
  componentRef: PropTypes.func.isRequired,
};

const contextTypes = {
  router: PropTypes.object,
};

const defaultProps = {};

function ChallengeText(props) {
  return (
    <section id={styles.sponsors} ref={props.componentRef}>
      <h4 className={styles.tier}>Tier 1 Sponsors</h4>
      <div className={styles.sponsorList}>
        {T1_SPONSORS.map(({ href, img, alt }) => (
          <a key={alt} href={href} target="_blank" rel="noopener noreferrer">
            <img className={styles.backgroundFill} src={img} alt={alt} />
          </a>
        ))}
        <a className={styles.you} href="mailto:design4sandiego@gmail.com">
          <div className={styles.youInner}>You?</div>
        </a>
      </div>
      <div className={styles.text}>
        We are currently seeking additional partners to sponsor our 2017 civic challenge around issues of mobility in San Diego. Key benefits include:
        <ul>
          <li>Access to top talent:  meet students, designers, and other local talent</li>
          <li>Shape a design brief: help inform and craft a design brief related to mobility</li>
          <li>Invitations to events: join us for local meetups with D4SD and Design Forward</li>
        </ul>

        If you are interested in learning more and to talk about the sponsorship model and the initiative in general, please reach out to <a href="mailto:design4sandiego@gmail.com">design4sandiego@gmail.com</a>
      </div>
      <h4 className={styles.tier}>Friends of D4SD</h4>
      <div className={classNames([styles.sponsorList, styles.small])}>
        {FRIENDS.map(({ href, img, alt }) => (
          <a key={alt} href={href} target="_blank" rel="noopener noreferrer">
            <img className={styles.backgroundFill} src={img} alt={alt} />
          </a>
        ))}
        <a className={styles.you} href="mailto:design4sandiego@gmail.com">
          <div className={styles.youInner}>You?</div>
        </a>
      </div>
    </section>
  );
}

ChallengeText.propTypes = propTypes;
ChallengeText.contextTypes = contextTypes;
ChallengeText.defaultProps = defaultProps;

export default ChallengeText;
