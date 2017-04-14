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
            <h1>Design for the future of San Diego</h1>
            <p className={styles.description}>D4SD is an initiative led by researchers at UC San Diego that aims to engage citizens using methods from human-centered design and crowdsourcing to innovate solutions for civic challenges. This initiative provides a unique opportunity to collaborate between a diverse set of stakeholders, ranging from students to civic leaders.</p>
            <div className={styles.buttonContainer}>
              <a href="mailto:design4sandiego@gmail.com">Get Involved</a>
              {false && <Link to="/placeholder">Get Involved</Link>}
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
