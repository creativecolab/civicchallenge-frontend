import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import RewardTypes from './components/RewardTypes/RewardTypes';

import styles from './Rewards.scss';

/**
 * Placeholder
 */

const propTypes = {};

const contextTypes = {
  router: PropTypes.object,
};

const defaultProps = {};

function Rewards() {
  return (
    <div className={styles.rewards}>
      <Helmet
        title="Rewards"
      />
      <Header
        backgroundImg={''}
        headerText={'Rewards'}
        subheaderText={''}
        showButton={false}
      />


      <section className={styles.content}>
        <div className={styles.titleText}>
          <p>We are currently working with our sponsors to identify several prizes for D4SD participants. Check back soon for more details!</p>
          <br />
          <h3>Types of Rewards</h3>
          <RewardTypes />
        </div>
      </section>
      <Footer />
    </div>
  );
}

Rewards.propTypes = propTypes;
Rewards.contextTypes = contextTypes;
Rewards.defaultProps = defaultProps;

export default Rewards;
