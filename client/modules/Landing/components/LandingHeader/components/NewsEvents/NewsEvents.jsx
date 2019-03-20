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
    date: 'Oct 3-19 2017 • UCSD main campus',
    title: 'Human-Centered Design Course at UCSD',
    link: 'https://goo.gl/forms/PoOhtm0nhq6wDLjj1',
    callToAction: '',
    target: '_blank',
    rel: 'noopener noreferrer',
  },
  {
    id: '',
    date: 'Oct 25 2017 • Broadway Pier',
    title: 'D4SD Poster Session, Design Forward mixer',
    link: 'http://www.designforwardsd.com/',
    callToAction: '',
    target: '_blank',
    rel: 'noopener noreferrer',
  },
  {
    id: '',
    date: 'Oct 26 2017 • Liberty Station',
    title: 'D4SD Award Ceremony, Design Forward Summit',
    link: 'http://www.designforwardsd.com/',
    callToAction: '',
    target: '_blank',
    rel: 'noopener noreferrer',
  },
];

const TWEETS = [
  {
    id: '',
    tweet: 'We thank everyone for joining us and making the D4SD challenge a success.',
    tweetURL: 'https://twitter.com/Design4SD/status/924318139864588288',
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
                  key={title}
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
                  key={tweet}
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
