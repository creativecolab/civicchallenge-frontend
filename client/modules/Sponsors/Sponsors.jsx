import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import Helmet from 'react-helmet';

import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';

import styles from './Sponsors.scss';

import ChallengeText from './components/ChallengeText/ChallengeText';
import CurrentSponsors from './components/CurrentSponsors/CurrentSponsors';

import headerBg from './header-bg.png';

/**
 * Sponsors
 */

class Sponsors extends Component {
  constructor(props) {
    super(props);
    this.state = { isMounted: false };
  }

  componentDidMount() {
    this.setState({ isMounted: true });
  }

  render() {
    return (
      <div className={styles.sponsors}>
        <Helmet
          title="Sponsors"
        />
        <Header
          links={[]}
          backgroundImg={headerBg}
          headerText={'Sponsors'}
          subheaderText={''}
          showButton={false}
        />
        <ChallengeText />
        <CurrentSponsors />
        <br />
        <Link to="/">Back to homepage</Link>
        <Footer />
      </div>
    );
  }
}

function mapStateToProps() {
  return {};
}

Sponsors.propTypes = {};

Sponsors.contextTypes = {
  router: PropTypes.object,
};

export default connect(mapStateToProps)(Sponsors);
