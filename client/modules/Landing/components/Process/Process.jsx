/* eslint-disable max-len */

import React, { Component, PropTypes } from 'react';

import styles from './Process.scss';

import timeline from './timeline.png';

/**
 * Timeline Item
 */

const TimelineItem = (props) => {
  return (
    <div className={styles.timelineItem}>
      <div className={styles.title}>{props.title}</div>
      <div className={styles.description}>{props.description}</div>
    </div>
  );
};

TimelineItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

/**
 * Process
 */

const TIMELINE_ITEMS = [
  {
    title: 'Discover Issues',
    description: 'Discover issues and find biggest challenges in the targeted problem space',
  },
  {
    title: 'Ideate Solutions',
    description: 'Generate multiple ways and alternative solutions to address challenges',
  },
  {
    title: 'Prototype Concepts',
    description: 'Build mockups of solutions to move forward with testing and feedback',
  },
  {
    title: 'Take Action',
    description: 'Present best solutions to civic leaders and experts for implementation',
  },
];

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
      <section className={styles.process} ref={(element) => { this.rootElement = element; }}>
        <img src={timeline} alt="Timeline" className={styles.placeholderImg} />
        <div className={styles.timeline}>
          {TIMELINE_ITEMS.map(item =>
            <TimelineItem
              key={item.title}
              {...item}
            />
          )}
        </div>
      </section>
    );
  }
}

Process.propTypes = {};

Process.contextTypes = {
  router: PropTypes.object,
};

export default Process;
