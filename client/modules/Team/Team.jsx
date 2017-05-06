/* eslint-disable max-len */

import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import TeamComponent from './components/Team/Team';

import styles from './Team.scss';

/**
 * Team
 */

const propTypes = {};

const contextTypes = {
  router: PropTypes.object,
};

const defaultProps = {};

function Team() {
  return (
    <div className={styles.team}>
      <Helmet
        title="Team"
      />
      <Header
        backgroundImg={''}
        headerText={'Team'}
        subheaderText={''}
        showButton={false}
      />
      <TeamComponent />
      <Footer />
    </div>
  );
}

Team.propTypes = propTypes;
Team.contextTypes = contextTypes;
Team.defaultProps = defaultProps;

export default Team;
