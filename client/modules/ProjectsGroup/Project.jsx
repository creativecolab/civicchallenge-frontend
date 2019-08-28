/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import Navbar from 'components/Navbar/Navbar';
import Helmet from 'react-helmet';
import classNames from 'util/classNames';

import globalStyles from 'main.scss';

import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import styles from './Project.scss';

/** Other */
import entriesBackground from './hands.jpg';

/** Non-Finalists images */
import mia from './imgs/mia.png';
import icbus from './imgs/icbus.png';
import pac from './imgs/pac.png';
import spot2 from './imgs/spot2.png';
import mts from './imgs/mts.jpg';
import teams from './imgs/teams.jpg';
import safed from './imgs/safed.jpg';

/** Finalists images */
import cycleDetection from './imgs/cycleDetection.jpg';
import audioMovement from './imgs/audioMovement.jpg';
import beachAccess from './imgs/beachAccess.png';
import gate from './imgs/gate.jpg';
import remoteService from './imgs/remoteService.jpg';
import roadMap from './imgs/roadMap.jpg';
import sdParking from './imgs/sdParking.jpg';
import spot1 from './imgs/spot1.jpg';

import firstPlace from './imgs/ribbon-first.png';
import secondPlace from './imgs/ribbon-second.png';
import thirdPlace from './imgs/ribbon-third.png';

const propTypes = {
  params: PropTypes.object.isRequired,
};

const contextTypes = {
  router: PropTypes.object,
};

const defaultProps = {};

/* TEAMS holds entry data */
const TEAMS = [
  // Finalists Groups
  {
    id: 'CycleDetection',
    teamName: 'Cycle Detection',
    position: 1,
    memberList: 'Stephen Cerruti, D.J. Nelson, Savera Soin, James Maron',
    teamImg: cycleDetection,
    projectDesc: 'How can we make bicycles more visible to cars of the future? We think DSRC, the technology behind V2V communication, may be the answer.',
    link: '',
  },
  {
    id: 'AVonDemand',
    teamName: 'AV onDemand: Remote Service Provider for Autonomous vehicles',
    position: 2,
    memberList: 'Marissa Hing, Alex Tunchez, Jacob Browne, Josh Duhay, Claire Pham',
    teamImg: remoteService,
    projectDesc: 'Hired specialists remotely maneuver AVs through areas of uncertain conditions allowing all riders to travel with no takeover responsibility.',
    link: 'http://joshduhay.herokuapp.com/av.html',
  },
  {
    id: 'SPOTGuide',
    teamName: 'Spot: Your Guide to Safe and Walkable Cities',
    position: 3,
    memberList: 'Sayamon Riddang, Natalie Terenzi',
    teamImg: spot1,
    projectDesc: 'Spot is an app that provides the blind and visually impaired with accessibility-focused walking directions, using data from GE streetlamps.',
    link: 'http://naterenzi.portfoliobox.net/spot',
  },
  {
    id: 'GATECenter',
    teamName: 'GATE Center: Immersive AV Learning Center',
    memberList: 'Garret Hoover, Selene Hoover, Jessica Yeung',
    teamImg: gate,
    projectDesc: 'An education center where the public directly engages with AVs, accesses learning resources, and provides feedback for stakeholder insights.',
    link: 'https://astrotransits.wixsite.com/gate1/about-1',
  },
  {
    id: 'BeachAccessForAll',
    teamName: 'Beach Access For All',
    memberList: 'Andrea Flagiello, Matt Abbondanzio, Tomas Robinson, Daniel Lenzen',
    teamImg: beachAccess,
    projectDesc: 'We wish to redefine the beach experience for those with limited mobility. Our solution is an automated, shared-use, mobility aid service designed for the beach environment.',
    link: '',
  },
  {
    id: 'Road_Map',
    teamName: 'Road Map',
    memberList: 'Anna Chen, Marie McNamara',
    teamImg: roadMap,
    projectDesc: 'An app focused on the iterative design process, bringing professionals and the public together to share designs, expertise, and feedback.',
    link: '',
  },
  {
    id: 'San_Diego_Parking_App',
    teamName: 'San Diego Parking App',
    memberList: 'Tyler Reinecke, Thomas Twomey,  Jangwoo Lee, Adrian Derderian, Dave Dunn',
    teamImg: sdParking,
    projectDesc: 'An app that shows available parking within downtown San Diego.',
    link: '',
  },
  {
    id: 'AudioMovement',
    teamName: 'Audio Movement',
    memberList: 'Ting Wei Lin, Nathaniel Moreno, James Rich, Danfei  Sun, Diana Nguyen',
    teamImg: audioMovement,
    projectDesc: 'WiFi installation on all MTS vehicles, improving the experience of regular MTS commuters, through education and entertainment resources.',
    link: 'https://www.amwebportfolio.com/',
  },
  // Entry Groups
  {
    id: 'PAC',
    teamName: 'PAC: Personal Assistant for Cars',
    memberList: 'Yuka Okina, Tamar Esserman, Alexander Chen, Marie Schneider',
    teamImg: pac,
    projectDesc: 'PAC is a smartphone application that provides audio alerts to drivers when it senses an urgent emergency.',
    link: 'https://okiyuki.github.io/ARCportfolio/public/portfolio.html',
  },
  {
    id: 'Essence',
    teamName: 'ESSENSE: Driver’s seat vibration pad',
    memberList: 'Erich McMillan, Lindy Wong, Dean Ravida, Siyuan Gao, Joel Yun',
    teamImg: teams,
    projectDesc: 'ESSENCE is the new way to alert driver\'s of pedestrians who are preparing to cross the street at the intersection through vibrations.',
    link: 'https://joelyun.wixsite.com/teams',
  },
  {
    id: 'MIA',
    teamName: 'M. I. A. -- My Instructional Assistant',
    memberList: 'Maggie Chan, Tony Chan, Jodi Lam, Christine Tran, Christopher Yan',
    teamImg: mia,
    projectDesc: 'An AI instructional assistant that helps reinforce good driving habits by reducing visual cognitive load though the aid of real-time audio feedback from car sensor technology.',
    link: 'https://docs.google.com/presentation/d/18qyh4fYF1w2llDMvokNLTqaY5xZAL_jgfhCgsVPwf18/edit',
  },
  {
    id: 'SPOTParkingApp',
    teamName: 'Spot: The Smart Parking App',
    memberList: 'Shelly Bae, Daniel Won, Kyle Rico, Tayte Duong, Kellie Higa',
    teamImg: spot2,
    projectDesc: 'SPOT is an application that aims to make parking in congested areas easier and more efficient by allowing people to give their parking and its location directly to someone else.',
    link: 'http://spotsd.com/',
  },
  {
    id: 'MTS',
    teamName: 'MTS - Track Your Bus: Closing the gap between MTS and its users',
    memberList: 'Arvin Dagoc, Vivian Trinh, Swarnakshi Kapil, Saul Mendez, Chengyang Yu',
    teamImg: mts,
    projectDesc: 'An application which rewards users for reporting MTS related problems.',
    link: 'https://citywalkers.wixsite.com/portfolio',
    link2: '/entries/MTS',
  },
  {
    id: 'SafeD',
    teamName: 'SafeD',
    memberList: 'Steven Chen, Christopher Wong, Eric Liu, Bradley Day, Grace Chen',
    teamImg: safed,
    projectDesc: 'Our solution combines infrastructural changes and social awareness campaigns supplemented by an attachable device that enhances visibility for drivers. These combine to create better experiences for drivers while improving pedestrian safety.',
    link: 'https://safeducsd.wixsite.com/safed',
  },
  {
    id: 'iCbus',
    teamName: 'iCbus: Real-time Bus Capacity Forecasting System',
    memberList: 'Yuxuan Zhou, Yuanqi Wang, Yujie Wang',
    teamImg: icbus,
    projectDesc: 'iCBus is a multi-platform bus forecasting system. Based on existing drivers\' control system, it provides drivers a new interface to send out more valuable information, containing bus capacity and wheelchair availability, which will be synchronously transferred to users\' mobile application.',
    link: 'https://yuw281.wixsite.com/icbus',
  },
];

class Project extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      currentTeam: this.props.params.id,
    };
  }
  render() {
    const currentTeam = this.state.currentTeam;
    function isCurrentTeam(object) {
      return currentTeam === object.id;
    }
    const TeamToDisplay = TEAMS.filter(isCurrentTeam);
    return (
      <div>
        <Navbar />
        <Helmet
          title="Entries"
        />
        <Header
          backgroundImg={entriesBackground}
          headerText="Entries"
          subheaderText=""
          showButton={false}
        />
        <section className={classNames([styles.Project, globalStyles.contentWrapper])}>
          <div className={styles.memberBox}>
            {TeamToDisplay.map(({ teamName, position, memberList, teamImg, projectDesc, link }) => (
              <div
                key={teamName}
                className={styles.memberInlineWrapper}
              >
                <div className={styles.memberWrapper}>
                  <a href={link}><h1>{teamName}</h1></a>
                  <div className={styles.teamImg}>
                    <img src={teamImg} alt={teamName} />
                    {position === 1 && <img className={styles.ribbon} src={firstPlace} alt="First Place" />}
                    {position === 2 && <img className={styles.ribbon} src={secondPlace} alt="Second Place" />}
                    {position === 3 && <img className={styles.ribbon} src={thirdPlace} alt="Third Place" />}
                  </div>
                  {/* group details (text) */}
                  <div className={styles.memberInfo}>
                    <div className={styles.memberPositions}>
                      <span key={memberList} className={styles.memberList}>{memberList}</span>
                      <br />
                      <p key={projectDesc} className={styles.teamDesc}>{projectDesc}</p>
                      {/* <a href="/D4SD_2017_WhitePaper.pdf" className={styles.button}>Go Back</a> */}
                      <a href="/entries" className={styles.button}>Go Back</a>
                      <br />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        <Footer />
      </div>
    );
  }
}

Project.propTypes = propTypes;
Project.contextTypes = contextTypes;
Project.defaultProps = defaultProps;

export default Project;
