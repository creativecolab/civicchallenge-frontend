/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
/* import classNames from 'util/classNames'; */

import Navbar from 'components/Navbar/Navbar';
import Footer from 'components/Footer/Footer';
import StandardSectionBox from 'components/StandardSectionBox/StandardSectionBox';

import globalStyles from 'main.scss';

import styles from './LatestInMobility.scss';

import NewsBox from './components/NewsBox/NewsBox';
import walking from './biking.png';

/**
 * Constants
 */

const sectionTitle = 'Latest In Mobility';
const description = 'Curabitur lobortis id lorem id bibendum. Ut id consectetur magna. Quisque volutpat augue enim, pulvinar lobortis nibh lacinia at.';


/**
 * Resources
 */

const propTypes = {};

const challengeOne = 'How can we avoid dangerous bike accidents?';
const NEWS_ARTICLES = [
  {
    id: '',
    date: 'AUGUST 9',
    source: 'Chicago News Tribune',
    title: 'News Article Title',
    thumbnail: walking,
    linkKey: 'walking',
    descr: 'This is a description In hac habitasse platea dictumst. Vivamus adipiscing fermentum adipiscing fermentum fermentum…',
  },
  {
    id: '',
    date: 'AUGUST 9',
    source: 'Chicago News Tribune',
    title: 'News Article Title',
    thumbnail: walking,
    linkKey: 'walking',
    descr: 'This is a description In hac habitasse platea dictumst. Vivamus adipiscing fermentum adipiscing fermentum fermentum…',
  },
  {
    id: '',
    date: 'AUGUST 9',
    source: 'Chicago News Tribune',
    title: 'News Article Title',
    thumbnail: walking,
    linkKey: 'walking',
    descr: 'This is a description In hac habitasse platea dictumst. Vivamus adipiscing fermentum adipiscing fermentum fermentum…',
  },
];

const contextTypes = {
  router: PropTypes.object,
};

const defaultProps = {};

function LatestInMobility() {
  return (
    <div className={styles.resources}>
      <Helmet
        title="LatestInMobility"
      />
      <Navbar />

      <div className={globalStyles.pageWrapper}>
        <StandardSectionBox
          sectionTitle={sectionTitle}
          text={description}
        />
        <div className={styles.challenge}>
          <h2 className={globalStyles.grey}>{challengeOne}</h2>
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
      <Footer />
    </div>
  );
}

LatestInMobility.propTypes = propTypes;
LatestInMobility.contextTypes = contextTypes;
LatestInMobility.defaultProps = defaultProps;

export default LatestInMobility;
