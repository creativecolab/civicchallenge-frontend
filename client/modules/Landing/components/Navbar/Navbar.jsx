import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { withProvideRefs } from 'util/RefCollector';

import styles from './Navbar.scss';

let TweenLite = {};
if (process.env.browser) {
  TweenLite = require('gsap/TweenLite'); // eslint-disable-line global-require
  require('gsap/ScrollToPlugin'); // eslint-disable-line global-require
}

/**
 * Constants
 */

/*
const LINKS = [
  {
    href: '/sponsors',
    text: 'Sponsors',
  },
  {
    href: '/team',
    text: 'Team',
  },
];
*/

const NAVBAR_ITEMS = [
  {
    name: 'Challenges',
    key: 'ChallengeText',
  },
  {
    name: 'About',
    key: 'About',
  },
  {
    name: 'Sponsors',
    key: 'Sponsors',
  },
];

const LINKS = [];

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
          <Link to="/">D4SD</Link>
        </div>
        <nav className={styles.navbar}>
          {LINKS.filter(({ href }) => href !== router.location.pathname).map(({ href, text }) =>
            <Link key={text} to={href}>{text}</Link>
          )}
          {NAVBAR_ITEMS.map(({ name, key }) => (
            <button
              key={key}
              onClick={this._onNavbarItemClickGenerator(key)}
            >
              {name}
            </button>
          ))}
        </nav>
      </div>
    );
  }
}

Navbar.propTypes = propTypes;
Navbar.contextTypes = contextTypes;
Navbar.defaultProps = defaultProps;

export default withProvideRefs(Navbar);
