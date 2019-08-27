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
// import noimg from './imgs/noimg.jpg';
import mia from './imgs/mia.png';
import icbus from './imgs/icbus.png';
import pac from './imgs/pac.png';
import spot from './imgs/spot.png';
import mts from './imgs/mts.jpg';
import teams from './imgs/teams.jpg';
import safed from './imgs/safed.jpg';

// import remoteService from './imgs/remoteService.jpg';
// import roadMap from './imgs/roadMap.jpg';
// import sdParking from './imgs/sdParking.jpg';
// import spot from './imgs/spot.jpg';


/**
 * EntriesGroup
 */

const TEAMS = [
  {
    header: 'Other Entries',
    boxContent: [
      {
        teamName: 'PAC: Personal Assistant for Cars',
        memberList: 'Yuka Okina, Tamar Esserman, Alexander Chen, Marie Schneider',
        teamImg: pac,
        projectDesc: 'PAC is a smartphone application that provides audio alerts to drivers when it senses an urgent emergency.',
        link: 'https://okiyuki.github.io/ARCportfolio/public/portfolio.html',
        link2: '/entries/PAC',
      },
      {
        teamName: 'ESSENSE: Driver’s seat vibration pad',
        memberList: 'Erich McMillan, Lindy Wong, Dean Ravida, Siyuan Gao, Joel Yun',
        teamImg: teams,
        projectDesc: 'ESSENCE is the new way to alert driver\'s of pedestrians who are preparing to cross the street at the intersection through vibrations.',
        link: 'https://joelyun.wixsite.com/teams',
        link2: '/entries/ESSENSE',
      },
      {
        teamName: 'M. I. A. -- My Instructional Assistant',
        memberList: 'Maggie Chan, Tony Chan, Jodi Lam, Christine Tran, Christopher Yan',
        teamImg: mia,
        projectDesc: 'An AI instructional assistant that helps reinforce good driving habits by reducing visual cognitive load though the aid of real-time audio feedback from car sensor technology.',
        link: 'https://docs.google.com/presentation/d/18qyh4fYF1w2llDMvokNLTqaY5xZAL_jgfhCgsVPwf18/edit',
        link2: '/entries/MIA',
      },
      {
        teamName: 'Spot: The Smart Parking App',
        memberList: 'Shelly Bae, Daniel Won, Kyle Rico, Tayte Duong, Kellie Higa',
        teamImg: spot,
        projectDesc: 'SPOT is an application that aims to make parking in congested areas easier and more efficient by allowing people to give their parking and its location directly to someone else.',
        link: 'http://spotsd.com/',
        link2: '/entries/Spot2',
      },
      {
        teamName: 'MTS - Track Your Bus: Closing the gap between MTS and its users',
        memberList: 'Arvin Dagoc, Vivian Trinh, Swarnakshi Kapil, Saul Mendez, Chengyang Yu',
        teamImg: mts,
        projectDesc: 'An application which rewards users for reporting MTS related problems.',
        link: 'https://citywalkers.wixsite.com/portfolio',
        link2: '/entries/MTS',
      },
      {
        teamName: 'SafeD',
        memberList: 'Steven Chen, Christopher Wong, Eric Liu, Bradley Day, Grace Chen',
        teamImg: safed,
        projectDesc: 'Our solution combines infrastructural changes and social awareness campaigns supplemented by an attachable device that enhances visibility for drivers. These combine to create better experiences for drivers while improving pedestrian safety.',
        link: 'https://safeducsd.wixsite.com/safed',
        link2: '/entries/SafeD',
      },
      {
        teamName: 'iCbus: Real-time Bus Capacity Forecasting System',
        memberList: 'Yuxuan Zhou, Yuanqi Wang, Yujie Wang',
        teamImg: icbus,
        projectDesc: 'iCBus is a multi-platform bus forecasting system. Based on existing drivers\' control system, it provides drivers a new interface to send out more valuable information, containing bus capacity and wheelchair availability, which will be synchronously transferred to users\' mobile application.',
        link: 'https://yuw281.wixsite.com/icbus',
        link2: '/entries/iCbus',
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
          {boxContent.map(({ teamName, memberList, teamImg, projectDesc, link, link2 }) => (
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
              <div>
                <a href={link2}><h4>External page for this project</h4></a>
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
