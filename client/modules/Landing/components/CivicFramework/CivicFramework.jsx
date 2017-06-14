/* eslint-disable max-len */

import React from 'react';
import PropTypes from 'prop-types';
import { withCollectRef } from 'util/RefCollector';

import styles from './CivicFramework.scss';


/**
 * Designing a Civic Framework
 */

const propTypes = {
  componentRef: PropTypes.func.isRequired,
};

const contextTypes = {
  router: PropTypes.object,
};

const defaultProps = {};

function CivicFramework(props) {
  return (
    <section id={styles.sponsors} ref={props.componentRef}>
      <div className={styles.content}>
        <div className="{styles.sponsorsBox}">
          <div className={styles.description}>
            <p className={styles.quote}><i>"We designed the 2017 Civic Challenge to provide a collaborative process for civic engagement throughout the exploration and execution of plans and policies of public concern."</i></p>
            <p className={styles.quote}><i>–Narges Mahyar, UCSD Design Fellow</i></p>
            <br />
            <p>Join below and we will add you to a discussion forum where you can contribute to each of the four phases!</p>
          </div>
          <div className={styles.button}>
            <div className={styles.buttonContainer}>
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSe-DzyjLGgLHdXkc8Fj7yGJrxm-PJ2Gr_LABKGeQDH699O6Hw/viewform?usp=sf_link" rel="noopener noreferrer" target="_blank">Register Today</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

CivicFramework.propTypes = propTypes;
CivicFramework.contextTypes = contextTypes;
CivicFramework.defaultProps = defaultProps;

export default withCollectRef('CivicFramework')(CivicFramework);
