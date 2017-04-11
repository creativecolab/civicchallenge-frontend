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
      <div className={styles.sponsors}>
        <h3>Sponsors</h3>
      </div>
    );
  }
}

Sponsors.propTypes = {};

Sponsors.contextTypes = {
  router: PropTypes.object,
};

export default Sponsors;
