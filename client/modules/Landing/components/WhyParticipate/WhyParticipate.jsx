/* eslint-disable max-len */

import React from 'react';
import PropTypes from 'prop-types';
import { withCollectRef } from 'util/RefCollector';

import globalStyles from 'main.scss';
import styles from './WhyParticipate.scss';


/**
 * Get Involved
 */

const propTypes = {
  componentRef: PropTypes.func.isRequired,
};

const contextTypes = {
  router: PropTypes.object,
};

const defaultProps = {};

function WhyParticipate(props) {
  return (
    <section id={styles.participate} ref={props.componentRef}>
      <div className={globalStyles.sectionTitle}>
        <h1>Why Participate?</h1>
        <div className={styles.descr}>
          <p>Participating in the 2017 Civic Design Challenge gives you a forum to voice your concerns
          and vision for mobility in San Diego. It also provides hands-on experience with research and
          design, a network of people who are also interested in improving our city and a platform
          to share your proposal. If your prototype is a finalist in the contest, you may earn cash
          or facetime with city leaders and innovation incubators.</p>
        </div>
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.contentElement}>
          <div className={styles.imgCont}>
            <div className={styles.contentImg} />
          </div>
          <div className={styles.contentText}>
            <h4>Learn Design</h4>
            <p>Build an understand of the design thinking process by discussing it with
            your peers and putting it to use</p>
          </div>
        </div>
        <div className={styles.contentElement}>
          <div className={styles.imgCont}>
            <div className={styles.contentImg} />
          </div>
          <div className={styles.contentText}>
            <h4>15 Minutes of Fame</h4>
            <p>We will post all qualitfying submission on our website. The finalists
            will be showcased at the Design Forward Summit.</p>
          </div>
        </div>
        <div className={styles.contentElement}>
          <div className={styles.imgCont}>
            <div className={styles.contentImg} />
          </div>
          <div className={styles.contentText}>
            <h4>Win Prizes</h4>
            <p>Earn cash or have the opportunity to meet with public and private leaders
            Check back soon for the official prizes.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

WhyParticipate.propTypes = propTypes;
WhyParticipate.contextTypes = contextTypes;
WhyParticipate.defaultProps = defaultProps;

export default withCollectRef('WhyParticipate')(WhyParticipate);
