/* eslint-disable max-len */

import React, { Component, PropTypes } from 'react';

import styles from './Header.scss';

/**
 * Header
 */

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { isMounted: false };
  }

  componentDidMount() {
    this.setState({ isMounted: true });
  }

  render() {
    return (
      <header className={styles.header}>
        <div
          className={styles.background}
        />
        <div className={styles.navbarContainer}>
          <div className={styles.logo}>D4SD</div>
          <nav className={styles.navbar} />
        </div>
        <div className={styles.textContainer}>
          <section className={styles.text}>
            <h1>Sponsors</h1>
          </section>
        </div>
      </header>
    );
  }
}

Header.propTypes = {
};

Header.contextTypes = {
  router: PropTypes.object,
};

export default Header;
