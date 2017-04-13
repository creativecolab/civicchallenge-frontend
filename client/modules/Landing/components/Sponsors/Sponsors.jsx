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
      <section className={styles.sponsors} ref={(element) => { this.rootElement = element; }}>
        <h3>Sponsors</h3>
        <p className={styles.placeholder}>We are currently gathering our list of sponsors, check back soon!</p>
      </section>
    );
  }
}

Sponsors.propTypes = {};

Sponsors.contextTypes = {
  router: PropTypes.object,
};

export default Sponsors;
