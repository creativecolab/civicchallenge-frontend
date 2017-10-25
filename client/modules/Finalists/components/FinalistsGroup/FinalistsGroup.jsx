/* eslint-disable react/no-danger, max-len */
import React from 'react';
import PropTypes from 'prop-types';

/* import globalStyles from 'main.scss'; */
import styles from './FinalistsGroup.scss';

/** images */
import JohnBadringa from './imgs/JohnBadringa.jpg';


/**
 * FinalistsGroup
 */

const TEAMS = [
  {
    teamName: 'GATE Center: Immersive AV Learning Center',
    memberList: 'Garret Hoover, Selene Young, Jessica Joy',
    teamImg: JohnBadringa,
    projectDesc: 'An education center where the public directly engages with AVs, accesses learning resources, and provides feedback for stakeholder insights.',
  },
  {
    teamName: 'Spot: Your Guide to Safe and Walkable Cities',
    memberList: 'Sayamon Riddang, Natalie Terenzi',
    teamImg: JohnBadringa,
    projectDesc: 'Spot is an app that provides the blind and visually impaired with accessibility-focused walking directions, using data from GE streetlamps.',
  },
  {
    teamName: 'Remote Service Provider for Autonomous Vehicles',
    memberList: 'Nicole Hing, Alex Tunchez, Jacob Browne, Joash Duhaylungsod, Claire Pham',
    teamImg: JohnBadringa,
    projectDesc: 'Hired specialists remotely maneuver AVs through areas of uncertain conditions allowing all riders to travel with no takeover responsibility.',
  },
  {
    teamName: 'Beach Access For All',
    memberList: 'Andrea Flagiello, Matt Abbondanzio, Tomas Robinson, Daniel Lenzen',
    teamImg: JohnBadringa,
    projectDesc: 'We wish to redefine the beach experience for those with limited mobility. Our solution is an automated, shared-use, mobility aid service designed for the beach environment.',
  },
  {
    teamName: 'Cycle Detection',
    memberList: 'Stephen Cerruti, D.J. Nelson, Savera Soin, James Maron',
    teamImg: JohnBadringa,
    projectDesc: 'How can we make bicycles more visible to cars of the future? We think DSRC, the technology behind V2V communication, may be the answer.',
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
      <div className={styles.memberBox}>
        {TEAMS.map(({ teamName, memberList, teamImg, projectDesc }) => (
          <div
            key={teamName}
            className={styles.memberInlineWrapper}
          >
            <div className={styles.memberWrapper}>
              <div className={styles.teamImg}>
                <img src={teamImg} alt="team member name" />
              </div>
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
    </section>
  );
}

FinalistsGroup.propTypes = propTypes;
FinalistsGroup.contextTypes = contextTypes;
FinalistsGroup.defaultProps = defaultProps;

export default FinalistsGroup;
