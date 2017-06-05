/* eslint-disable max-len */

import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';

import styles from './Challenges.scss';

/**
 * Challenges
 */

const propTypes = {};

const contextTypes = {
  router: PropTypes.object,
};

const defaultProps = {};

function Challenges() {
  return (
    <div className={styles.challenges}>
      <Helmet
        title="Challenges"
      />
      <Header
        backgroundImg={''}
        headerText={'Challenges'}
        subheaderText={''}
        showButton={false}
      />
      <Footer />
    </div>
  );
}

Challenges.propTypes = propTypes;
Challenges.contextTypes = contextTypes;
Challenges.defaultProps = defaultProps;

export default Challenges;
