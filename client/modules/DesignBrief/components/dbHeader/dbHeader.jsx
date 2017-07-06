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
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar, lorem sit amet pellentesque accumsan,
         massa nisl commodo dui, quis gravida enim eros ut enim. Sed rutrum ornare quam, nec suscipit nulla pulvinar sollicitudin. Aenean dignissim mi augue, id lobortis mauris scelerisque quis. Nam pellentesque et nulla eu egestas. Suspendisse elit ex, lobortis et pharetra facilisis, sagittis eget mi. Fusce lobortis, quam id sollicitudin imperdiet, felis sem viverra tellus, at porttitor elit enim quis diam. Ut pellentesque dui ac interdum dictum.
        Aenean malesuada, turpis ut porta tempor, urna lorem eleifend neque, vel porta ante ipsum sed nisl.</p>
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
