/* eslint-disable max-len */

import React, { Component, PropTypes } from 'react';

import styles from './Process.scss';

import timeline from './timeline.png';

/**
 * Process
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
        <p className={styles.description}>D4SD is an initiative led by researchers at UC San Diego that aims to engage citizens using methods from human-centered design and crowdsourcing to innovate solutions for civic challenges.</p>
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
