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
      <div className={styles.headerWrapper}>
        <div
          className={styles.background}
        />
        <div className={styles.textContainer}>
          <div className={styles.text}>
            {subheaderText && <h3 className={styles.description}>{subheaderText}</h3>}
            {headerText && <h1>{headerText}</h1>}
            {showButton && <div className={styles.buttonContainer}>
              <a href="mailto:design4sandiego@gmail.com">Get Involved</a>
            </div>}
          </div>
        </div>
        {backgroundImg && <img src={backgroundImg} alt="Background" />}
      </div>
    </header>
  );
}

Header.propTypes = propTypes;
Header.contextTypes = contextTypes;
Header.defaultProps = defaultProps;

export default Header;
