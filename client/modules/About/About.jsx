import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';

import globalStyles from 'main.scss';
import styles from './About.scss';

import Team from './components/Team/Team';
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
        <div className={styles.titleText}>
          <div className={globalStyles.title}>
            <h3 className={globalStyles.ul}>D4SD</h3>
          </div>
          <p>D4SD is collaborating with the Design Forward Alliance to host a 2017 large-scale human-centered
          design challenge around the complex civic issue of Mobility. People need to move around a city.
          Whether for work or play—and by car, bike, train, bus, boat, or foot— mobility significant
          affects the daily lives of millions. San Diego is culturally and economically diverse,
          as well as geographical dispersed, which makes it a ripe topic for exploring issues around
          transportation. The mobility challenges below investigate concerns currently facing San Diegans,
          as well as take a look to future transportation systems.
          </p>
        </div>
        <div className={styles.titleText}>
          <div className={globalStyles.title}>
            <h3 className={globalStyles.ul}>Affiliates</h3>
          </div>
          <div className={styles.affilities}>
            to fill in
          </div>
        </div>
        <div className={styles.titleText}>
          <div className={globalStyles.title}>
            <h3 className={globalStyles.ul}>Our Process</h3>
          </div>
          <p>D4SD is collaborating with the Design Forward Alliance to host a 2017 large-scale
          human-centered design challenge around the complex civic issue of Mobility. People
          need to move around a city. Whether for work or play—and by car, bike, train, bus,
          boat, or foot— mobility significant affects the daily lives of millions. San Diego
          is culturally and economically diverse, as well as geographical dispersed, which
          makes it a ripe topic for exploring issues around transportation. The mobility
          challenges below investigate concerns currently facing San Diegans, as well as
          take a look to future transportation systems.
          </p>
        </div>
      </div>
      <Team />
      <Footer />
    </div>
  );
}

About.propTypes = propTypes;
About.contextTypes = contextTypes;
About.defaultProps = defaultProps;

export default About;
