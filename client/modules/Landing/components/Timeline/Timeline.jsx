import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

import ChartItem from './components/ChartItem/ChartItem';

import styles from './Timeline.scss';

/**
 * Timeline
 */

const CHART_ITEMS = [
  {
    label: 'Identify',
    description: 'This is a long, long winded, and exceedingly boring description',
  },
  {
    label: 'Ideate',
    description: 'This is a long, long winded, and exceedingly boring description',
  },
  {
    label: 'Prototype',
    description: 'This is a long, long winded, and exceedingly boring description',
  },
  {
    label: 'Implement',
    description: 'This is a long, long winded, and exceedingly boring description',
  },
];

class Timeline extends Component {
  constructor(props) {
    super(props);
    this.state = { isMounted: false };
  }

  componentDidMount() {
    this.setState({ isMounted: true });
  }

  render() {
    return (
      <div className={styles.timeline}>
        <h3>Timeline</h3>
        <div className={styles.chart}>
          {CHART_ITEMS.map((item, i, array) =>
            // <TransitionGroup key={item.label}>
            <ChartItem
              key={item.label}
              styles={styles}
              start={i === 0}
              end={i === array.length - 1}
              {...item}
            />
            // </TransitionGroup>
          )}
        </div>
        <div className={styles.buttonContainer}>
          <Link to="/placeholder">Button to get involved</Link>
        </div>
      </div>
    );
  }
}

Timeline.propTypes = {};

Timeline.contextTypes = {
  router: PropTypes.object,
};

export default Timeline;
