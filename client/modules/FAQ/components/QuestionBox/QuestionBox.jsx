import React from 'react';
import PropTypes from 'prop-types';

import styles from './QuestionBox.scss';

/**
 * QuestionBox
 */

const propTypes = {
};

const contextTypes = {
  router: PropTypes.object,
};

const defaultProps = {};

function QuestionBox() {
  return (
    <div className={styles.QuestionBox}>
      <div className={styles.content}>
        <div className={styles.questionBar}>
          <div className={styles.qQuestion}>
            <h3>Question Text Goes Here?</h3>
          </div>
          <div className={styles.qBtn}>
            <button label="yay">+</button>
          </div>
        </div>
        <div className={styles.questionText}>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas mattis posuere purus nec fringilla. Nullam a gravida quam.
          Praesent pretium mi vitae ipsum tristique, sit amet tempor ligula auctor. Sed nisl velit, tincidunt eget eleifend id, lacinia a metus.
          Sed hendrerit accumsan ipsum. Nunc lacinia massa sit amet mi fermentum, id gravida purus ornare. Aenean ac libero tincidunt,
          bibendum ipsum non, congue nisi. Proin urna quam, sollicitudin fermentum blandit ut, congue in odio. In mauris diam, facilisis
          et volutpat sed, sodales ac libero. Sed convallis sagittis luctus..</p>
        </div>
      </div>
    </div>
  );
}

QuestionBox.propTypes = propTypes;
QuestionBox.contextTypes = contextTypes;
QuestionBox.defaultProps = defaultProps;

export default QuestionBox;
