/* eslint-disable max-len */

import React from 'react';
import PropTypes from 'prop-types';
import { withCollectRef } from 'util/RefCollector';

import globalStyles from 'main.scss';

import styles from './NewsEvents.scss';
import NewsBox from './components/NewsBox/NewsBox';

/* images */


/**
 * Constants
 */

const newsSectionTitle = 'D4SD News';
const twitterSectionTitle = 'Latest Tweets';
/**
 * NewsEvents
 */


const NEWS_ARTICLES = [
  {
    id: '',
    date: 'AUGUST 9',
    source: 'Chicago News Tribune',
    title: 'News Article Title',
    linkKey: 'walking',
  },
  {
    id: '',
    date: 'AUGUST 9',
    source: 'Chicago News Tribune',
    title: 'News Article Title',
    linkKey: 'walking',
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
            <h3 className={globalStyles.white}>{newsSectionTitle}</h3>
            <div className={styles.newsBoxes}>
              {NEWS_ARTICLES.map(({ title, date, linkKey, source }) => (
                <NewsBox
                  title={title}
                  date={date}
                  source={source}
                  linkUrl={`/challenges/${linkKey}`}
                />
              ))}
            </div>
          </div>
          <div className={styles.line} />
          <div className={styles.twitter}>
            <h3 className={globalStyles.white}>{twitterSectionTitle}</h3>
            <div className={styles.newsBoxes}>
              {NEWS_ARTICLES.map(({ title, date, linkKey, source }) => (
                <NewsBox
                  title={title}
                  date={date}
                  source={source}
                  linkUrl={`/challenges/${linkKey}`}
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
