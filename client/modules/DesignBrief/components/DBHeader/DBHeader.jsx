import React from 'react';
import PropTypes from 'prop-types';

import globalStyles from 'main.scss';
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
        <h2>Introduction</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar, lorem sit amet pellentesque accumsan,
         massa nisl commodo dui, quis gravida enim eros ut enim. Sed rutrum ornare quam, nec suscipit nulla pulvinar
         sollicitudin. Aenean dignissim mi augue, id lobortis mauris scelerisque quis. Nam pellentesque et nulla eu egestas.
         Suspendisse elit ex, lobortis et pharetra facilisis, sagittis eget mi. Fusce lobortis, quam id sollicitudin imperdiet, felis sem viverra tellus,
         at porttitor elit enim quis diam. Ut pellentesque dui ac interdum dictum.
        Aenean malesuada, turpis ut porta tempor, urna lorem eleifend neque, vel porta ante ipsum sed nisl.</p>
        <div className={globalStyles.sectionBtn}>
          <a className={globalStyles.blueOutline} href="">Take the challenge</a>
        </div>
      </div>
    </section>
  );
}

DBHeader.propTypes = propTypes;
DBHeader.contextTypes = contextTypes;
DBHeader.defaultProps = defaultProps;

export default DBHeader;
