/* eslint-disable max-len */

import React from 'react';
import PropTypes from 'prop-types';

import styles from './CurrentSponsors.scss';

import intel from './intel.png';
import cisco from './cisco.png';
import xfinity from './xfinity.png';


class SponsorGrid extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isMounted: false };
  }

  componentDidMount() {
    this.setState({ isMounted: true });
  }

  render() {
    return (
      <div>
        <div className={styles.current}>
          <h3> Current Sponsors </h3>
        </div>
        <div className={styles.sponsors}>
          <img src={intel} alt="intel" className={styles.sponsorImage} />
          <img src={cisco} alt="cisco" className={styles.sponsorImage} />
          <img src={xfinity} alt="xfinity" className={styles.sponsorImage} />
        </div>
      </div>
    );
  }
}

SponsorGrid.propTypes = {};

SponsorGrid.contextTypes = {
  router: PropTypes.object,
};

export default SponsorGrid;
