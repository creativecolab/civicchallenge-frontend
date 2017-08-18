/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
/* import classNames from 'util/classNames'; */

import globalStyles from 'main.scss';

import styles from './LatestInMobility.scss';

import NewsBox from './components/NewsBox/NewsBox';
import walking from './biking.png';

/**
 * Constants
 */

const sectionTitle = 'Latest In Mobility';
const description = 'Cities across the globe grapple with many of the mobility issues in San Diego, click here for a list of research papers and popular articles that we have found useful.';


/**
 * Resources
 */

const propTypes = {};

const NEWS_ARTICLES = [
  {
    id: '',
    date: 'JUNE 30',
    source: 'The Kansas City Star',
    title: 'Can Google-glass help the blind come close to seeing again?',
    thumbnail: walking,
    linkKey: 'http://www.kansascity.com/news/local/article158958379.html',
    descr: 'Google glasses designed for blind people connects those with disabilities to a live person who describes the surroundings of the person while viewing through the glasses camera.',
  },
  {
    id: '',
    date: 'JULY 13',
    source: 'CBCNews',
    title: 'Sometimes all sign language needs is a helping glove that translates their words into text.',
    thumbnail: walking,
    linkKey: 'http://www.cbc.ca/news/technology/wearable-tech-asl-glove-1.4195429',
    descr: 'Wearable tech gloves that can sense sign language and translate the movements into text that can be read, making communication between those with speaking disabilities and others much better.',
  },
  {
    id: '',
    date: 'MARCH 23',
    source: 'Citylab',
    title: 'How can we actually know who needs our seat on transit?',
    thumbnail: walking,
    linkKey: 'https://www.citylab.com/life/2017/03/riding-the-subway-with-an-invisible-illness/520503/',
    descr: 'This article raises the question of who deserves to be given priority on transit seats, considering the number of people who have disabilities that may not be visually identifiable.',
  },
];

const contextTypes = {
  router: PropTypes.object,
};

const defaultProps = {};

function LatestInMobility() {
  return (
    <div className={styles.resources}>
      <div className={styles.headerText}>
        <h2>{sectionTitle}</h2>
        <p>{description}</p>
      </div>
      <div className={styles.challenge}>
        <div className={globalStyles.gridStyle}>
          {NEWS_ARTICLES.map(({ title, date, thumbnail, linkKey, descr, source }) => (
            <NewsBox
              title={title}
              date={date}
              thumbnail={thumbnail}
              descr={descr}
              source={source}
              linkUrl={`/challenges/${linkKey}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

LatestInMobility.propTypes = propTypes;
LatestInMobility.contextTypes = contextTypes;
LatestInMobility.defaultProps = defaultProps;

export default LatestInMobility;
