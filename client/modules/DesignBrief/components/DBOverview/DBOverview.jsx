import React from 'react';
import PropTypes from 'prop-types';

import styles from './DBOverview.scss';

/**
 * dbHeader
 */

const propTypes = {};

const contextTypes = {
  router: PropTypes.object,
};

const defaultProps = {};

function dbHeader() {
  return (
    <div className={styles.overview}>
      <div className={styles.overviewText}>
        <h2>The Brief</h2>
        <p>To succeed you must believe. When you believe, you will succeed. Bless up.
        Congratulations, you played yourself. You smart, you loyal, you a genius. They
        never said winning was easy. Some people can’t handle success, I can. Lion!
        The key is to enjoy life, because they don’t want you to enjoy life. I promise
        you, they don’t want you to jetski, they don’t want you to smile. You see the
        hedges, how I got it shaped up? It’s important to shape up your hedges, it’s like
        getting a haircut, stay fresh. Learning is cool, but knowing is better, and I know
        the key to success.</p>
      </div>
      <div className={styles.overviewSideBar}>
        <div className={styles.currentPhase}>
          <h2>Current Phase</h2>
          <div className={styles.timeLine} />
          <span>Phase 1: </span>
          <span>Ideation</span>
        </div>
        <div className={styles.currGoingOn}>
          <h2>What&#39;s Going On Now</h2>
          <ul>
            <li>Point 1</li>
            <li>Point 2</li>
            <li>Pointe 3</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

dbHeader.propTypes = propTypes;
dbHeader.contextTypes = contextTypes;
dbHeader.defaultProps = defaultProps;

export default dbHeader;
