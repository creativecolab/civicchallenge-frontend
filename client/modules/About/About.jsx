/* eslint-disable max-len */

import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Navbar from 'components/Navbar/Navbar';
import Footer from 'components/Footer/Footer';
import StandardSectionBox from 'components/StandardSectionBox/StandardSectionBox';

import globalStyles from 'main.scss';
import styles from './About.scss';

import team from './team.png';

import scaleSDLogo from './scale-sd-logo.png';
import designLabLogo from './design-lab-logo.png';
import designForwardLogo from './design-forward-logo.png';
import protolabLogo from './protolab-logo.png';
/**
 * About
 */

const ABOUT = [
  {
    sectionTitle: 'About D4SD',
    text: [
      'Design for San Diego is a non-profit organization that engages San Diegans in the process of solving complex civic challenges using human-centered design and crowdsourcing. We create opportunities for government, academia, and industry to collaboratively design innovative civic solutions. This year, D4SD has partnered with UC San Diego’s Design Lab, the Design Forward Summit, and SCALE SD to organize our challenges around the topic of mobility.',
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

const PARTNERS = [
  {
    href: 'http://designlab.ucsd.edu/',
    img: designLabLogo,
    alt: 'UC San Diego Design Lab',
  },
  {
    href: 'http://designforwardsd.com/',
    img: designForwardLogo,
    alt: 'Design Forward Alliance',
  },
  {
    href: 'http://www.scalesd.com/',
    img: scaleSDLogo,
    alt: 'Scale SD',
  },
  {
    href: 'http://protolab.ucsd.edu/',
    img: protolabLogo,
    alt: 'ProtoLab',
  },
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
      <Navbar />
      <div className={globalStyles.contentWrapper}>
        {ABOUT.map(({ sectionTitle, text }) => (
          <StandardSectionBox
            sectionTitle={sectionTitle}
            text={text}
          />
        ))}
      </div>
      <div className={globalStyles.contentWrapper}>
        <h2>Partners</h2>
        <div className={styles.partners}>
          {PARTNERS.map(({ href, img, alt }) => (
            <a key={alt} href={href} target="_blank" rel="noopener noreferrer">
              <img className={styles.sponsorImage} src={img} alt={alt} />
            </a>
          ))}
        </div>
        <h2>Our Team</h2>
        <div className={styles.fullWidthImg}>
          <img src={team} alt="team" />
        </div>
        <div className={styles.people}>
          <p>{PEOPLE.join(', ')}</p>
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
