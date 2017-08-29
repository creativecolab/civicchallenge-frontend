/* eslint-disable max-len */

import React from 'react';
import PropTypes from 'prop-types';
import { withCollectRef } from 'util/RefCollector';

import globalStyles from 'main.scss';

import styles from './NewsEvents.scss';
import EventBox from './components/EventBox/EventBox';
import EventBoxNull from './components/EventBoxNull/EventBoxNull';
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

const NULL_EVENTS = [
  {
    id: '',
    date: 'Sept 21-23 • Downtown Works',
    title: 'D4SD Kickoff Design Sprint & Hackathon',
    link: '',
    callToAction: 'Register on EventBrite',
    callToActionLink: '/',
  },
];

const EVENTS = [
  {
    id: '',
    date: 'Oct 24 • Details coming soon!',
    title: 'Challenge Submission Deadline',
    link: '/getinvolved',
    callToAction: 'Create a team submission',
  },
  {
    id: '',
    date: 'Oct 25-26 • Liberty Station',
    title: 'D4SD Award Ceremony, Design Forward Summit',
    link: 'http://www.designforwardsd.com/',
    callToAction: 'Register now',
  },
];

const TWEETS = [
  {
    id: '',
    tweet: 'Announced by our great ambassador James White of @freshform at the @DesignForwardSD event on Thursday',
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
              {NULL_EVENTS.map(({ title, date, callToAction, callToActionLink }) => (
                <EventBoxNull
                  title={title}
                  date={date}
                  callToAction={callToAction}
                  callToActionLink={callToActionLink}
                />
              ))}
              {EVENTS.map(({ title, date, link, callToAction }) => (
                <EventBox
                  title={title}
                  date={date}
                  link={link}
                  callToAction={callToAction}
                />
              ))}
            </div>
          </div>
          <div className={styles.line} />
          <div className={styles.twitter}>
            <h4 className={styles.sectionTitle}>{twitterSectionTitle}</h4>
            <div className={styles.newsBoxes}>
              {TWEETS.map(({ tweet }) => (
                <TwitterBox
                  tweet={tweet}
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
