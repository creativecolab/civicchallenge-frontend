import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { Link } from 'react-router';

import styles from './Landing.scss';

import Intro from './components/Intro/Intro';
import Header from './components/Header/Header';
import Timeline from './components/Timeline/Timeline';
import Theme from './components/Theme/Theme';
import Footer from './components/Footer/Footer';

/**
 * Landing
 */

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = { isMounted: false };
  }

  componentDidMount() {
    this.setState({ isMounted: true });
  }

  render() {
    return (
      <div className={styles.landing}>
        <Helmet
          title="Landing"
        />
        <Header />
        <Intro />
        <Timeline />
        <Theme />
        <div className={styles.buttonContainer}>
          <Link to="/placeholder">Button to get involved</Link>
        </div>
        <Footer />
      </div>
    );
  }
}

function mapStateToProps() {
  return {};
}

Landing.propTypes = {};

Landing.contextTypes = {
  router: PropTypes.object,
};

export default connect(mapStateToProps)(Landing);
