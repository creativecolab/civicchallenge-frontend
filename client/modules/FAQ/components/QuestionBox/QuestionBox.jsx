
/* eslint-disable react/no-danger */
import React from 'react';
import PropTypes from 'prop-types';
// import classNames from 'util/class-names';

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

class QuestionBox extends React.PureComponent {
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

  constructor(props) {
    super(props);

    this.state = {
      open: false,
    };
  }

  getContentToggleHeight() {
    if (this.state.open) {
      return 'auto';
    }
    return '0';
  }

  toggleContent = () => {
    console.log('hi');
    this.setState({
      open: !(this.state.open),
    });
  }

  render() {
    const contentStyle = { height: this.getContentToggleHeight() };
    return (
      <div id={this.props.question} className={styles.QuestionBox}>
        <div className={styles.content}>
          <button
            className={styles.accordion}
            onClick={this.toggleContent}
          >
            {this.props.question}
          </button>
          <div
            className={styles.questionText}
            style={contentStyle}
          >
            <p
              dangerouslySetInnerHTML={{
                __html: this.props.answer,
              }}
            />
          </div>
        </div>
      </div>
    );
  }
}

QuestionBox.propTypes = propTypes;
QuestionBox.contextTypes = contextTypes;
QuestionBox.defaultProps = defaultProps;

export default QuestionBox;
