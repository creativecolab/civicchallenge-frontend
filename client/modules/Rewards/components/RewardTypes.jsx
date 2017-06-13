import React from 'react';
import PropTypes from 'prop-types';

import styles from './RewardTypes.scss';

import cash from './cash.png';
import inkind from './inkind.png';

/**
 * Info
 */

const propTypes = {};

const contextTypes = {
  router: PropTypes.object,
};

const defaultProps = {};

function RewardTypes() {
  return (
    <div className={styles.rewardTypes}>

      <div className={styles.type}>
        <div className={styles.icon}>
          <img src={cash} alt="cash" />
        </div>
        <h4>CASH</h4>
        <p>Monetary prizes of varying amounts will be available.</p>
      </div>

      <div className={styles.type}>
        <div className={styles.icon}>
          <img src={inkind} alt="in-kind" />
        </div>
        <h4>IN-KIND</h4>
        <p>Introductions to esteemed professionals, access to labs, and additional networking services will also be awarded.</p>
      </div>

    </div>
  );
}

RewardTypes.propTypes = propTypes;
RewardTypes.contextTypes = contextTypes;
RewardTypes.defaultProps = defaultProps;

export default RewardTypes;
