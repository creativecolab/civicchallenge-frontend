/* eslint-disable react/no-danger, max-len */
import React from 'react';
import PropTypes from 'prop-types';

/* import globalStyles from 'main.scss'; */
import styles from './EntriesGroup.scss';

/** images */
// import audioMovement from './imgs/audioMovement.jpg';
// import beachAccess from './imgs/beachAccess.png';
// import cycleDetection from './imgs/cycleDetection.jpg';
// import gate from './imgs/gate.jpg';
import noimg from './imgs/noimg.jpg';
import mia from './imgs/mia.png';
import icbus from './imgs/icbus.png';
import pac from './imgs/pac.png';
import spot from './imgs/spot.png';

// import remoteService from './imgs/remoteService.jpg';
// import roadMap from './imgs/roadMap.jpg';
// import sdParking from './imgs/sdParking.jpg';
// import spot from './imgs/spot.jpg';


/**
 * EntriesGroup
 */

const TEAMS = [
  {
    header: 'Other entries',
    boxContent: [
      {
        teamName: 'PAC: Personal Assistant for Cars',
        memberList: 'Yuka Okina, Tamar Esserman, Alexander Chen, Marie Schneider',
        teamImg: pac,
        projectDesc: 'PAC is a smartphone application that provides audio alerts to drivers when it senses an urgent emergency.',
        link: 'https://okiyuki.github.io/ARCportfolio/public/portfolio.html',
      },
      {
        teamName: 'ESSENSE: Driver’s seat vibration pad',
        memberList: 'Erich McMillan, Lindy Wong, Dean Ravida, Siyuan Gao, Joel Yun',
        teamImg: noimg,
        projectDesc: 'ESSENCE is the new way to alert driver\'s of pedestrians who are preparing to cross the street at the intersection through vibrations.',
        link: 'https://joelyun.wixsite.com/teams',
      },
      {
        teamName: 'M. I. A. -- My Instructional Assistant',
        memberList: 'Maggie Chan, Tony Chan, Jodi Lam, Christine Tran, Christopher Yan',
        teamImg: mia,
        projectDesc: 'An AI instructional assistant that helps reinforce good driving habits by reducing visual cognitive load though the aid of real-time audio feedback from car sensor technology.',
        link: 'https://docs.google.com/presentation/d/18qyh4fYF1w2llDMvokNLTqaY5xZAL_jgfhCgsVPwf18/edit',
      },
      {
        teamName: 'Spot: The Smart Parking App',
        memberList: 'Shelly Bae, Daniel Won, Kyle Rico, Tayte Duong, Kellie Higa',
        teamImg: spot,
        projectDesc: 'SPOT is an application that aims to make parking in congested areas easier and more efficient by allowing people to give their parking and its location directly to someone else.',
        link: 'http://spotsd.com/',
      },
      {
        teamName: 'MTS - Track Your Bus: Closing the gap between MTS and its users',
        memberList: 'Arvin Dagoc, Vivian Trinh, Swarnakshi Kapil, Saul Mendez, Chengyang Yu',
        teamImg: noimg,
        projectDesc: '',
        link: 'https://citywalkers.wixsite.com/portfolio',
      },
      {
        teamName: 'SafeD',
        memberList: 'Steven Chen, Christopher Wong, Eric Liu, Bradley Day, Grace Chen',
        teamImg: noimg,
        projectDesc: '',
        link: 'https://safeducsd.wixsite.com/safed',
      },
      {
        teamName: 'iCbus: Real-time Bus Capacity Forecasting System',
        memberList: 'Yuxuan Zhou, Yuanqi Wang, Yujie Wang',
        teamImg: icbus,
        projectDesc: '',
        link: 'https://yuw281.wixsite.com/icbus',
      },
    ],
  },
];

const propTypes = {};

const contextTypes = {
  router: PropTypes.object,
};

const defaultProps = {};

function EntriesGroup() {
  return (
    <section className={styles.entriesGroup}>
      {TEAMS.map(({ header, boxContent }) => (
        <div key={header} className={styles.memberBox}>
          <h2 className={styles.theEntries}>{header}</h2>
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

EntriesGroup.propTypes = propTypes;
EntriesGroup.contextTypes = contextTypes;
EntriesGroup.defaultProps = defaultProps;

export default EntriesGroup;
