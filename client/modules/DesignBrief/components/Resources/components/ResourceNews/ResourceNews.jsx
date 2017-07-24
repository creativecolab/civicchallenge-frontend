import React from 'react';
import PropTypes from 'prop-types';

import globalStyles from 'main.scss';
import styles from './ResourceNews.scss';

/**
 * Constants
 */

const articleLinkText = 'View Article';

/**
 * ResourceNews
 */

const propTypes = {
  headline: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  articleImage: PropTypes.string,
  articleLink: PropTypes.string.isRequired,
};

const contextTypes = {
  router: PropTypes.object,
};

const defaultProps = {
  articleImage: '',
};

function ResourceNews({ headline, date, articleImage, articleLink }) {
  return (
    <div className={styles.resourceNews}>
      <div className={styles.articleImage}>
        <img src={articleImage} alt={headline} />
      </div>
      <div className={styles.articleText}>
        <p>{date}</p>
        <h3>{headline}</h3>
        <div className={globalStyles.paragraphLink}>
          <a href={articleLink}>{articleLinkText}</a>
        </div>
      </div>
    </div>
  );
}

ResourceNews.propTypes = propTypes;
ResourceNews.contextTypes = contextTypes;
ResourceNews.defaultProps = defaultProps;

export default ResourceNews;
