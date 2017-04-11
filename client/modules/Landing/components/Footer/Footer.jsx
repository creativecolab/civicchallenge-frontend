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
        <div className={styles.name}>D4SD</div>
        <div className={styles.navigate}>
          <h4>Navigate</h4>
        </div>
        <div className={styles.affiliates}>
          <h4>Affiliates</h4>
          <nav>
            <a href="http://designlab.ucsd.edu/" target="_blank" rel="noopener noreferrer">UC San Diego Design Lab</a>
            <a href="http://protolab.ucsd.edu/" target="_blank" rel="noopener noreferrer">Protolab</a>
          </nav>
        </div>
        <div className={styles.copyright}>Please do not steal things, you have no rights.</div>
      </footer>
    );
  }
}

Footer.propTypes = {};

Footer.contextTypes = {
  router: PropTypes.object,
};

export default Footer;
