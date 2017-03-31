import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';

import styles from './Landing.scss';

import Header from './components/Header/Header';
import Timeline from './components/Timeline/Timeline';

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
      <div className={styles.container}>
        <Helmet
          title="Landing"
        />
        <Header />
        <Timeline />
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
