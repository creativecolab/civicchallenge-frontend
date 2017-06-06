/* eslint-disable max-len */

import React from 'react';
import PropTypes from 'prop-types';

/**
 * Question
 */

function Question({ text, insights }) {
  return (
    <div>
      <p>{text}</p>
      <ul>
        {insights.map(insight =>
          <li key={insight.id}>{insight.text}</li>
        )}
      </ul>
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
    <div>
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
