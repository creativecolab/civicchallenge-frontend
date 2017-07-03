import React from 'react';
import PropTypes from 'prop-types';

import styles from './DBDiscussion.scss';

/**
 * DBDiscussion
 */

const propTypes = {};

const contextTypes = {
  router: PropTypes.object,
};

const defaultProps = {};

function DBDiscussion() {
  return (
    <div className={styles.discussion}>
      <div className={styles.discussionBox}>
        <div className={styles.discussionQBar}>
          <div className={styles.discussionQBarText}>
            <h3>Discussion Topic</h3>
            <h5>CURRENT</h5>
          </div>
          <div className={styles.discussionBtn}>
            <button>+</button>
          </div>
        </div>
        <div id="discussionAnswer" className={styles.discussionAnswerBox}>
          <div className={styles.discussionContent}>
            <div className={styles.discussionQuestion}>
              <h4>Discussion Question</h4>
              <p>To succeed you must believe. When you believe, you will succeed. Bless up.
              Congratulations, you played yourself. You smart, you loyal, you a genius. They
              never said winning was easy. Some people can’t handle success, I can. Lion!
              The key is to enjoy life, because they don’t want you to enjoy life. I promise
              you, they don’t want you to jetski, they don’t want you to smile. You see the
              hedges, how I got it shaped up? It’s important to shape up your hedges, it’s like
              getting a haircut, stay fresh. Learning is cool, but knowing is better, and I know
              the key to success.</p>
            </div>
            <div className={styles.discussionSlack}>
              <div className={styles.discussionHighlights}>
                <h4>Highlights from Slack</h4>
                <ul>
                  <li>Point 1</li>
                  <li>Point 2</li>
                  <li>Pointe 3</li>
                </ul>
              </div>
              <div className={styles.discussionExcerpts}>
                <h4>Selected Messages from Slack</h4>
                <div className={styles.discussionSlackMsgs} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

DBDiscussion.propTypes = propTypes;
DBDiscussion.contextTypes = contextTypes;
DBDiscussion.defaultProps = defaultProps;

export default DBDiscussion;
