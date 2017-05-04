/* eslint-disable max-len */

import React from 'react';
import PropTypes from 'prop-types';

import styles from './Sponsors.scss';

/**
 * Sponsors
 */

const propTypes = {};

const contextTypes = {
  router: PropTypes.object,
};

const defaultProps = {};

function Sponsors() {
  return (
    <section className={styles.sponsors}>
      <h3>Sponsors</h3>
      <p className={styles.placeholder}>We are currently putting together our sponsorship model. If you would like to be part of this initiative, please reach out to <a href="mailto:design4sandiego@gmail.com">design4sandiego@gmail.com</a>.</p>
    </section>
  );
}

Sponsors.propTypes = propTypes;
Sponsors.contextTypes = contextTypes;
Sponsors.defaultProps = defaultProps;

export default Sponsors;
