import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

import styles from './Navbar.scss';

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

const LINKS = [];


/**
 * Navbar
 */

const propTypes = {};

const contextTypes = {
  router: PropTypes.object,
};

const defaultProps = {};

function Navbar(props, { router }) {
  return (
    <div className={styles.navbarContainer}>
      <div className={styles.logo}>
        <Link to="/">D4SD</Link>
      </div>
      <nav className={styles.navbar}>
        {LINKS.filter(({ href }) => href !== router.location.pathname).map(({ href, text }) =>
          <Link key={text} to={href}>{text}</Link>
        )}
      </nav>
    </div>
  );
}

Navbar.propTypes = propTypes;
Navbar.contextTypes = contextTypes;
Navbar.defaultProps = defaultProps;

export default Navbar;
