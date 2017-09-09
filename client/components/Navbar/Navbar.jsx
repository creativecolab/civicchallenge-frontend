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
    text: 'Challenge Briefs',
    dropDown: [
      {
        dHref: '/challenges/walking',
        dText: 'Walking and Biking',
      },
      {
        dHref: '/challenges/improvingaccessibility',
        dText: 'Accessibility',
      },
      {
        dHref: '/challenges/traffic',
        dText: 'Commuter Experience',
      },
      {
        dHref: '/challenges/autonomousvehicles',
        dText: 'Autonomous Vehicles',
      },
    ],
  },
  {
    href: '/events',
    text: 'Events',
  },
  {
    href: '/faqs',
    text: 'FAQ',
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
  // backgroundImg: PropTypes.string.isRequired,
  // headerText: PropTypes.string.isRequired,
  // subheaderText: PropTypes.string.isRequired,
  // showButton: PropTypes.bool.isRequired,
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

  componentDidMount() {
    this.navbarDropdownHeights = [];
  }

  _mobileNavbarOnClick = () => {
    const { mobileNavbarOpen } = this.state;

    let offset = 0;

    if (mobileNavbarOpen) {
      this.navbarDropdowns.forEach((_, i) => {
        if (this.state[`dropdown${i}Open`]) {
          this._openDropdownOnClick(i)();
          offset = Navbar.ANIMATION_DURATION;
        }
      });
    } else {
      // Make the dropdown disappear (height 0)
      this.navbarDropdowns.forEach((el, i) => {
        this.navbarDropdownHeights[i] = this.navbarDropdownHeights[i] || el.clientHeight;
        el.style.height = 0; // eslint-disable-line no-param-reassign
      });
    }

    const tl = new TimelineLite()
      .to(this.burger1, Navbar.ANIMATION_DURATION + offset, {
        y: mobileNavbarOpen ? 0 : 10,
        rotation: mobileNavbarOpen ? 0 : '45deg',
      }, 0)
      .to(this.burger2, Navbar.ANIMATION_DURATION + offset, {
        width: mobileNavbarOpen ? '100%' : 0,
        left: mobileNavbarOpen ? 0 : '50%',
      }, 0)
      .to(this.burger3, Navbar.ANIMATION_DURATION + offset, {
        y: mobileNavbarOpen ? 0 : -10,
        rotation: mobileNavbarOpen ? 0 : '-45deg',
      }, 0);

    this.navbarItems.forEach((navbarItem, i) => {
      tl.to(navbarItem, Navbar.ANIMATION_DURATION, {
        left: mobileNavbarOpen ? '100%' : 0,
        width: mobileNavbarOpen ? 0 : '100%',
      }, (i * (Navbar.ANIMATION_DURATION / 4)) + offset);
    });

    this.dropDownButtons.forEach((button, i) => {
      if (button) {
        tl.to(button, mobileNavbarOpen ? Navbar.ANIMATION_DURATION / 2 : Navbar.ANIMATION_DURATION, {
          opacity: mobileNavbarOpen ? 0 : 1,
        }, (mobileNavbarOpen ? 0 : Navbar.ANIMATION_DURATION + (i * (Navbar.ANIMATION_DURATION / 4))) + offset);
      }
    });

    this.setState({
      mobileNavbarOpen: !mobileNavbarOpen,
    });
  }

  _openDropdownOnClick = i => () => {
    const flagName = `dropdown${i}Open`;
    const dropdownOpen = this.state[flagName];

    const el = this.navbarDropdowns[i];
    const targetHeight = this.navbarDropdownHeights[i];
    const button = this.dropDownButtons[i];

    new TimelineLite()
      .to(el, Navbar.ANIMATION_DURATION, {
        height: dropdownOpen ? 0 : targetHeight,
      }, 0)
      .to(button, Navbar.ANIMATION_DURATION, {
        rotation: dropdownOpen ? 0 : '180deg',
      }, 0);

    this.setState({
      [flagName]: !dropdownOpen,
    });
  }

  _setZIndex = () => {
    const { mobileNavbarOpen } = this.state;
    if (!mobileNavbarOpen) {
      return 'styles.navbarMobileZClosed';
    }

    return 'styles.navbarMobileZOpen';
  }

  render() {
    // const { backgroundImg, headerText, subheaderText, showButton } = this.props;
    const { router } = this.context;
    const navZ = { zIndex: this._setZIndex() };

    return (
      <header className={styles.navbar}>
        <div className={styles.navbarContainer}>
          <div className={styles.logo}>
            <Link to="/"><img className="theLogo" src={landingLogo} alt="logo" /></Link>
          </div>
          <nav className={styles.navbarInner} ref={(el) => { this.navbar = el; }}>
            {LINKS.map(({ href, text, dropDown }, i) => (
              <div key={text} className={classNames([styles.navbarLinkContainer, navZ])} ref={(el) => { this.navbarItems = this.navbarItems || []; this.navbarItems[i] = el; }}>
                <Link key={text} to={href} className={(href === router.location.pathname) ? styles.active : ''}><p>{text}</p></Link>
                {dropDown &&
                  <button
                    className={styles.dropDownButton}
                    onClick={this._openDropdownOnClick(i)}
                    ref={(el) => { this.dropDownButtons = this.dropDownButtons || []; this.dropDownButtons[i] = el; }}
                  >
                  ↓
                  </button>
                }
                <div className={styles.dropDown} ref={(el) => { this.navbarDropdowns = this.navbarDropdowns || []; this.navbarDropdowns[i] = el; }}>
                  {dropDown && dropDown.map(({ dHref, dText }) => (
                    <Link key={dText} to={dHref}>{dText}</Link>
                  ))}
                </div>
              </div>
            ))}
          </nav>
          <div className={styles.registerButton}>
            <div className={styles.buttonContainer}>
              <Link onClick={logClick} to="/getinvolved"><p>Get Involved</p></Link>
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
