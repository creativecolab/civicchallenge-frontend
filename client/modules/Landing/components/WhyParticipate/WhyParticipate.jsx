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
        <p>Lorem Khaled Ipsum is a major key to success. Mogul talk. They key is to have every key, the key to open every door. I told you all thwhen you have a swimming pool, do not use chlorine, use salt water, the healing, salt water is the healing. The weather is amazing, walk with me through the pathway of more. </p>
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.contentElement}>
          <div className={styles.contentImg} />
          <div className={styles.contentText}>
            <p>Find peace, life is like a water fall, you’ve gotta flow.</p>
          </div>
        </div>
        <div className={styles.contentElement}>
          <div className={styles.contentImg} />
          <div className={styles.contentText}>
            <p>The key is to drink coconut, fresh coconut, trust me.</p>
          </div>
        </div>
        <div className={styles.contentElement}>
          <div className={styles.contentImg} />
          <div className={styles.contentText}>
            <p>The key to success is to keep your head above the water.</p>
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
