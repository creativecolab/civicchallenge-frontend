import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';

import styles from './Landing.scss';

import Header from './components/Header/Header';
import Process from './components/Process/Process';
import Theme from './components/Theme/Theme';
import Sponsors from './components/Sponsors/Sponsors';
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
    const scrollElements = {};
    const refHandler = key => (el) => {
      if (el) {
        scrollElements[key] = el.rootElement;
      }
    };

    return (
      <div className={styles.landing}>
        <Helmet
          title="Landing"
        />
        <Header scrollElements={scrollElements} />
        <Process ref={refHandler('process')} />
        <Theme ref={refHandler('theme')} />
        <Sponsors ref={refHandler('sponsors')} />
        <Footer ref={refHandler('footer')} />
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
