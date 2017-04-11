import React, { Component, PropTypes } from 'react';

// import ChartItem from './components/ChartItem/ChartItem';

import styles from './Process.scss';

import timeline from './timeline.png';

/**
 * Process
 */

/*
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
*/

class Process extends Component {
  constructor(props) {
    super(props);
    this.state = { isMounted: false };
  }

  componentDidMount() {
    this.setState({ isMounted: true });
  }

  render() {
    return (
      <div className={styles.process}>
        <h3>Our Process</h3>
        <img src={timeline} alt="Timeline" className={styles.placeholderImg} />
      </div>
    );
  }
}

Process.propTypes = {};

Process.contextTypes = {
  router: PropTypes.object,
};

export default Process;
