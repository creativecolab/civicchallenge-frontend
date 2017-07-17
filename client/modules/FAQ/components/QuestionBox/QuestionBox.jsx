import React from 'react';
import PropTypes from 'prop-types';

import styles from './QuestionBox.scss';

/**
 * QuestionBox
 */

const propTypes = {
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
};

const contextTypes = {
  router: PropTypes.object,
};

const defaultProps = {};

function QuestionBox({ question, answer }) {
  return (
    <div className={styles.QuestionBox}>
      <div className={styles.content}>
        <div className={styles.questionBar}>
          <div className={styles.qQuestion}>
            <h3>{question}</h3>
          </div>
          <div className={styles.qBtn}>
            <button label="yay">+</button>
          </div>
        </div>
        <div className={styles.questionText}>
          <p>{answer}</p>
        </div>
      </div>
    </div>
  );
}

QuestionBox.propTypes = propTypes;
QuestionBox.contextTypes = contextTypes;
QuestionBox.defaultProps = defaultProps;

export default QuestionBox;
