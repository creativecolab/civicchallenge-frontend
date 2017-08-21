import React from 'react';
import PropTypes from 'prop-types';

import globalStyles from 'main.scss';

import styles from './NewsBox.scss';

/**
 * NewsBox
 */

const propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  linkUrl: PropTypes.string.isRequired,
  descr: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired,
};

const contextTypes = {
  router: PropTypes.object,
};

const defaultProps = {};

function NewsBox({ title, date, thumbnail, linkUrl, descr, source }) {
  return (
    <section className={styles.wrapper}>
      <div className={styles.boxWrapper}>
        <section className={styles.NewsBox}>
          <div className={styles.newsImg}>
            <div className={styles.blackBox} />
            <div className={styles.thumbnailImg}>
              <img src={thumbnail} alt={title} />
            </div>
          </div>
          <div className={styles.newsTextWrapper}>
            <div className={styles.newsText}>
              <h5 className={styles.date}>{date} • {source}</h5>
              <a className={styles.title} href={linkUrl} target="_blank" rel="noopener noreferrer"><span className={globalStyles.blue}>{title}&nbsp;&nbsp;</span></a>
              <p className={styles.descr}>{descr}</p>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}

NewsBox.propTypes = propTypes;
NewsBox.contextTypes = contextTypes;
NewsBox.defaultProps = defaultProps;

export default NewsBox;
