/* eslint-disable max-len */

import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import StandardSectionBox from 'components/StandardSectionBox/StandardSectionBox';

import globalStyles from 'main.scss';
import styles from './About.scss';

import team from './team.png';


/**
 * About
 */

const ABOUT = [
  {
    sectionTitle: 'Mission',
    text: [
      'Design for San Diego is a non-profit organization that engages San Diegans in the process of solving complex civic challenges using human-centered design and crowdsourcing. We create opportunities for government, academia, and industry to collaboratively design innovative civic solutions.',
    ],
  },
];

const PEOPLE = [
  'Gabriel Amoako',
  'Grant Chinn',
  'Joanne Cho',
  'Yujin Cho',
  'Mai Eguchi',
  'Allison Endo',
  'Lauren Gong',
  'Akanksha Grover',
  'Alvin Ho',
  'Brandon Hong',
  'Nanna Inie',
  'Michael James',
  'Catherine Kim',
  'Karthik Komatineni',
  'Anne Le',
  'Joseph Le',
  'Susan Lee',
  'Christopher Lim',
  'Allen Lin',
  'Lauren Liu',
  'David Luu',
  'Narges Mahyar',
  'Brian McInnis',
  'Sanika Moharana',
  'Michelle Ng',
  'Alejandro Panduro',
  'Cody Pham',
  'Karen Ma',
  'Tara Nejad',
  'Diana Nguyen',
  'Eric Richards',
  'Gobind Sethi',
  'Eric Tseng',
  'Ariel Weingarten',
  'Donna Yee',
  'Nancy Zheng',
  'Qin Zhuo',
];


const propTypes = {};

const contextTypes = {
  router: PropTypes.object,
};

const defaultProps = {};

function About() {
  return (
    <section className={styles.about}>
      <Helmet
        title="About"
      />
      <Header
        backgroundImg={''}
        headerText="About"
        subheaderText={''}
        showButton={false}
      />
      <div className={globalStyles.contentWrapper}>
        {ABOUT.map(({ sectionTitle, text }) => (
          <StandardSectionBox
            sectionTitle={sectionTitle}
            text={text}
          />
        ))}
        <div id="ourTeam" className={globalStyles.contentContainer}>
          <h2>Our Team</h2>
          <div id="imgPlaceholder" className={styles.fullWidthImg}>
            <img src={team} alt="team" />
          </div>
          <h4>Team Members</h4>
          <div className={styles.people}>
            <span>{PEOPLE.join(', ')}</span>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}

About.propTypes = propTypes;
About.contextTypes = contextTypes;
About.defaultProps = defaultProps;

export default About;
