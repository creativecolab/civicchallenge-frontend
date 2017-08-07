import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

import styles from './NewsBox.scss';

import tabIcon from './newtab_icon.png';

/**
 * Constants
 */

const ButtonText = 'View Article';

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
              <p className={styles.title}>{title}</p>
              <h4 className={styles.descr}>{descr}</h4>
              <div className={styles.button}>
                <Link to={linkUrl} className={styles.blue}><h4>{ButtonText}</h4></Link>
                <img src={tabIcon} alt={title} />
              </div>
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
