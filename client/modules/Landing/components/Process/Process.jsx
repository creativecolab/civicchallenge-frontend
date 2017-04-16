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
