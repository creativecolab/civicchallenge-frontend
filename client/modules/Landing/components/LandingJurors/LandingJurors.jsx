/* eslint-disable max-len */

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'util/classNames';
// import { Link } from 'react-router';
import { withCollectRef } from 'util/RefCollector';

import globalStyles from 'main.scss';
import styles from './LandingJurors.scss';


/** imgs */
import JohnBadringa from '../../../Jurors/components/JurorTeam/imgs/JohnBadringa.jpg';
import KatieRast from '../../../Jurors/components/JurorTeam/imgs/KatieRast.jpg';
import ScottKlemmer from '../../../Jurors/components/JurorTeam/imgs/ScottKlemmer.jpg';
import ChuckPelly from '../../../Jurors/components/JurorTeam/imgs/ChuckPelly.jpg';

import AntoinetteMeir from '../../../Jurors/components/JurorTeam/imgs/AntoinetteMeir.jpg';
import ArnaudVedy from '../../../Jurors/components/JurorTeam/imgs/ArnaudVedy.jpg';
import DanielObodovski from '../../../Jurors/components/JurorTeam/imgs/DanielObodovski.jpg';
import ReginaBernal from '../../../Jurors/components/JurorTeam/imgs/ReginaBernal.jpg';

/**
 * Get Involved
 */

const sectionTitle = 'Jurors';
const sectionDetails = 'juror text goes here';
const btnText = 'see all jurors';
const btnLink = '/judging';

const JURORS_MAXFOUR = [
  {
    memberName: 'John Bandringa',
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

const propTypes = {
  componentRef: PropTypes.func.isRequired,
};

const contextTypes = {
  router: PropTypes.object,
};

const defaultProps = {};

/* randomizes four jurors */
function getJurors(jurorList) {
  const shuffleList = jurorList;
  const displaySize = 4;

  for (let i = jurorList.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = jurorList[i];
    shuffleList[i] = shuffleList[j];
    shuffleList[j] = temp;
  }

  const spliceStart = displaySize - 1;
  const spliceNumber = jurorList.length - displaySize;
  shuffleList.splice(spliceStart, spliceNumber);
  return shuffleList;
}

function LandingJurors(props) {
  const SHUFFLED_JURORS = getJurors(JURORS_MAXFOUR);
  return (
    <section id={styles.landingJurors} ref={props.componentRef}>
      <div className={globalStyles.contentWrapper}>
        <h1>{sectionTitle}</h1>
        <p>{sectionDetails}</p>
        <div className={styles.contentContainer}>
          {SHUFFLED_JURORS.map(({ memberName, memberTitle, memberImg, memberLink }) => (
            <a className={styles.jurorLink} href={memberLink} target="_blank" rel="noopener noreferrer">
              <div className={styles.memberWrapper}>
                <div className={styles.memberImg}>
                  <img src={memberImg} alt={memberName} />
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
          ))}
        </div>
        <div className={classNames([globalStyles.sectionBtn, styles.btn])}>
          <a className={classNames([globalStyles.greyOutline, styles.btnA])} href={btnLink}>{btnText}</a>
        </div>
      </div>
    </section>
  );
}

LandingJurors.propTypes = propTypes;
LandingJurors.contextTypes = contextTypes;
LandingJurors.defaultProps = defaultProps;

export default withCollectRef('LandingJurors')(LandingJurors);
