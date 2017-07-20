import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import StandardSectionBox from 'components/StandardSectionBox/StandardSectionBox';

import globalStyles from 'main.scss';
import styles from './About.scss';

import team from './team.jpg';


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
          <div id="whatWeDo" className={globalStyles.contentContainer}>
            <StandardSectionBox
              sectionTitle={sectionTitle}
              text={text}
            />
          </div>
        ))}
        <div id="ourTeam" className={globalStyles.contentContainer}>
          <h2>Our Team</h2>
          <div id="imgPlaceholder" className={styles.fullWidthImg}>
            <img src={team} alt="team" />
          </div>
          <p>Pictured (from left to right) Vestibulum eu nunc congue, aliquam velit et, aliquam nisl. Proin vel rhoncus enim, a tempus neque. Nam commodo gravida pharetra. Curabitur ligula metus, congue quis leo in, convallis cursus tortor. Fusce a est in urna aliquam vestibulum sit amet fringilla tortor. Nulla sit amet sapien in orci interdum maximus. Integer ut congue quam.</p>
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
