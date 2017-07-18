import React from 'react';
import PropTypes from 'prop-types';

import styles from './DBBox.scss';


/**
 * DBBox
 */

const propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
};

const contextTypes = {
  router: PropTypes.object,
};

const defaultProps = {};

function DBBox({ title, desc, thumbnail }) {
  return (
    <section className={styles.sectionWrapper}>
      <section className={styles.DBBox}>
        <div className={styles.dbBoxImg}>
          <div className={styles.blackBox} />
          <span>{title}</span>
          <img src={thumbnail} alt={title} />
        </div>
        <div className={styles.dbBoxText} >
          <p>{desc}</p>
        </div>
      </section>
    </section>
  );
}

DBBox.propTypes = propTypes;
DBBox.contextTypes = contextTypes;
DBBox.defaultProps = defaultProps;

export default DBBox;
