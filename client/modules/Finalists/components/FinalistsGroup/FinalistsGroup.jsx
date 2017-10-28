/* eslint-disable react/no-danger, max-len */
import React from 'react';
import PropTypes from 'prop-types';

/* import globalStyles from 'main.scss'; */
import styles from './FinalistsGroup.scss';

/** images */
import audioMovement from './imgs/audioMovement.jpg';
import beachAccess from './imgs/beachAccess.png';
import cycleDetection from './imgs/cycleDetection.jpg';
import gate from './imgs/gate.jpg';
import remoteService from './imgs/remoteService.jpg';
import roadMap from './imgs/roadMap.jpg';
import sdParking from './imgs/sdParking.jpg';
import spot from './imgs/spot.jpg';


/**
 * FinalistsGroup
 */

const SECTION_DETAILS = [
  'Congratulations to the 2017 D4SD Finalists! Out of 23 entries into this year\'s challenge, we selected 8 finalists that represent a mix of our four challenge briefs (commuter experience, accessibility, biking/walking, and autonomous vehicles).',
  'The winner received a $5000 cash prize. The top three teams will get opportunities to pitch directly to the City of San Diego, SCALE SD, and SANDAG to implement their ideas.',
];

const TEAMS = [
  {
    header: 'The Winner',
    boxContent: [
      {
        teamName: 'Cycle Detection',
        memberList: 'Stephen Cerruti, D.J. Nelson, Savera Soin, James Maron',
        teamImg: cycleDetection,
        projectDesc: 'How can we make bicycles more visible to cars of the future? We think DSRC, the technology behind V2V communication, may be the answer.',
      },
    ],
  },
  {
    header: 'The Runnerups',
    boxContent: [
      {
        teamName: 'AV onDemand: Remote Service Provider for Autonomous vehicles',
        memberList: 'Marissa Hing, Alex Tunchez, Jacob Browne, Josh Duhay, Claire Pham',
        teamImg: remoteService,
        projectDesc: 'Hired specialists remotely maneuver AVs through areas of uncertain conditions allowing all riders to travel with no takeover responsibility.',
      },
      {
        teamName: 'Spot: Your Guide to Safe and Walkable Cities',
        memberList: 'Sayamon Riddang, Natalie Terenzi',
        teamImg: spot,
        projectDesc: 'Spot is an app that provides the blind and visually impaired with accessibility-focused walking directions, using data from GE streetlamps.',
      },
    ],
  },
  {
    header: 'The Finalists',
    boxContent: [
      {
        teamName: 'GATE Center: Immersive AV Learning Center',
        memberList: 'Garret Hoover, Selene Hoover, Jessica Yeung',
        teamImg: gate,
        projectDesc: 'An education center where the public directly engages with AVs, accesses learning resources, and provides feedback for stakeholder insights.',
      },
      {
        teamName: 'Beach Access For All',
        memberList: 'Andrea Flagiello, Matt Abbondanzio, Tomas Robinson, Daniel Lenzen',
        teamImg: beachAccess,
        projectDesc: 'We wish to redefine the beach experience for those with limited mobility. Our solution is an automated, shared-use, mobility aid service designed for the beach environment.',
      },
      {
        teamName: 'Road Map',
        memberList: 'Anna Chen, Marie McNamara',
        teamImg: roadMap,
        projectDesc: 'An app focused on the iterative design process, bringing professionals and the public together to share designs, expertise, and feedback.',
      },
      {
        teamName: 'San Diego Parking App',
        memberList: 'Tyler Reinecke, Thomas Twomey,  Jangwoo Lee, Adrian Derderian, Dave Dunn',
        teamImg: sdParking,
        projectDesc: 'An app that shows available parking within downtown San Diego.',
      },
      {
        teamName: 'Audio Movement',
        memberList: 'Ting Wei Lin, Nathaniel Moreno, James Rich, Danfei  Sun, Diana Nguyen',
        teamImg: audioMovement,
        projectDesc: 'WiFi installation on all MTS vehicles, improving the experience of regular MTS commuters, through education and entertainment resources.',
      },
    ],
  },
];

const propTypes = {};

const contextTypes = {
  router: PropTypes.object,
};

const defaultProps = {};

function FinalistsGroup() {
  return (
    <section className={styles.finalistsGroup}>
      {SECTION_DETAILS.map(paragraph =>
        <p key={paragraph} className={styles.sectionDetails}>{paragraph}</p>
      )}
      {TEAMS.map(({ header, boxContent }) => (
        <div key={header} className={styles.memberBox}>
          <h2 className={styles.theFinalists}>{header}</h2>
          {boxContent.map(({ teamName, memberList, teamImg, projectDesc }) => (
            <div
              key={teamName}
              className={styles.memberInlineWrapper}
            >
              <div className={styles.memberWrapper}>
                <div className={styles.teamImg}>
                  <img src={teamImg} alt={teamName} />
                </div>
                {/* group details (text) */}
                <div className={styles.memberInfo}>
                  <h3>{teamName}</h3>
                  <div className={styles.memberPositions}>
                    <span key={memberList} className={styles.memberList}>{memberList}</span>
                    <br />
                    <p key={projectDesc} className={styles.teamDesc}>{projectDesc}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </section>
  );
}

FinalistsGroup.propTypes = propTypes;
FinalistsGroup.contextTypes = contextTypes;
FinalistsGroup.defaultProps = defaultProps;

export default FinalistsGroup;
