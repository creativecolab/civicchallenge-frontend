import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';

import styles from './About.scss';


/**
 * About
 */

const propTypes = {};

const contextTypes = {
  router: PropTypes.object,
};

const defaultProps = {};

function About() {
  return (
    <div className={styles.about}>
      <Helmet
        title="About"
      />
      <Header
        backgroundImg={''}
        headerText="About"
        subheaderText={''}
        showButton={false}
      />
      <div className={styles.contentText}>
        <div id="whatWeDo" className={styles.contentContainer}>
          <h2>What We Do</h2>
          <p>Design for San Diego is a non-profit organization that engages San Diegans in the process of solving complex civic challenges using human-centered design
          and crowdsourcing. We create opportunities for government, academia, and industry to collaboratively design innovative civic solutions.</p>
        </div>
        <div id="whatWeDo" className={styles.contentContainer}>
          <h2>Our Team</h2>
          <div id="imgPlaceholder" className={styles.fullWidthImg} />
          <p>Pictured (from left to right) Design for San Diego is a non-profit organization that engages San Diegans in the process of solving complex civic challenges using human-centered design
          and crowdsourcing. We create opportunities for government, academia, and industry to collaboratively design innovative civic solutions.</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

About.propTypes = propTypes;
About.contextTypes = contextTypes;
About.defaultProps = defaultProps;

export default About;
