/* eslint-disable max-len */

import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

import styles from './Intro.scss';

/**
 * Intro
 */

class Intro extends Component {
  constructor(props) {
    super(props);
    this.state = { isMounted: false };
  }

  componentDidMount() {
    this.setState({ isMounted: true });
  }

  render() {
    return (
      <div className={styles.intro}>
        <p className={styles.description}>D4SD is an initiative led by <Link to="/team">researchers at UC San Diego</Link> that aims to engage citizens using methods from human-centered design and crowdsourcing to innovate solutions for civic challenges.</p>
      </div>
    );
  }
}

Intro.propTypes = {};

Intro.contextTypes = {
  router: PropTypes.object,
};

export default Intro;
