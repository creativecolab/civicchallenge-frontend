import React from 'react';
import PropTypes from 'prop-types';

import styles from './DBHeader.scss';

/**
 * dbHeader
 */

const propTypes = {};

const contextTypes = {
  router: PropTypes.object,
};

const defaultProps = {};

function dbHeader() {
  return (
    <section className={styles.dbHeader}>
      <div className={styles.dbHeaderText}>
        <h6>Design Brief</h6>
        <h1>Design Brief Title</h1>
        <p>The first of the month is coming, we have to get money, we have no choice.
        It cost money to eat and they don’t want you to eat. They key is to have every
        key, the key to open every door. You see the hedges, how I got it shaped up
        It’s important to shape up your hedges, it’s like getting a haircut, stay fresh.
        Look at the sunset, life is amazing, life is beautiful, life is what you make
        it. Bless up. I told you all this before, when you have a swimming pool, do
        not use chlorine, use salt water, the healing, salt water is the healing. The
        ladies always say Khaled you smell good, I use no cologne. Cocoa butter is the key.</p>
        <a className={styles.salmon} href="">Join the Discussion</a>
      </div>
      <div className={styles.dbHeaderImg} />
    </section>
  );
}

dbHeader.propTypes = propTypes;
dbHeader.contextTypes = contextTypes;
dbHeader.defaultProps = defaultProps;

export default dbHeader;
