import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

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
          <div className={styles.logo}>Design San Diego</div>
          <nav className={styles.navbar}>
            <button className={styles.navbarButton}>About</button>
            <button className={styles.navbarButton}>Mobility Challenges</button>
            <button className={styles.navbarButton}>Sponsors</button>
          </nav>
        </div>
        <div className={styles.textContainer}>
          <section className={styles.text}>
            <h1>Design San Diego</h1>
            <h2>Exploring citizen-government collaboration in the digital age.</h2>
            <div className={styles.buttonContainer}>
              <Link to="/placeholder">Get Involved</Link>
            </div>
          </section>
        </div>
      </header>
    );
  }
}

Header.propTypes = {};

Header.contextTypes = {
  router: PropTypes.object,
};

export default Header;
