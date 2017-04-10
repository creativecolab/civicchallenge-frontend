import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';

import styles from './Landing.scss';

import Header from './components/Header/Header';
import Intro from './components/Intro/Intro';
import Process from './components/Process/Process';
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
        <Process />
        <Theme />
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
