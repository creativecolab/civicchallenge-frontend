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
      <section className={styles.process} ref={(element) => { this.rootElement = element; }}>
        <p className={styles.description}>D4SD is an initiative led by researchers at UC San Diego that aims to engage citizens using methods from human-centered design and crowdsourcing to innovate solutions for civic challenges.</p>
        <p className={styles.description}>This initiative provides a unique opportunity to collaborate between a diverse set of stakeholders, ranging from students to civic leaders.</p>
        <h3>Process</h3>
        <img src={timeline} alt="Timeline" className={styles.placeholderImg} />
      </section>
    );
  }
}

Process.propTypes = {};

Process.contextTypes = {
  router: PropTypes.object,
};

export default Process;
