/* eslint-disable react/no-danger */
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
  },
];

const teamDesc = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.';

const propTypes = {};

const contextTypes = {
  router: PropTypes.object,
};

const defaultProps = {};

function FinalistsGroup() {
  return (
    <section className={styles.finalistsGroup}>
      <div className={styles.memberBox}>
        {TEAMS.map(({ teamName, memberList, teamImg }) => (
          <div className={styles.memberInlineWrapper}>
            <div className={styles.memberWrapper}>
              <div className={styles.teamImg}>
                <img src={teamImg} alt="team member name" />
              </div>
              <div className={styles.memberInfo}>
                <h3>{teamName}</h3>
                <div className={styles.memberPositions}>
                  <span key={memberList} className={styles.memberList}>{memberList}</span>
                  <br />
                  <span key={teamDesc}>{teamDesc}</span>
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
