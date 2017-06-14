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
            <h3 className={globalStyles.ul}>ABOUT US</h3>
          </div>
          <p className={styles.description}>Design for San Diego (D4SD) is a non-profit organization that engages San Diegans in the process of solving complex civic challenges using human-centered design and crowdsourcing. We create opportunities for government, academia, and industry to collaboratively design innovative civic solutions.</p>
          <br />
          <h4>Our Team</h4>
          <p className={styles.description}>Director: Dr. Steven Dow</p>
          <p className={styles.description}>Gabriel Amoako, Grant Chinn, Joanne Cho, Yujin Cho, Mai Eguchi, Allison Endo, Lauren Gong, Akanksha Grover, Alvin Ho, Brandon Hong, Nanna Inie, Michael James, Catherine Kim, Karthik Komatineni, Anne Le, Joseph Le, Susan Lee, Christopher Lim, Allen Lin, Lauren Liu, David Luu, Narges Mahyar, Brian McInnis, Sanika Moharana, Michelle Ng, Alejandro Panduro, Cody Pham, Karen Ma, Tara Nejad, Diana Nguyen, Eric Richards, Gobind Sethi, Eric Tseng, Ariel Weingarten, Donna Yee, Nancy Zheng, Qin Zhuo
</p>
          <p className={styles.description}>If you have a question about D4SD or the 2017 Mobility Challenge, send us an <a href="mailto:spdow@ucsd.edu">email.</a></p>
        </section>
      </div>
    </section>
  );
}

About.propTypes = propTypes;
About.contextTypes = contextTypes;
About.defaultProps = defaultProps;

export default withCollectRef('About')(About);
