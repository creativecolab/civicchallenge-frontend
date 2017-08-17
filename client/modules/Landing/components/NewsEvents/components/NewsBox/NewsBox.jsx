import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

import styles from './NewsBox.scss';

// import tabIcon from './newtab_icon.png';

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
  linkUrl: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired,
};

const contextTypes = {
  router: PropTypes.object,
};

const defaultProps = {};

function NewsBox({ title, date, linkUrl, source }) {
  return (
    <section className={styles.wrapper}>
      <div className={styles.boxWrapper}>
        <section className={styles.NewsBox}>
          <div className={styles.newsTextWrapper}>
            <div className={styles.newsText}>
              <h5 className={styles.date}>{date}</h5>
              <h4 className={styles.title}>{title}</h4>
              <h5 className={styles.source}>{source}</h5>
              <div className={styles.button}>
                <Link to={linkUrl} className={styles.blue}><h5>{ButtonText}</h5></Link>
                {/* <img src={tabIcon} alt={title} /> */}
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
