/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';

import globalStyles from 'main.scss';
import styles from './News.scss';
import NewsBox from './components/NewsBox/NewsBox';


const propTypes = {
  sectionTitle: PropTypes.string,
  description: PropTypes.string,
  articles: PropTypes.array,
};

const contextTypes = {
  router: PropTypes.object,
};

const defaultProps = {
  sectionTitle: null,
  description: null,
  articles: [],
};

function News(props) {
  const { sectionTitle, description } = props;
  return (
    <div className={styles.resources}>
      <div className={styles.headerText}>
        {sectionTitle && <h2>{sectionTitle}</h2>}
        {description && <p>{description}</p>}
      </div>
      <div className={styles.challenge}>
        <div className={globalStyles.gridStyle}>
          {props.articles.map(({ title, date, thumbnail, linkKey, descr, source }) => (
            <NewsBox
              key={linkKey}
              title={title}
              date={date}
              thumbnail={thumbnail}
              descr={descr}
              source={source}
              linkUrl={linkKey}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

News.propTypes = propTypes;
News.contextTypes = contextTypes;
News.defaultProps = defaultProps;

export default News;
