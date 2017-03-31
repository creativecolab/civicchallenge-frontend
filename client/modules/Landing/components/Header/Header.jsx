import React, { Component, PropTypes } from 'react';

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
    return (
      <header className={styles.header}>
        <img
          src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
          alt="Background"
          className={styles.background}
        />
        <div className={styles.text}>
          <h1>Design San Diego</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Nam eos, excepturi alias vitae iusto illo fugit voluptatibus,
            at magni hic repudiandae esse ad, inventore rerum sed porro? Libero, quam, officia.
          </p>
        </div>
      </header>
    );
  }
}

Header.propTypes = {};

Header.contextTypes = {
  router: PropTypes.object,
};

export default Header;
