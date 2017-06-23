/* eslint-disable max-len */

import React from 'react';
import PropTypes from 'prop-types';
import { withCollectRef } from 'util/RefCollector';

import styles from './Sponsors.scss';


/**
 * Sponsors
 */

const propTypes = {
  componentRef: PropTypes.func.isRequired,
};

const contextTypes = {
  router: PropTypes.object,
};

const defaultProps = {};

function Sponsors(props) {
  return (
    <section id={styles.sponsors} ref={props.componentRef}>
      <div id={styles.sponsorWrapper}>
        <p>TODO</p>
      </div>
    </section>
  );
}

Sponsors.propTypes = propTypes;
Sponsors.contextTypes = contextTypes;
Sponsors.defaultProps = defaultProps;

export default withCollectRef('Sponsors')(Sponsors);
