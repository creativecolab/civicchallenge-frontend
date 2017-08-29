
/* eslint-disable react/no-danger */
import React from 'react';
import PropTypes from 'prop-types';

// import globalStyles from 'main.scss';
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
  /* _componentDidMount() {
    const acc = document.getElementsByClassName("accordion");
    const i;
    for (i = 0; i < acc.length; i++) {
      acc[i].onclick = function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
        }
      }
    }
  }; */

  return (
    <div className={styles.QuestionBox}>
      <div className={styles.content}>
        <button className={styles.accordion}>{question}</button>
        <div className={styles.questionText}>
          <p
            dangerouslySetInnerHTML={{
              __html: answer,
            }}
          />
        </div>
      </div>
    </div>
  );
}

QuestionBox.propTypes = propTypes;
QuestionBox.contextTypes = contextTypes;
QuestionBox.defaultProps = defaultProps;

export default QuestionBox;
