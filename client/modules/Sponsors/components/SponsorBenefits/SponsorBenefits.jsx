/* eslint-disable max-len */

import React from 'react';
import PropTypes from 'prop-types';

import styles from './SponsorBenefits.scss';


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

function SponsorBenefits(props) {
  return (
    <section id={styles.SponsorBenefits} ref={props.componentRef}>
      <div id="sponsor-description" className={styles.sectionTitle}>
        <h2>Benefits</h2>
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
        <h2>Support Us Now</h2>
        <p>Contact our team to learn more about how you or your organization could contribute to D4SD’s 2017 design challenges to improve Mobility in San Diego.</p>
        <div className={styles.sponsorBtn}>
          <a className={styles.salmon} href="mailto:team@d4sd.org">BECOME A SPONSOR NOW</a>
        </div>
      </div>

    </section>
  );
}

SponsorBenefits.propTypes = propTypes;
SponsorBenefits.contextTypes = contextTypes;
SponsorBenefits.defaultProps = defaultProps;

export default SponsorBenefits;
