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

const newsSectionTitle = 'UPCOMING EVENTS';
const twitterSectionTitle = 'LATEST TWEETS';
/**
 * NewsEvents
 */


const EVENTS = [
  {
    id: '',
    date: 'Sept 12 • More information coming soon!',
    title: 'D4SD Information Session',
    link: '',
  },
  {
    id: '',
    date: 'Sept 22 - 24 • More information coming soon!',
    title: 'D4SD Kickoff Design Sprint & Hackathon',
    link: '',
  },
  {
    id: '',
    date: 'Oct 26',
    title: 'Design Forward Summit',
    link: 'http://www.designforwardsd.com/',
  },
];

const TWEETS = [
  {
    id: '',
    tweet: 'This is a tweet! Tweet tweet tweet tweet tweet tweet tweet tweet tweet tweet tweet tweet tweet.',
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
              {EVENTS.map(({ title, date, link }) => (
                <EventBox
                  title={title}
                  date={date}
                  link={link}
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
