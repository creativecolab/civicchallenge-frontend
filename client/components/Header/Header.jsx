import React from 'react';
import PropTypes from 'prop-types';
import { Parallax, Background } from 'react-parallax';

/* import Navbar from 'components/Navbar/Navbar'; */

import globalStyles from 'main.scss';
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
};

const contextTypes = {
  router: PropTypes.object,
};

const defaultProps = {};

function Header({ backgroundImg, headerText, subheaderText }) {
  return (
    <Parallax strength={400} className={styles.setZIndex}>
      <Background>
        <img className={styles.headerImage} src={backgroundImg} alt="header" />
        <div
          style={{
            width: 1440,
            height: 300,
            backgroundColor: '#4496FF',
          }}
        />
      </Background>
      <header className={styles.header}>
        <div className={styles.headerWrapper}>
          <div className={styles.layer} />
          <div className={globalStyles.contentWrapper}>
            <div className={styles.textContainer}>
              <div className={styles.text}>
                {subheaderText && <h3 className={globalStyles.white}>{subheaderText}</h3>}
                {headerText && <h1 className={globalStyles.white}>{headerText}</h1>}
              </div>
            </div>
          </div>
        </div>
      </header>
    </Parallax>
  );
}

Header.propTypes = propTypes;
Header.contextTypes = contextTypes;
Header.defaultProps = defaultProps;

export default Header;
