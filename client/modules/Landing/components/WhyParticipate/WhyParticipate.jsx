/* eslint-disable max-len */

import React from 'react';
import PropTypes from 'prop-types';
import { withCollectRef } from 'util/RefCollector';

import globalStyles from 'main.scss';
import styles from './WhyParticipate.scss';

import learnAndPractice from './learn-and-practice.png';
import fame from './fame.png';
import winPrizes from './win-prizes.png';

/**
 * Get Involved
 */

const PARTICIPATE_INFO = [
  {
    title: 'Why Participate?',
    description: 'Participating in the 2017 Civic Design Challenge gives you a forum to voice your concerns and vision for mobility in San Diego. It also provides hands-on experience with research and design, a network of people who are also interested in improving our city and a platform to share your proposal. If your prototype is a finalist in the contest, you may earn cash or facetime with city leaders and innovation incubators.',
  },
];

const PARTICIPATE = [
  {
    title: 'Learn Design',
    img: learnAndPractice,
    alt: 'Learn and Practice Icon',
    desc: 'The Mobility challenges provide a great opportunity to practice design on real-world problems and to get mentorship from domain experts.',
  },
  {
    title: '15 Minutes of Fame',
    img: fame,
    alt: '15 Minutes Icon',
    desc: 'Qualifying submissions will be showcased on our website and finalists at the Design Forward Summit.',
  },
  {
    title: 'Win Prizes',
    img: winPrizes,
    alt: 'Win Prizes Icon',
    desc: 'Submissions judged to have the most potential will be awarded in cash prizes and exclusive networking opportunities.',
  },
];

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

      {PARTICIPATE_INFO.map(({ title, description }) => (
        <div className={globalStyles.sectionTitle}>
          <h1>{title}</h1>
          <div className={styles.descr}>
            <p>{description}</p>
          </div>
        </div>
      ))}
      <div className={styles.contentContainer}>
        <div className={styles.participateIconsWrapper}>
          {PARTICIPATE.map(({ title, img, alt, desc }) => (
            <div className={styles.contentElement}>
              <div className={styles.imgCont}>
                <div className={styles.contentImg}>
                  <img src={img} alt={alt} />
                </div>
              </div>
              <div className={styles.contentText}>
                <h4>{title}</h4>
                <p>{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

WhyParticipate.propTypes = propTypes;
WhyParticipate.contextTypes = contextTypes;
WhyParticipate.defaultProps = defaultProps;

export default withCollectRef('WhyParticipate')(WhyParticipate);
