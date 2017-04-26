/* eslint-disable max-len */

import React, { Component, PropTypes } from 'react';

import styles from './Header.scss';


let TweenLite = {};
if (process.env.browser) {
  TweenLite = require('gsap/TweenLite'); // eslint-disable-line global-require
  require('gsap/ScrollToPlugin'); // eslint-disable-line global-require
}

/**
 * Header
 */

const NAV_ITEMS = ['About', 'Challenges', 'Sponsors', 'Contact'].map((item) => { return { key: item.toLowerCase(), name: item }; });

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
            {NAV_ITEMS.map(({ key, name }) => {
              return (
                <button key={key} className={styles.navbarButton} onClick={clickHandler(key)}>{name}</button>
              );
            })}
          </nav>
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
  scrollElements: PropTypes.shape({
    process: PropTypes.element,
    challenges: PropTypes.element,
    sponsors: PropTypes.element,
    contact: PropTypes.element,
  }).isRequired,
};

Header.contextTypes = {
  router: PropTypes.object,
};

export default Header;
