import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';

import styles from './HowItWorks.scss';


/**
 * HowItWorks
 */

const propTypes = {};

const contextTypes = {
  router: PropTypes.object,
};

const defaultProps = {};

function HowItWorks() {
  return (
    <div className={styles.HowItWorks}>
      <Helmet
        title="HowItWorks"
      />
      <Header
        backgroundImg={''}
        headerText="How It Works"
        subheaderText={''}
        showButton={false}
      />
      <div className={styles.contentText}>
        <div id="theChallenge" className={styles.contentContainer}>
          <h2>The Challenge</h2>
          <p>Every day is taco ipsum tuesday. Side of rice and beans, please. BARBACOA!! Black or pinto beans? How bout a gosh darn quesadilla? Fish tacos with cabbage slaw and a side of chips and guac. It’s taco Tuesday Monday. It’s taco Tuesday Monday. CARNE ASADA!! Let’s do a beef and a chicken, and one with both. Um, Tabasco? No thanks, do you have any Cholula? It’s a wonderful morning for breakfast tacos. I think I’ve overdosed on tacos.
          These tacos are lit 🔥. It’s taco time all the time. Tacos, tacos, tacos. Give me tacos, or give me death. How do you feel HowItWorks hard shelled tacos? Add in a few el Pastor with guac and diced onions. I’d have to say, those tacos are on fleek. Does guac cost extra? Josh’s taco shack is the best taco shack. Um, Tabasco? No thanks, do you have any Cholula? Shrimp tacos are tasty tacos! Burritos are very tasty. Pico de gallo, on the side please.
          </p>
        </div>
        <div id="process" className={styles.contentContainer}>
          <h2>Process</h2>
          <p>TIMELINE GOES HERE</p>
          <div className={styles.sectionBtn}>
            <a className={styles.blueOutline} href="">LEARN MORE</a>
          </div>
        </div>
        <div id="designBriefs" className={styles.contentContainer}>
          <h2>Design Briefs</h2>
          <p>Every day is taco ipsum tuesday. Side of rice and beans, please. BARBACOA!! Black or pinto beans? How bout a gosh darn quesadilla? Fish tacos with cabbage slaw and a side of chips and guac. It’s taco Tuesday Monday. It’s taco Tuesday Monday. CARNE ASADA!! Let’s do a beef and a chicken, and one with both. Um, Tabasco? No thanks, do you have any Cholula? It’s a wonderful morning for breakfast tacos. I think I’ve overdosed on tacos.
          These tacos are lit 🔥. It’s taco time all the time. Tacos, tacos, tacos. Give me tacos, or give me death. How do you feel HowItWorks hard shelled tacos? Add in a few el Pastor with guac and diced onions. I’d have to say, those tacos are on fleek. Does guac cost extra? Josh’s taco shack is the best taco shack. Um, Tabasco? No thanks, do you have any Cholula? Shrimp tacos are tasty tacos! Burritos are very tasty. Pico de gallo, on the side please.
          </p>
          <div className={styles.sectionBtn}>
            <a className={styles.blueOutline} href="/challenges">BROWSE BRIEFS</a>
          </div>
        </div>
        <div id="registerCallout" className={styles.contentContainer}>
          <h2>Ready to take on the challenge?</h2>
          <p>Some tagline goes here some tagline goes here some </p>
          <div className={styles.sectionBtn}>
            <a className={styles.salmon} href="">REGISTER TODAY</a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

HowItWorks.propTypes = propTypes;
HowItWorks.contextTypes = contextTypes;
HowItWorks.defaultProps = defaultProps;

export default HowItWorks;
