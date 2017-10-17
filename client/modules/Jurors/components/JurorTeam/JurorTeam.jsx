/* eslint-disable react/no-danger */
import React from 'react';
import PropTypes from 'prop-types';

/* import globalStyles from 'main.scss'; */
import styles from './JurorTeam.scss';

/** images */

import AntoinetteMeir from './imgs/AntoinetteMeir.jpg';
import ArnaudVedy from './imgs/ArnaudVedy.jpg';
import ChuckPelly from './imgs/ChuckPelly.jpg';
import DanielObodovski from './imgs/DanielObodovski.jpg';
import JohnBadringa from './imgs/JohnBadringa.jpg';
import KatieRast from './imgs/KatieRast.jpg';
import ReginaBernal from './imgs/ReginaBernal.jpg';
import ScottKlemmer from './imgs/ScottKlemmer.jpg';


/**
 * JurorTeam
 */

const MEMBERS = [
  {
    memberName: 'John Badringa',
    memberTitle: [
      'Director',
      'Enterprise Strategy & Innovation, Port of San Diego',
    ],
    memberImg: JohnBadringa,
    memberLink: 'https://www.linkedin.com/in/john-bandringa-77a47a4',
  },
  {
    memberName: 'Katie Rast',
    memberTitle: [
      'Director of Community Impact at',
      'The San Diego Foundation',
      'Founder of Fab Lab',
    ],
    memberImg: KatieRast,
    memberLink: 'https://www.sdfoundation.org/about-us/who-we-are/our-team/katie-rast-bio/',
  },
  {
    memberName: 'Scott Klemmer',
    memberTitle: [
      'Professor of Cognitive Science and Computer Science & Engineering',
      'Design Lab, UC San Diego',
    ],
    memberImg: ScottKlemmer,
    memberLink: 'http://d.ucsd.edu/srk/about/',
  },
  {
    memberName: 'Chuck Pelly',
    memberTitle: [
      'Chief Creative Officer',
      'Intersection-Inc',
    ],
    memberImg: ChuckPelly,
    memberLink: 'https://www.linkedin.com/in/chuck-pelly-63164211',
  },
  {
    memberName: 'Antoinette Meier',
    memberTitle: [
      'Principal Regional Planner',
      'SANDAG',
    ],
    memberImg: AntoinetteMeir,
    memberLink: 'https://www.linkedin.com/in/armeier',
  },
  {
    memberName: 'Regina Bernal',
    memberTitle: [
      'Entrepreneurship Manager',
      'School of Business, University of San Diego',
    ],
    memberImg: ReginaBernal,
    memberLink: 'http://www.sandiego.edu/business/faculty-and-staff/biography.php?profile_id=2019',
  },
  {
    memberName: 'Daniel Obodovski',
    memberTitle: [
      'CEO/Founder',
      'SCALE SD',
    ],
    memberImg: DanielObodovski,
    memberLink: 'http://www.silentintelligence.com/bio/',
  },
  {
    memberName: 'Arnaud Vedy',
    memberTitle: [
      'Data Science Program Coordinator',
      'Performance & Analytics Department, City of San Diego',
    ],
    memberImg: ArnaudVedy,
    memberLink: 'https://www.linkedin.com/in/arnaud-vedy-01a5b2106',
  },
];

const propTypes = {};

const contextTypes = {
  router: PropTypes.object,
};

const defaultProps = {};

function JurorTeam() {
  return (
    <section className={styles.jurorTeam}>
      <h2>The Jurors</h2>

      <div className={styles.memberBox}>
        {MEMBERS.map(({ memberName, memberTitle, memberImg, memberLink }) => (
          <div className={styles.memberInlineWrapper}>
            <a className={styles.jurorLink} href={memberLink} target="_blank" rel="noopener noreferrer">
              <div className={styles.memberWrapper}>
                <div className={styles.memberImg}>
                  <img src={memberImg} alt="team member name" />
                </div>
                <div className={styles.memberInfo}>
                  <h3>{memberName}</h3>
                  {memberTitle.map(position =>
                    <div className={styles.memberPositions}>
                      <span key={position}>{position}</span>
                      <br />
                    </div>
                  )}
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

JurorTeam.propTypes = propTypes;
JurorTeam.contextTypes = contextTypes;
JurorTeam.defaultProps = defaultProps;

export default JurorTeam;
