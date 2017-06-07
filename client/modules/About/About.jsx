import React from 'react';
import PropTypes from 'prop-types';
import Navbar from './components/Navbar/Navbar';

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
      <Navbar />
      <header>
        <div className={styles.headerText}>
          <h3>About</h3>
        </div>
      </header>
      <div className={styles.contentText}>
        <div className={styles.titleText}>
          <h3>D4SD</h3>
          <p>D4SD is collaborating with the Design Forward Alliance to host a 2017 large-scale human-centered design challenge around the complex civic issue of Mobility. People need to move around a city. Whether for work or play—and by car, bike, train, bus, boat, or foot— mobility significant affects the daily lives of millions. San Diego is culturally and economically diverse, as well as geographical dispersed, which makes it a ripe topic for exploring issues around transportation. The mobility challenges below investigate concerns currently facing San Diegans, as well as take a look to future transportation systems.
          </p>
        </div>
        <div className={styles.titleText}>
          <h3>AFFILIATES</h3>
          <div className={styles.affilities}>
            to fill in
          </div>
        </div>
        <div className={styles.titleText}>
          <h3>OUR PROCESS</h3>
          <p>D4SD is collaborating with the Design Forward Alliance to host a 2017 large-scale human-centered design challenge around the complex civic issue of Mobility. People need to move around a city. Whether for work or play—and by car, bike, train, bus, boat, or foot— mobility significant affects the daily lives of millions. San Diego is culturally and economically diverse, as well as geographical dispersed, which makes it a ripe topic for exploring issues around transportation. The mobility challenges below investigate concerns currently facing San Diegans, as well as take a look to future transportation systems.
          </p>
        </div>
      </div>
    </div>
  );
}

About.propTypes = propTypes;
About.contextTypes = contextTypes;
About.defaultProps = defaultProps;

export default About;
