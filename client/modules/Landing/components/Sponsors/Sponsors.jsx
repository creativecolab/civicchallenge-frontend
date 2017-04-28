/* eslint-disable max-len */

import React, { Component, PropTypes } from 'react';

import styles from './Sponsors.scss';

/**
 * Sponsors
 */

class Sponsors extends Component {
  constructor(props) {
    super(props);
    this.state = { isMounted: false };
  }

  componentDidMount() {
    this.setState({ isMounted: true });
  }

  render() {
    return (
      <section className={styles.sponsors}>
        <h3>Sponsors</h3>
        <p className={styles.placeholder}>We are currently putting together our sponsorship model. If you would like to be part of this initiative, please reach out to <a href="mailto:design4sandiego@gmail.com">design4sandiego@gmail.com</a>.</p>
      </section>
    );
  }
}

Sponsors.propTypes = {};

Sponsors.contextTypes = {
  router: PropTypes.object,
};

export default Sponsors;
