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
          <h1>Designing A Civic Challenge Framework</h1>
          <div className={styles.description}>
            <p>Researchers on our team have published work around crowdsourcing and collaborative urban planning technologies. We have developed the four phase framework this challenge is built upon from this research and prominent theories in design thinking, organizational sensemaking, group deliberation, socialization, and crowdsourcing.</p>
            <br />
            <p className={styles.quote}><i>“Our research indicated a lack of clear framework to guide large-scale civic engagement throughout an entire process of exploring and executing on plans and policies of public concern.”</i></p>
            <p className={styles.quote}><i>–Narges Mahyar</i></p>
            <br />
            <p>Our framework introduces a transparent process to motivate and manage broad participation through divergent and convergent stages of policy-making and planning. The divergent phase shows how people dynamically form groups, investigate issues, and generate vast numbers of diverse and inclusive perspectives. The convergent phase engages the public in collaborative sensemaking of gathered data and enables them to be part of the decision-making process.</p>
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
