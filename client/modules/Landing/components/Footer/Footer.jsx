import React, { Component, PropTypes } from 'react';

import styles from './Footer.scss';

/**
 * Footer
 */

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = { isMounted: false };
  }

  componentDidMount() {
    this.setState({ isMounted: true });
  }

  render() {
    return (
      <footer className={styles.footer}>
        I be the footer
      </footer>
    );
  }
}

Footer.propTypes = {};

Footer.contextTypes = {
  router: PropTypes.object,
};

export default Footer;
