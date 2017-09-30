/* eslint-disable max-len */

import React from 'react';
import PropTypes from 'prop-types';
import { withCollectRef } from 'util/RefCollector';

import globalStyles from 'main.scss';

import styles from './NewsEvents.scss';
import EventBox from './components/EventBox/EventBox';
import TwitterBox from './components/TwitterBox/TwitterBox';

/* images */


/**
 * Constants
 */

const newsSectionTitle = 'KEY DATES';
const twitterSectionTitle = 'LATEST TWEET';
/**
 * NewsEvents
 */

const EVENTS = [
  {
    id: '',
    date: 'Sept 22-23 • Downtown Works',
    title: 'D4SD Design Sprint and Hackathon',
    link: '/events',
    callToAction: 'Read about the event',
    target: '',
    rel: '',
  },
  {
    id: '',
    date: 'Oct 22 at 11:59PM  • Online',
    title: 'Challenge Submission Deadline',
    link: 'https://herox.com/D4SD-2017',
    callToAction: 'Register your team now',
    target: '',
    rel: '',
  },
  {
    id: '',
    date: 'Oct 25-26 • Liberty Station',
    title: 'D4SD Award Ceremony, Design Forward Summit',
    link: 'http://www.designforwardsd.com/',
    callToAction: 'Register Now',
    target: '_blank',
    rel: 'noopener noreferrer',
  },
];

const TWEETS = [
  {
    id: '',
    tweet: 'Civic Design class powers up UCSD students to join the mobility challenge #d4sd2017',
    tweetURL: 'https://twitter.com/Design4SD/status/913907540978626565',
  },
];

const propTypes = {
  componentRef: PropTypes.func.isRequired,
};

const contextTypes = {
  router: PropTypes.object,
};

const defaultProps = {};

function NewsEvents(props) {
  return (
    <section id="newsEvents" className={styles.newsEvents} ref={props.componentRef}>
      <div className={globalStyles.contentWrapper}>
        <div className={styles.contentRow}>
          <div className={styles.news}>
            <h4 className={styles.sectionTitle}>{newsSectionTitle}</h4>
            <div className={styles.newsBoxes}>
              {EVENTS.map(({ title, date, link, callToAction, target, rel }) => (
                <EventBox
                  title={title}
                  date={date}
                  link={link}
                  callToAction={callToAction}
                  target={target}
                  rel={rel}
                />
              ))}
            </div>
          </div>
          <div className={styles.line} />
          <div className={styles.twitter}>
            <h4 className={styles.sectionTitle}>{twitterSectionTitle}</h4>
            <div className={styles.newsBoxes}>
              {TWEETS.map(({ tweet, tweetURL }) => (
                <TwitterBox
                  tweet={tweet}
                  tweetURL={tweetURL}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

NewsEvents.propTypes = propTypes;
NewsEvents.contextTypes = contextTypes;
NewsEvents.defaultProps = defaultProps;

export default withCollectRef('NewsEvents')(NewsEvents);
