/* eslint-disable max-len */

import React from 'react';
import PropTypes from 'prop-types';

import styles from './ChallengeText.scss';


/**
 * Sponsors
 */

const SPONSOR_INFO = [
  {
    title: 'Tier 1 Partner Sponsors',
    benefits: [
      'Exclusive opportunities to interact with world-renowned designer, Don Norman, Director of the Design Lab.',
      'Promotion of organization’s logo and/or name promotion on the D4SD website and on any outward facing documents and press. Potential co-branding opportunities with other named partner sponsors.',
      'Meetings with D4SD organizers before and during the Mobility challenge to provide opinions and ideas on matters of challenge design and implementation.',
      'Benefits from Tier 2 and 3 sponsors are included at this level.',
    ],
  },
  {
    title: 'Tier 2 VIP Sponsors',
    benefits: [
      'VIP Access for up to two people to the Design Forward Summit, including access to top students, designers, business leaders and other local talent.',
      'Opportunity to sponsor, mentor, and work directly with a design team that enters this year’s Mobility Challenge.',
      'Invitation to join the D4SD Executive Planning Committee for next year.',
      'Benefits from Tier 3 sponsors are included at this level.',
    ],
  },
  {
    title: 'Tier 3 In-Kind Sponsors',
    benefits: [
      'Promotion of organization’s logo and/or name promotion on the D4SD website.',
      'Tickets for up to two people to the Design Forward Summit.',
    ],
  },
];


const propTypes = {
  componentRef: PropTypes.func.isRequired,
};

const contextTypes = {
  router: PropTypes.object,
};

const defaultProps = {};

function ChallengeText(props) {
  return (
    <section id={styles.challengeText} ref={props.componentRef}>
      <div id="sponsor-description" className={styles.sectionTitle}>
        <h3>What Our Sponsors Do</h3>
        <p>D4SD sponsors are committed to advancing innovation concepts aimed to improve Mobility
        for the millions of residents in the San Diego region. Sponsorship may come in many forms.
        In-kind sponsors can commit access to training and human resources, studio space, or technology.
        Financial sponsorship will help provide incentives for challenge competitions and hackathons planned
        throughout the Mobility challenge. Sponsorship will allow D4SD to offer design teams cash awards
        for the best designs for improving Mobility in our city.</p>
      </div>
      {SPONSOR_INFO.map(({ title, benefits }) => (
        <div className={styles.tierBlock}>
          <h4>{title}</h4>
          <ul>
            {benefits.map(benefit =>
              <li key={benefit}>{benefit}</li>
              )}
          </ul>
        </div>
      ))}
      <div className={styles.sponsorCallout}>
        <h3>Interested in Becoming a Sponsor?</h3>
        <div className={styles.sponsorBtn}>
          <a className={styles.salmon} href="mailto:team@d4sd.org">SPONSOR US</a>
        </div>
      </div>

    </section>
  );
}

ChallengeText.propTypes = propTypes;
ChallengeText.contextTypes = contextTypes;
ChallengeText.defaultProps = defaultProps;

export default ChallengeText;
