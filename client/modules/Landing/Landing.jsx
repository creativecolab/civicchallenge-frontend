/* eslint-disable max-len */

import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';

import styles from './Landing.scss';

import ChallengeText from './components/ChallengeText/ChallengeText';
import Process from './components/Process/Process';
import ChallengeGrid from './components/ChallengeGrid/ChallengeGrid';
import Sponsors from './components/Sponsors/Sponsors';

import headerBg from './header-bg.png';

/**
 * Landing
 */

class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isMounted: false };
  }

  componentDidMount() {
    this.setState({ isMounted: true });
  }

  render() {
    const links = [
      {
        href: '/sponsors',
        text: 'Sponsors',
      },
    ];

    return (
      <div className={styles.landing}>
        <Helmet
          title="Landing"
        />
        <Header
          links={links}
          backgroundImg={headerBg}
          headerText={'Design for the Future of San Diego'}
          subheaderText={'D4SD aims to engage San Diegans in the process of solving complex civic challenges using human-centered design and crowdsourcing. Our goal is to create opportunities for government, academia, and industry to collaboratively design innovative civic solutions.'}
          showButton
        />
        <ChallengeText />
        <Process />
        <ChallengeGrid />
        <Sponsors />
        <Footer />
      </div>
    );
  }
}

Landing.propTypes = {};

Landing.contextTypes = {
  router: PropTypes.object,
};

export default Landing;
