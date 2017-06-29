/* eslint-disable max-len */

import React from 'react';
import PropTypes from 'prop-types';

import globalStyles from 'main.scss';

import InternalButton from 'components/InternalButton/InternalButton';
import styles from './ChallengeText.scss';


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
      <div id="sponsor-description" className={globalStyles.sectionTitle}>
        <h3>What Our Sponsors Do</h3>
        <p>D4SD sponsors are committed to advancing innovation concepts aimed to improve Mobility
        for the millions of residents in the San Diego region. Sponsorship may come in many forms.
        In-kind sponsors can commit access to training and human resources, studio space, or technology.
        Financial sponsorship will help provide incentives for challenge competitions and hackathons planned
        throughout the Mobility challenge. Sponsorship will allow D4SD to offer design teams cash awards
        for the best designs for improving Mobility in our city.</p>
        <h3>Tiers of Sponsorship and Associated Benefits</h3>
      </div>
      <div className={styles.tierBlock}>
        <h4 className={styles.tier}>Tier 1 Partner Sponsors</h4>
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
        <h4 className={styles.tier}>Tier 2 VIP Sponsors</h4>
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
        <h4 className={styles.tier}>Tier 3 In-Kind Sponsors</h4>
        <div className={styles.text}>
          <p>Benefits for in-kind sponsors</p>
          <ul>
            <li>Promotion of organization’s logo and/or name promotion on the D4SD website.</li>
            <li>Tickets for up to two people to the Design Forward Summit.</li>
          </ul>
        </div>
      </div>

      <div id={styles.sponsorCallout}>
        <div className={globalStyles.sectionTitle}>
          <h3>Interested in Becoming a Sponsor?</h3>
        </div>
        <div id="sponsor-btn">
          <InternalButton
            btnText="Sponsor Us"
            btnLink=""
          />
        </div>
      </div>

    </section>
  );
}

ChallengeText.propTypes = propTypes;
ChallengeText.contextTypes = contextTypes;
ChallengeText.defaultProps = defaultProps;

export default ChallengeText;
