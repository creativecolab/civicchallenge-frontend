import React from 'react';
import PropTypes from 'prop-types';
import ReactGA from 'react-ga';
import { Link } from 'react-router';

import styles from './Header.scss';
import landingLogo from './logo_black.png';

/**
 * Constants
 */

// TODO: Make homepage links scroll to correct area
const LINKS = [
  {
    href: '/challenges',
    text: 'Challenges',
  },
  {
    href: '/press-and-events',
    text: 'Press & Events',
  },
  {
    href: '/resources',
    text: 'Resources',
  },
  {
    href: '/sponsors',
    text: 'Sponsors',
  },
  {
    href: '/about',
    text: 'About',
  },
];

/*  ,./

/**
 * Header
 */

const propTypes = {
  backgroundImg: PropTypes.string.isRequired,
  headerText: PropTypes.string.isRequired,
  subheaderText: PropTypes.string.isRequired,
  showButton: PropTypes.bool.isRequired,
};

const contextTypes = {
  router: PropTypes.object,
};

const defaultProps = {};

function logClick() {
  ReactGA.event({
    category: 'Registration',
    action: 'Clicked Register Today',
    label: 'Challenge Text link',
  });
}

function Header({ backgroundImg, headerText, subheaderText, showButton }, { router }) {
  return (
    <header className={styles.header}>
      <div
        className={styles.background}
      />
      <div className={styles.navbarContainer}>
        <div className={styles.logo}>
          <Link to="/"><img className="theLogo" src={landingLogo} alt="logo" /></Link>
        </div>
        <nav className={styles.navbar}>
          {LINKS.map(({ href, text }) =>
            <Link key={text} to={href} className={(href === router.location.pathname) ? styles.active : ''}>{text}</Link>
          )}
          <div className={styles.registerButton}>
            <div className={styles.buttonContainer}>
              <a onClick={logClick} href="https://docs.google.com/forms/d/e/1FAIpQLSe-DzyjLGgLHdXkc8Fj7yGJrxm-PJ2Gr_LABKGeQDH699O6Hw/viewform?usp=sf_link" rel="noopener noreferrer" target="_blank">Participate Now</a>
            </div>
          </div>
        </nav>
      </div>
      <div className={styles.textContainer}>
        <section className={styles.text}>
          {headerText && <h1>{headerText}</h1>}
          {subheaderText && <p className={styles.description}>{subheaderText}</p>}
          {showButton && <div className={styles.buttonContainer}>
            <a href="mailto:design4sandiego@gmail.com">Get Involved</a>
          </div>}
        </section>
      </div>
      {backgroundImg && <img src={backgroundImg} alt="Background" />}
    </header>
  );
}

Header.propTypes = propTypes;
Header.contextTypes = contextTypes;
Header.defaultProps = defaultProps;

export default Header;
