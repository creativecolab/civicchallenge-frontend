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
import SeanVanTyne from '../../../Jurors/components/JurorTeam/imgs/SeanVanTyne.jpg';

import DavidGraham from '../../../Jurors/components/JurorTeam/imgs/DavidGraham.jpg';
import BrentBoyd from '../../../Jurors/components/JurorTeam/imgs/BrentBoyd.jpg';
import LimaSaft from '../../../Jurors/components/JurorTeam/imgs/LimaSaft.jpg';
/**
 * Get Involved
 */

const sectionTitle = 'Jurors';
const sectionDetails = 'Our amazing D4SD jurors come from the worlds of technology, government, entrepreneurship, and education. They will judge solutions based on four key criteria: human-centered process, novelty, feasibility, and impact.';
const btnText = 'see all jurors';
const btnLink = '/judging';

const JURORS_MAXFOUR = [
  {
    memberName: 'John Bandringa',
    memberTitle: [
      'Port of San Diego',
    ],
    memberImg: JohnBadringa,
    memberLink: 'https://www.linkedin.com/in/john-bandringa-77a47a4',
  },
  {
    memberName: 'Katie Rast',
    memberTitle: [
      'The San Diego Foundation',
      'and Fab Lab',
    ],
    memberImg: KatieRast,
    memberLink: 'https://www.sdfoundation.org/about-us/who-we-are/our-team/katie-rast-bio/',
  },
  {
    memberName: 'Scott Klemmer',
    memberTitle: [
      'Design Lab, UC San Diego',
    ],
    memberImg: ScottKlemmer,
    memberLink: 'http://d.ucsd.edu/srk/about/',
  },
  {
    memberName: 'Chuck Pelly',
    memberTitle: [
      'Intersection-Inc',
    ],
    memberImg: ChuckPelly,
    memberLink: 'https://www.linkedin.com/in/chuck-pelly-63164211',
  },
  {
    memberName: 'Antoinette Meier',
    memberTitle: [
      'SANDAG',
    ],
    memberImg: AntoinetteMeir,
    memberLink: 'https://www.linkedin.com/in/armeier',
  },
  {
    memberName: 'Regina Bernal',
    memberTitle: [
      'School of Business,',
      'University of San Diego',
    ],
    memberImg: ReginaBernal,
    memberLink: 'http://www.sandiego.edu/business/faculty-and-staff/biography.php?profile_id=2019',
  },
  {
    memberName: 'Daniel Obodovski',
    memberTitle: [
      'SCALE SD',
    ],
    memberImg: DanielObodovski,
    memberLink: 'http://www.silentintelligence.com/bio/',
  },
  {
    memberName: 'Arnaud Vedy',
    memberTitle: [
      'City of San Diego',
    ],
    memberImg: ArnaudVedy,
    memberLink: 'https://www.linkedin.com/in/arnaud-vedy-01a5b2106',
  },
  {
    memberName: 'Sean Van Tyne',
    memberTitle: [
      'Van Tyne Group',
    ],
    memberImg: SeanVanTyne,
    memberLink: 'www.SeanVanTyne.com',
  },
  {
    memberName: 'Brent Boyd',
    memberTitle: [
      'Manager of Service Quality, Rail Division',
      'Metropolitan Transit System',
    ],
    memberImg: BrentBoyd,
    memberLink: 'https://www.linkedin.com/in/brent-boyd-0754816/',
  },
  {
    memberName: 'Lima Saft',
    memberTitle: [
      'Transportation Engineer',
      'California Department of Transportation',
    ],
    memberImg: LimaSaft,
    memberLink: 'https://www.linkedin.com/in/lima-saft-phd-b5607619/',
  },
  {
    memberName: 'David Graham',
    memberTitle: [
      'Chief Operating Officer',
      'City of San Diego',
    ],
    memberImg: DavidGraham,
    memberLink: 'http://cityage.org/project/david-graham-deputy-coo-city-of-san-diego/',
  },
];

const propTypes = {
  componentRef: PropTypes.func.isRequired,
};

const contextTypes = {
  router: PropTypes.object,
};

const defaultProps = {};

/* randomizes four jurors using fisher-yates */
function getJurors(jurorList) {
  const shuffleList = jurorList;
  const displaySize = 4;  // number of jurors to display

  /* randomize list */
  for (let i = jurorList.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = jurorList[i];
    shuffleList[i] = shuffleList[j];
    shuffleList[j] = temp;
  }

  /* remove extra elements */
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
            <a
              key={memberLink}
              className={styles.jurorLink}
              href={memberLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div
                key={memberName}
                className={styles.memberWrapper}
              >
                <div className={styles.memberImg}>
                  <img src={memberImg} alt={memberName} />
                </div>
                <div className={styles.memberInfo}>
                  <h3>{memberName}</h3>
                  {memberTitle.map(position =>
                    <div
                      key={position}
                      className={styles.memberPositions}
                    >
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
