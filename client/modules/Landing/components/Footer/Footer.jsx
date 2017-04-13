import React, { Component, PropTypes } from 'react';

import styles from './Footer.scss';

/**
 * Footer
 */

const START_YEAR = 2017;

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = { isMounted: false };
  }

  componentDidMount() {
    this.setState({ isMounted: true });
  }

  render() {
    const currentYear = (new Date()).getFullYear();
    const copyrightYear = START_YEAR === currentYear ? currentYear : `${START_YEAR}-${currentYear}`;

    return (
      <footer className={styles.footer} ref={(element) => { this.rootElement = element; }}>
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
        <div className={styles.copyright}>Copyright &copy; {copyrightYear}{/* Group Name */}. All Rights Reserved. This website is under construction and subject to change.</div>
      </footer>
    );
  }
}

Footer.propTypes = {};

Footer.contextTypes = {
  router: PropTypes.object,
};

export default Footer;
