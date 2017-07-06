import React from 'react';
import PropTypes from 'prop-types';

import styles from './DBDiscussion.scss';
import slackTemp from './slack-APi-temp.png';

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
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar, lorem sit amet pellentesque accumsan,
              massa nisl commodo dui, quis gravida enim eros ut enim. Sed rutrum ornare quam, nec suscipit nulla pulvinar
              sollicitudin. Aenean dignissim mi augue,
              id lobortis mauris scelerisque quis. Nam pellentesque et nulla eu egestas. Suspendisse elit ex, lobortis etå
              pharetra facilisis, sagittis eget mi. Fusce lobortis, quam id sollicitudin imperdiet, felis sem viverra tellus,
               at porttitor elit enim quis diam. Ut pellentesque dui ac interdum dictum.</p>
            </div>
            <div className={styles.discussionSlack}>
              <div className={styles.discussionHighlights}>
                <h4>Highlights from Slack</h4>
                <ul>
                  <li>Highlight 1</li>
                  <li>Highlight 2</li>
                  <li>Highlight 3</li>
                </ul>
              </div>
              <div className={styles.discussionExcerpts}>
                <h4>Selected Messages from Slack</h4>
                <div className={styles.discussionSlackMsgs}>
                  <img src={slackTemp} alt="slack temp" />
                </div>
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
