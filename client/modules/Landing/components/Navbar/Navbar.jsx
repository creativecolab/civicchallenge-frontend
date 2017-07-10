import React from 'react';
import PropTypes from 'prop-types';
import ReactGA from 'react-ga';
import { Link } from 'react-router';
import { withProvideRefs } from 'util/RefCollector';

import styles from './Navbar.scss';

import d4sdLogo from './logo_white.png';

let TweenLite = {};
if (process.env.browser) {
  TweenLite = require('gsap/TweenLite'); // eslint-disable-line global-require
  require('gsap/ScrollToPlugin'); // eslint-disable-line global-require
}

/**
 * Constants
 */

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

const SCROLL_PX_PER_MS = 1000;


/**
 * Navbar
 */

const propTypes = {
  refs: PropTypes.object.isRequired,
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

class Navbar extends React.Component {
  constructor(props) {
    super(props);

    this._onNavbarItemClickGenerator = this.onNavbarItemClickGenerator.bind(this);
  }

  onNavbarItemClickGenerator(key) {
    return () => {
      const { refs } = this.props;
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      const element = refs[key];

      if (element) {
        const scrollTarget = element.offsetTop;
        const scrollDuration = Math.abs(scrollTop - scrollTarget) / SCROLL_PX_PER_MS;

        TweenLite.to(window, scrollDuration, { scrollTo: scrollTarget });
      }
    };
  }

  render() {
    const { router } = this.context;
    return (
      <div className={styles.navbarContainer}>
        <div className={styles.logo}>
          <Link to="/"><img className="theLogo" src={d4sdLogo} alt="logo" /></Link>
        </div>
        <nav className={styles.navbar}>
          {LINKS.filter(({ href }) => href !== router.location.pathname).map(({ href, text }) =>
            <Link key={text} to={href}>{text}</Link>
          )}
          <div className={styles.registerButton}>
            <div className={styles.buttonContainer}>
              <a onClick={logClick} href="https://docs.google.com/forms/d/e/1FAIpQLSe-DzyjLGgLHdXkc8Fj7yGJrxm-PJ2Gr_LABKGeQDH699O6Hw/viewform?usp=sf_link" rel="noopener noreferrer" target="_blank">Register</a>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

Navbar.propTypes = propTypes;
Navbar.contextTypes = contextTypes;
Navbar.defaultProps = defaultProps;

export default withProvideRefs(Navbar);
