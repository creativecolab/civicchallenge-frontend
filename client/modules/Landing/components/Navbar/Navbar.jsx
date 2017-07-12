import React from 'react';
import PropTypes from 'prop-types';
import ReactGA from 'react-ga';
import { Link } from 'react-router';
import withWindowDimensions from 'util/withWindowDimensions';
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
  windowHeight: PropTypes.number.isRequired,
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

    // Set intiail state variable by directly assigning to this.state
    this.state = {
      navbarPost: false,
    };

    // Bind "this" in onWindowScroll to this (the component)
    this._onWindowScroll = this.onWindowScroll.bind(this);
    this._onNavbarItemClickGenerator = this.onNavbarItemClickGenerator.bind(this);
  }

  componentDidMount() {
    // Run _onWindowScroll once to set initial state
    this._onWindowScroll();
    // Add _onWindowScroll as an event listener
    window.addEventListener('scroll', this._onWindowScroll);
  }

  componentWillUnmount() {
    // Remove _onWindowScroll as an event listener
    window.removeEventListener('scroll', this._onWindowScroll);
  }

  onWindowScroll() {
    const { windowHeight } = this.props;
    const { navbarPost } = this.state;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Navbar should be a different color if scroll is past 1/10 of the page height
    const newNavbarPost = scrollTop > windowHeight / 10;

    // Only set state if there will be a visual difference
    if (navbarPost !== newNavbarPost) {
      // Change state using this.setState as opposed to setting this.state directly
      this.setState({
        navbarPost: newNavbarPost,
      });
    }
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
    const { navbarPost } = this.state;

    return (
      <div className={navbarPost ? `${styles.navbarContainer} ${styles.post}` : styles.navbarContainer}>
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

export default withWindowDimensions(withProvideRefs(Navbar));
