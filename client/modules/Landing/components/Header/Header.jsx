import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

import styles from './Header.scss';

let TweenLite = {};
if (process.env.browser) {
  TweenLite = require('gsap/TweenLite'); // eslint-disable-line global-require
  require('gsap/ScrollToPlugin'); // eslint-disable-line global-require
}

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
    const { scrollElements } = this.props;
    const clickHandler = key => () => {
      const scrollTo = scrollElements[key].getBoundingClientRect().top;
      const duration = scrollTo / 750;

      if (process.env.browser) {
        TweenLite.to(window, duration, {
          scrollTo,
        });
      }
    };

    return (
      <header className={styles.header}>
        <div
          className={styles.background}
        />
        <div className={styles.navbarContainer}>
          <div className={styles.logo}>D4SD</div>
          <nav className={styles.navbar}>
            <button className={styles.navbarButton} onClick={clickHandler('process')}>Process</button>
            <button className={styles.navbarButton} onClick={clickHandler('theme')}>Challenges</button>
            <button className={styles.navbarButton} onClick={clickHandler('sponsors')}>Sponsors</button>
            <button className={styles.navbarButton} onClick={clickHandler('footer')}>Contact</button>
          </nav>
        </div>
        <div className={styles.textContainer}>
          <section className={styles.text}>
            <h1>Design4SanDiego</h1>
            <h2>Design for the future of San Diego</h2>
            <div className={styles.buttonContainer}>
              <Link to="/placeholder">Get Involved</Link>
            </div>
          </section>
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  scrollElements: PropTypes.shape({
    footer: PropTypes.element,
    process: PropTypes.element,
    sponsors: PropTypes.element,
    theme: PropTypes.element,
  }).isRequired,
};

Header.contextTypes = {
  router: PropTypes.object,
};

export default Header;
