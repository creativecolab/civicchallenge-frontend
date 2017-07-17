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

const PARTICIPATE = [
  {
    title: 'Learn and Practice Design',
    img: learnAndPractice,
    alt: 'Learn and Practice Icon',
    desc: 'Are you new to human-centered design? The Mobility challenges provide a great opportunity to practice design on real-world problems and to get mentorship from domain experts.  Teams that submit eligible prototypes will receive free admission to the Design Forward Summit in October.',
  },
  {
    title: '15 Minutes of Fame',
    img: fame,
    alt: '15 Minutes Icon',
    desc: 'Want to share your solution with civic and business leaders in San Diego? We will post all qualifying submissions on our website and showcase finalists at the Design Forward Summit, an event committed to strengthening our community through human-centered design.',
  },
  {
    title: 'Win Prizes',
    img: winPrizes,
    alt: 'Win Prizes Icon',
    desc: 'Through our generous sponsors and connections, we are proud to offer a wide range of support for the prototypes with the most potential to improve the experience of mobility in our city. This support is in cash prizes and opportunities to rub elbows with influential city leaders, venture capitalists, and technologists as well as access to cutting edge design resources. More information coming soon.',
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
    </section>
  );
}

WhyParticipate.propTypes = propTypes;
WhyParticipate.contextTypes = contextTypes;
WhyParticipate.defaultProps = defaultProps;

export default withCollectRef('WhyParticipate')(WhyParticipate);
