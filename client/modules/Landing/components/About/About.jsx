/* eslint-disable max-len */

import React from 'react';
import PropTypes from 'prop-types';
import { withCollectRef } from 'util/RefCollector';

import globalStyles from 'main.scss';
import styles from './About.scss';


/**
 * About
 */

const propTypes = {
  componentRef: PropTypes.func.isRequired,
};

const contextTypes = {
  router: PropTypes.object,
};

const defaultProps = {};

function About(props) {
  return (
    <section id={styles.about} ref={props.componentRef}>
      <div className={styles.textContainer}>
        <section className={styles.text}>
          <div className={styles.title}>
            <h3 className={globalStyles.ul}>ABOUT</h3>
          </div>
          <h1>Design the Future of San Diego</h1>
          <p className={styles.description}>D4SD is a non-profit organization that aims to engage San Diegans in the process of solving complex civic challenges using human-centered design and crowdsourcing. We seek to create opportunities for government, academia, and industry to collaboratively design innovative civic solutions.</p>
          <p className={styles.description}>Our Team: Steven Dow, Narges Mahyar, Ariel Weingarten, Brian McInnis, Lauren Liu, David Luu, Joanne Cho, Sanika Moharana, Eric Richards, Eric Tseng, Cody Pham, Alejandro Panduro, Joseph Le, Nancy Zheng, Catherine Kim, Lauren Gong, Anne Le, Diana Nguyen, Grant Chinn, Gobind Sethi, Karen Ma, Qin Zhuo, Nanna Inie, Donna Yee, Alvin Ho, Allen Lin, Akanksha Grover, Tara Nejad, Karthik Komatineni, Christopher Lim, Susan Lee, Mai Eguchi</p>
          {false && <div className={styles.buttonContainer}>
            <a href="mailto:design4sandiego@gmail.com">Get Involved</a>
          </div>}
        </section>
      </div>
    </section>
  );
}

About.propTypes = propTypes;
About.contextTypes = contextTypes;
About.defaultProps = defaultProps;

export default withCollectRef(About);
