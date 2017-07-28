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

const sectionTitle = 'Why Participate?';

const PARTICIPATE = [
  {
    title: 'Learn Design',
    img: learnAndPractice,
    alt: 'Learn and Practice Icon',
    desc: 'The D4SD <a href=“https://d4sd.org/challenges” rel=“noopener noreferrer” target=“_blank”>Civic Design Challenge on Mobility</a> provides a great opportunity to practice design on real-world problems and to get mentorship from domain experts.',
  },
  {
    title: '15 Minutes of Fame',
    img: fame,
    alt: '15 Minutes Icon',
    desc: 'We will showcase qualifying submissions on our website and finalists at the Design Forward Alliance Summit <a href=“http://www.designforwardsd.com/the-summit/” rel=“noopener noreferrer” target=“_blank”>on Oct 26</a>.',
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
      <div className={globalStyles.contentWrapper}>
        <h1>{sectionTitle}</h1>
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
                  <h2 className={globalStyles.orange}>{title}</h2>
                  <p>dangerouslySetInnerHTML={{
                    __html: desc,
                  }}</p>
                </div>
              </div>
            ))}
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
