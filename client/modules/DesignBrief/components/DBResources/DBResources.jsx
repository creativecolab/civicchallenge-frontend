import React from 'react';
import PropTypes from 'prop-types';

import styles from './DBResources.scss';

/**
 * DBResources
 */

const propTypes = {};

const contextTypes = {
  router: PropTypes.object,
};

const defaultProps = {};

function DBResources() {
  return (
    <div className={styles.resources}>
      <h3>Resources</h3>
      <div className={styles.resourcesContainer}>
        <div className={styles.resourcesBox}>
          <div className={styles.resourceImg} />
          <div className={styles.resourceText}>
            <h6>Title of Resource</h6>
            <p>To succeed you must believe. When you believe, you will succeed. Bless up.
            Congratulations, you played yourself. You smart, you loyal, you a genius. They
            never said winning was easy. Some people can’t handle success, I can. Lion!
            The key is to enjoy life, because they don’t want you to enjoy life.</p>
            <a href="">Link to Resource</a>
          </div>
        </div>
        <hr />
        <div className={styles.resourcesBox}>
          <div className={styles.resourceImg} />
          <div className={styles.resourceText}>
            <h6>Title of Resource</h6>
            <p>To succeed you must believe. When you believe, you will succeed. Bless up.
            Congratulations, you played yourself. You smart, you loyal, you a genius. They
            never said winning was easy. Some people can’t handle success, I can. Lion!
            The key is to enjoy life, because they don’t want you to enjoy life.</p>
            <a href="">Link to Resource</a>
          </div>
        </div>
        <hr />
        <div className={styles.resourcesBox}>
          <div className={styles.resourceImg} />
          <div className={styles.resourceText}>
            <h6>Title of Resource</h6>
            <p>To succeed you must believe. When you believe, you will succeed. Bless up.
            Congratulations, you played yourself. You smart, you loyal, you a genius. They
            never said winning was easy. Some people can’t handle success, I can. Lion!
            The key is to enjoy life, because they don’t want you to enjoy life.</p>
            <a href="">Link to Resource</a>
          </div>
        </div>
      </div>
    </div>
  );
}

DBResources.propTypes = propTypes;
DBResources.contextTypes = contextTypes;
DBResources.defaultProps = defaultProps;

export default DBResources;
