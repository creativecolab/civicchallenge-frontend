/* eslint-disable max-len */

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'util/classNames';

import styles from './ChallengeText.scss';

import designLabLogo from './design-lab-logo.png';
import designForwardLogo from './design-forward-logo.png';
import protolabLogo from './protolab-logo.png';
import scaleSDLogo from './scale-sd-logo.png';

/**
 * Constants
 */

const T1_SPONSORS = [
  {
    href: 'http://designlab.ucsd.edu/',
    img: designLabLogo,
    alt: 'UC San Diego Design Lab',
  },
  {
    href: 'http://www.scalesd.com/',
    img: scaleSDLogo,
    alt: 'SCALE SD',
  },
  {
    href: 'http://designforwardsd.com/',
    img: designForwardLogo,
    alt: 'Design Forward Alliance',
  },
];

const T2_SPONSORS = [
];

const T3_SPONSORS = [
  {
    href: 'http://protolab.ucsd.edu/',
    img: protolabLogo,
    alt: 'ProtoLab',
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
      <p>D4SD sponsors are committed to advancing innovation concepts aimed to improve Mobility
      for the millions of residents in the San Diego region. Sponsorship may come in many forms.
      In-kind sponsors can commit access to training and human resources, studio space, or technology.
      Financial sponsorship will help provide incentives for challenge competitions and hackathons planned
      throughout the Mobility challenge. Sponsorship will allow D4SD to offer design teams cash awards
      for the best designs for improving Mobility in our city.</p>

      <div className={styles.tierBlock}>
        <hr />
        <h4 className={styles.tier}>Tier 1 Partner Sponsors</h4>
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
          <p>Benefits for named partner sponsors:</p>
          <ul>
            <li>Exclusive opportunities to interact with world-renowned designer, Don Norman, Director of the Design Lab.</li>
            <li>Promotion of organization’s logo and/or name promotion on the D4SD website and on any outward facing documents and press. Potential co-branding opportunities with other named partner sponsors. </li>
            <li>Meetings with D4SD organizers before and during the Mobility challenge to provide opinions and ideas on matters of challenge design and implementation.</li>
            <li>Opportunities to showcase your organization at the Design Forward Summit 2017.</li>
            <li>Benefits from Tier 2 and 3 sponsors are included at this level.</li>
          </ul>
        </div>
      </div>

      <div className={styles.tierBlock}>
        <hr />
        <h4 className={styles.tier}>Tier 2 VIP Sponsors</h4>
        <div className={styles.sponsorList}>
          {T2_SPONSORS.map(({ href, img, alt }) => (
            <a key={alt} href={href} target="_blank" rel="noopener noreferrer">
              <img className={styles.backgroundFill} src={img} alt={alt} />
            </a>
          ))}
          <a className={styles.you} href="mailto:design4sandiego@gmail.com">
            <div className={styles.youInner}>You?</div>
          </a>
        </div>
        <div className={styles.text}>
          <p>Benefits for VIP sponsors:</p>
          <ul>
            <li>VIP Access for up to two people to the Design Forward Summit, including access to top students, designers, business leaders and other local talent.</li>
            <li>Opportunity to sponsor, mentor, and work directly with a design team that enters this year’s Mobility Challenge.</li>
            <li>Invitation to join the D4SD Executive Planning Committee for next year.</li>
            <li>Benefits from Tier 3 sponsors are included at this level.</li>
          </ul>
        </div>
      </div>

      <div className={styles.tierBlock}>
        <hr />
        <h4 className={styles.tier}>Tier 3 In-Kind Sponsors</h4>
        <div className={styles.sponsorList}>
          {T3_SPONSORS.map(({ href, img, alt }) => (
            <a key={alt} href={href} target="_blank" rel="noopener noreferrer">
              <img className={styles.backgroundFill} src={img} alt={alt} />
            </a>
          ))}
          <a className={styles.you} href="mailto:design4sandiego@gmail.com">
            <div className={styles.youInner}>You?</div>
          </a>
        </div>
        <div className={styles.text}>
          <p>Benefits for in-kind sponsors</p>
          <ul>
            <li>Promotion of organization’s logo and/or name promotion on the D4SD website.</li>
            <li>Tickets for up to two people to the Design Forward Summit.</li>
          </ul>
        </div>
      </div>

      <div className={styles.callToAction}>
        <p>Contact Prof. Steven Dow to learn more about how you or your organization could contribute
        to D4SD’s 2017 design challenges to improve Mobility in San Diego.</p>
        <a className={styles.sponsorEmail} href="mailto:spdow@ucsd.edu">
          GET STARTED
        </a>
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
