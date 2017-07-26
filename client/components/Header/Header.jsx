import React from 'react';
import PropTypes from 'prop-types';

import Navbar from 'components/Navbar/Navbar';

import styles from './Header.scss';

/**
 * Constants
 */

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

function Header({ backgroundImg, headerText, subheaderText, showButton }) {
  return (
    <header className={styles.header}>
      <Navbar />
      <div
        className={styles.background}
      />
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
