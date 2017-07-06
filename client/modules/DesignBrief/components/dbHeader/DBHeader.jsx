import React from 'react';
import PropTypes from 'prop-types';

import styles from './DBHeader.scss';

/**
 * DBHeader
 */

const propTypes = {};

const contextTypes = {
  router: PropTypes.object,
};

const defaultProps = {};

function DBHeader() {
  return (
    <section className={styles.DBHeader}>
      <div className={styles.DBHeaderText}>
        <h6>Design Brief</h6>
        <h1>Accessibility</h1>
        <p>People with disabilities face completely unique challenges when getting around the city.
        The lack of convenient, accessible, and affordable mobility for disabled people is a major
        problem in San Diego - how can we realistically (re)build a community that support diverse
        disabilities?</p>
        <a className={styles.salmon} href="">Join the Discussion</a>
      </div>
      <div className={styles.DBHeaderImg} />
    </section>
  );
}

DBHeader.propTypes = propTypes;
DBHeader.contextTypes = contextTypes;
DBHeader.defaultProps = defaultProps;

export default DBHeader;
