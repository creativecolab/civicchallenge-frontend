import React from 'react';
import PropTypes from 'prop-types';
import ReactGA from 'react-ga';
import { Link } from 'react-router';

import styles from './Navbar.scss';
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
 * Navbar
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

function Navbar({ backgroundImg, headerText, subheaderText, showButton }, { router }) {
  return (
    <header className={styles.navbar}>
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
              <a onClick={logClick} href="/getinvolved">Get Involved</a>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

Navbar.propTypes = propTypes;
Navbar.contextTypes = contextTypes;
Navbar.defaultProps = defaultProps;

export default Navbar;
