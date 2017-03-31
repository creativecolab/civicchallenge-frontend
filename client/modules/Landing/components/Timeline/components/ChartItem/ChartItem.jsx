import React, { Component, PropTypes } from 'react';
import { TweenLite, CSSPlugin } from 'gsap'; // eslint-disable-line no-unused-vars
import classNames from 'util/classNames';
import chainAnimations from 'util/chainAnimations';

/**
 * ChartItem
 */

class ChartItem extends Component {
  constructor(props) {
    super(props);
    this.state = { isMounted: false };
  }

  componentDidMount() {
    this.setState({ isMounted: true });
  }

  componentWillAppear(callback) {
    const { label, plotDot, plotLine, description } = this;
    const { start, end } = this.props;

    plotDot.style.width = 0;
    plotDot.style.height = 0;
    plotLine.style.width = 0;
    label.style.opacity = 0;
    description.style.opacity = 0;

    chainAnimations([
      {
        el: plotDot,
        duration: 0.5,
        from: {
          width: 0,
          height: 0,
        },
        to: {
          width: 25,
          height: 25,
        },
      },
      [
        {
          el: [label, description],
          duration: 1,
          from: {
            opacity: 0,
          },
          to: {
            opacity: 1,
          },
        },
        {
          el: plotLine,
          duration: 1,
          from: {
            width: 0,
          },
          to: {
            width: start || end ? '50%' : '100%',
          },
          callback,
        },
      ],
    ]);
  }

  render() {
    const { styles, start, end, label, description } = this.props;

    return (
      <div className={classNames([styles.item, start && styles.start, end && styles.end])}>
        <div className={styles.label} ref={(c) => { this.label = c; }}>
          {label}
        </div>
        <div className={styles.plotContainer}>
          <div
            className={styles.dot}
            ref={(c) => { this.plotDot = c; }}
          />
          <div
            className={styles.line}
            ref={(c) => { this.plotLine = c; }}
          />
        </div>
        <div className={styles.description} ref={(c) => { this.description = c; }}>
          {description}
        </div>
      </div>
    );
  }
}

ChartItem.propTypes = {
  styles: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  start: PropTypes.bool.isRequired,
  end: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

ChartItem.contextTypes = {
  router: PropTypes.object,
};

export default ChartItem;
