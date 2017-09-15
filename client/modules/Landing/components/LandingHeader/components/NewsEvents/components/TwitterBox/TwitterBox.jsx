import React from 'react';
import PropTypes from 'prop-types';

// import globalStyles from 'main.scss';
import styles from './TwitterBox.scss';

import twitterIcon from './twitter_icon.png';

/**
 * Constants
 */


/**
 * TwitterBox
 */

const propTypes = {
  tweet: PropTypes.string.isRequired,
};

const contextTypes = {
  router: PropTypes.object,
};

const defaultProps = {};

function TwitterBox({ tweet }) {
  return (
    <section className={styles.wrapper}>
      <div className={styles.boxWrapper}>
        <section className={styles.TwitterBox}>
          <div className={styles.tweetTextWrapper}>
            <div className={styles.heading}>
              <div className={styles.twitterLogo}>
                <img src={twitterIcon} alt="twitter" />
              </div>
              <div className={styles.name}>
                {/* <a href="https://twitter.com/Design4SD" rel="noopener noreferrer" target="_blank"><h4>Design for San Diego</h4></a> */}
                <a href="https://twitter.com/Design4SD" rel="noopener noreferrer" target="_blank"><h5>@Design4SD</h5></a>
              </div>
            </div>
            <div className={styles.tweetText}>
              <a href="https://twitter.com/Design4SD" rel="noopener noreferrer" target="_blank"><span>{tweet}</span></a>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}

TwitterBox.propTypes = propTypes;
TwitterBox.contextTypes = contextTypes;
TwitterBox.defaultProps = defaultProps;

export default TwitterBox;
