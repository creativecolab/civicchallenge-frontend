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
          <p>Surround yourself with angels. Fan luv. Stay focused. Egg whites, turkey sausage, wheat toast,
           water. Of course they don’t want us to eat our breakfast, so we are going to enjoy our breakfast.
           The key to more success is to get a massage once a week, very important, major key, cloth talk.
           You smart, you loyal, you a genius. A major key, never panic. Don’t panic, when it gets crazy.
           and rough, don’t panic, stay calm.</p>
        </div>
      </div>
    </div>
  );
}

QuestionBox.propTypes = propTypes;
QuestionBox.contextTypes = contextTypes;
QuestionBox.defaultProps = defaultProps;

export default QuestionBox;
