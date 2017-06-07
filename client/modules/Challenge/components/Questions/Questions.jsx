/* eslint-disable max-len */

import React from 'react';
import PropTypes from 'prop-types';

import styles from './Questions.scss';

/**
 * Question
 */

function Question({ text, insights }) {
  const highlights = [];
  const comments = [];

  insights.forEach((insight) => {
    switch (insight.type) {
      case 1:
        comments.push(insight);
        break;
      case 2:
        highlights.push(insight);
        break;
      default:
    }
  });

  return (
    <div className={styles.question}>
      <div className={styles.headerContainer}>
        <h3>{text}</h3>
      </div>
      <div className={styles.insightsContainer}>
        <div className={styles.insightsColumn}>
          <h4>Highlights</h4>
          {highlights.map(insight =>
            <div className={styles.highlight} key={insight.id}>{insight.text}</div>
          )}
        </div>
        <div className={styles.insightsColumn}>
          <h4>Comments</h4>
          {comments.map(insight =>
            <div className={styles.comment} key={insight.id}>
              <div className={styles.commentText}>
                {insight.text}
              </div>
              <a href="/" className={styles.reply}>Reply</a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

Question.propTypes = {
  text: PropTypes.string.isRequired,
  insights: PropTypes.arrayOf(PropTypes.object),
};

Question.contextTypes = {
  router: PropTypes.object,
};

Question.defaultProps = {
  insights: [],
};

/**
 * Questions
 */
const propTypes = {
  questions: PropTypes.arrayOf(PropTypes.object),
};

const contextTypes = {
  router: PropTypes.object,
};

const defaultProps = {
  questions: [],
};

function Questions({ questions }) {
  return (
    <div className={styles.questions}>
      {questions.map(question => (
        <Question key={question.id} {...question} />
      ))}
    </div>
  );
}

Questions.propTypes = propTypes;
Questions.contextTypes = contextTypes;
Questions.defaultProps = defaultProps;

export default Questions;
