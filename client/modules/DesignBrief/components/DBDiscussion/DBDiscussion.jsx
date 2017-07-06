import React from 'react';
import PropTypes from 'prop-types';

import styles from './DBDiscussion.scss';
import slackTemp from './slack-API-temp.png';

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
            <h3>If we were to develop a participatory design activity that would help us learn more
              about accessibility concerns facing real stakeholders, what are the design considerations
              for developing an activity at specific points along the mobility infrastructure (e.g.,
              transit centers, trolleys)?</h3>
          </div>
          <div className={styles.discussionBtn}>
            <button>+</button>
          </div>
        </div>
        <div id="discussionAnswer" className={styles.discussionAnswerBox}>
          <div className={styles.discussionContent}>
            <div className={styles.discussionQuestion}>
              <h4>Key Sub Question</h4>
              <ol>
                <li>A new state law and MTS policy imposes a fine on passengers who do not give up
                their seat to seniors and people with disabilities if the seat is located in a wheelchair
                or priority seating area of the bus or Trolley. What are other ways of motivating
                people to give up their seat to seniors and people with disabilities? Fines motivate
                people because they are a negative incentive, what might be a positive incentive?</li>
              </ol>
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
        <div className={styles.discussionQBar}>
          <div className={styles.discussionQBarText}>
            <h3>Trace a hypothetical path that a person with a disability might navigate through the city,
            for example traveling from their home to a local market. What assumptions, values or beliefs
              do we make when constructing that hypothetical path?</h3>
          </div>
          <div className={styles.discussionBtn}>
            <button>+</button>
          </div>
        </div>
        <hr />
        <div className={styles.discussionQBar}>
          <div className={styles.discussionQBarText}>
            <h3>In envisioning the route, it’s important to consider and factor in the challenges
            that people with disabilities might face. How might we learn about these challenges along
            a trip from home to somewhere familiar, like the market, or to somewhere less familiar?</h3>
          </div>
          <div className={styles.discussionBtn}>
            <button>+</button>
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
