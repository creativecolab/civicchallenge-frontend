import React from 'react';
import PropTypes from 'prop-types';
import ReactGA from 'react-ga';
import { Link } from 'react-router';
import classNames from 'util/classNames';

import styles from './Navbar.scss';
import landingLogo from './logo_black.png';

let TimelineLite = {};
if (process.env.browser) {
  TimelineLite = require('gsap/TimelineLite'); // eslint-disable-line global-require
  require('gsap/CSSPlugin'); // eslint-disable-line global-require
}

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

class Navbar extends React.PureComponent {
  static ANIMATION_DURATION = 0.5

  constructor(props) {
    super(props);

    this.state = {
      mobileNavbarOpen: false,
    };
  }

  _mobileNavbarOnClick = () => {
    const { mobileNavbarOpen } = this.state;

    const tl = new TimelineLite()
      /*
      .to(this.navbar, Navbar.ANIMATION_DURATION, {
        left: mobileNavbarOpen ? '100%' : 0,
      }, 0)
      */
      .to(this.burger1, Navbar.ANIMATION_DURATION, {
        y: mobileNavbarOpen ? 0 : 10,
        rotation: mobileNavbarOpen ? 0 : '45deg',
      }, 0)
      .to(this.burger2, Navbar.ANIMATION_DURATION, {
        width: mobileNavbarOpen ? '100%' : 0,
        left: mobileNavbarOpen ? 0 : '50%',
      }, 0)
      .to(this.burger3, Navbar.ANIMATION_DURATION, {
        y: mobileNavbarOpen ? 0 : -10,
        rotation: mobileNavbarOpen ? 0 : '-45deg',
      }, 0);

    this.navbarItems.forEach((navbarItem, i) => {
      tl.to(navbarItem, Navbar.ANIMATION_DURATION, {
        left: mobileNavbarOpen ? 0 : '-100%',
      }, i * (Navbar.ANIMATION_DURATION / 4));
    });

    this.setState({
      mobileNavbarOpen: !mobileNavbarOpen,
    });
  }

  render() {
    // const { backgroundImg, headerText, subheaderText, showButton } = this.props;
    const { router } = this.context;

    return (
      <header className={styles.navbar}>
        <div className={styles.navbarContainer}>
          <div className={styles.logo}>
            <Link to="/"><img className="theLogo" src={landingLogo} alt="logo" /></Link>
          </div>
          <nav className={styles.navbarInner} ref={(el) => { this.navbar = el; }}>
            {LINKS.map(({ href, text }, i) => (
              <div className={styles.navbarLinkContainer} ref={(el) => { this.navbarItems = this.navbarItems || []; this.navbarItems[i] = el; }}>
                <Link key={text} to={href} className={(href === router.location.pathname) ? styles.active : ''}>{text}</Link>
              </div>
            ))}
          </nav>
          <div className={styles.registerButton}>
            <div className={styles.buttonContainer}>
              <Link onClick={logClick} to="/getinvolved">Get Involved</Link>
            </div>
          </div>
          <button className={styles.mobileNavbar} onClick={this._mobileNavbarOnClick}>
            <div className={classNames([styles.burger, styles.burger1])} ref={(el) => { this.burger1 = el; }} />
            <div className={classNames([styles.burger, styles.burger2])} ref={(el) => { this.burger2 = el; }} />
            <div className={classNames([styles.burger, styles.burger3])} ref={(el) => { this.burger3 = el; }} />
          </button>
        </div>
      </header>
    );
  }
}

Navbar.propTypes = propTypes;
Navbar.contextTypes = contextTypes;
Navbar.defaultProps = defaultProps;

export default Navbar;
