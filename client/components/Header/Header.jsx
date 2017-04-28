import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

import styles from './Header.scss';

/**
 * Header
 */

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { isMounted: false };
  }

  componentDidMount() {
    this.setState({ isMounted: true });
  }

  render() {
    const { links, backgroundImg, headerText, subheaderText, showButton } = this.props;

    return (
      <header className={styles.header}>
        <div
          className={styles.background}
        />
        <div className={styles.navbarContainer}>
          <div className={styles.logo}>
            <Link to="/">D4SD</Link>
          </div>
          <nav className={styles.navbar}>
            {links.map(({ href, text }) => {
              return (
                <Link key={text} to={href}>{text}</Link>
              );
            })}
          </nav>
        </div>
        <div className={styles.textContainer}>
          <section className={styles.text}>
            {headerText && <h1>{headerText}</h1>}
            {subheaderText && <p className={styles.description}>{subheaderText}</p>}
            {showButton && <div className={styles.buttonContainer}>
              <a href="mailto:design4sandiego@gmail.com">Get Involved</a>
            </div>}
          </section>
        </div>
        <img src={backgroundImg} alt="Background" />
      </header>
    );
  }
}

Header.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    })
  ).isRequired,
  backgroundImg: PropTypes.string.isRequired,
  headerText: PropTypes.string.isRequired,
  subheaderText: PropTypes.string.isRequired,
  showButton: PropTypes.bool.isRequired,
};

Header.contextTypes = {
  router: PropTypes.object,
};

export default Header;
