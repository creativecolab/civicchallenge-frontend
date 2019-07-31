import React from 'react';
import PropTypes from 'prop-types';
import ReactGA from 'react-ga';
import { Link } from 'react-router';

import styles from './HeaderNoBanner.scss';
import landingLogo from './logo_black.png';

/**
 * Constants
 */

// TODO: Make homepage links scroll to correct area
const LINKS = [
  {
    href: '/howitworks',
    text: 'How It Works',
  },
  {
    href: '/challenges',
    text: 'Design Briefs',
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
    text: 'About Us',
  },
];


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

function HeaderNoBanner({ backgroundImg, headerText, subheaderText, showButton }, { router }) {
  return (
    <header className={styles.HeaderNoBanner}>
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
          <a onClick={logClick} href="/getinvolved">PARTICIPATE NOW</a>
        </nav>
      </div>
    </header>
  );
}

HeaderNoBanner.propTypes = propTypes;
HeaderNoBanner.contextTypes = contextTypes;
HeaderNoBanner.defaultProps = defaultProps;

export default HeaderNoBanner;
