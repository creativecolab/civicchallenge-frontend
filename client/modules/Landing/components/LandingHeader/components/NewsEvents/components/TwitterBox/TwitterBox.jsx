import React from 'react';
import PropTypes from 'prop-types';

import globalStyles from 'main.scss';
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
                <h4 className={globalStyles.white}>D4SD Official</h4>
                <h5>@d4sd</h5>
              </div>
            </div>
            <div className={styles.tweetText}>
              <h5 className={styles.tweet}>{tweet}</h5>
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
