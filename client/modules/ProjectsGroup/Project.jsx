import React from 'react';
import PropTypes from 'prop-types';

import styles from './Project.scss';

/** images */
import cycleDetection from './cycleDetection.jpg';

const propTypes = {};

const contextTypes = {
  router: PropTypes.object,
};

const defaultProps = {};

const TEAMS = [
  {
    header: 'Finalist 1',
    boxContent: [
      {
        teamName: 'Cycle Detection',
        memberList: 'Stephen Cerruti, D.J. Nelson, Savera Soin, James Maron',
        teamImg: cycleDetection,
        projectLink: 'Link',
        projectDesc: 'How can we make bicycles more visible to cars of the future? We think DSRC, the technology behind V2V communication, may be the answer.',
        link: '',
      }
    ],
  },
];

function Projects() {
  return (
    <section className={styles.projectsGroup}>
      {TEAMS.map(({ header, boxContent }) => (
        <div key={header} className={styles.memberBox}>
          <h2 className={styles.theFinalists}>{header}</h2>
          {boxContent.map(({ teamName, memberList, teamImg, projectDesc, link }) => (
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
                  <a href={link}><h3>{teamName}</h3></a>
                  <h5> Team Members: </h5>
                  <div className={styles.memberPositions}>
                    <span key={memberList} className={styles.memberList}>{memberList}</span>
                    <br />
                    <h3> Project Description: </h3>
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

Projects.propTypes = propTypes;
Projects.contextTypes = contextTypes;
Projects.defaultProps = defaultProps;

export default Projects;
