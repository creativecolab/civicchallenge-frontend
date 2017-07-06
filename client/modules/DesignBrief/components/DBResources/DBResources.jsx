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
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar, lorem sit amet pellentesque accumsan,
            massa nisl commodo dui, quis gravida enim eros ut enim. Sed rutrum ornare quam, nec suscipit nulla pulvinar
            sollicitudin. Aenean dignissim mi augue, id lobortis mauris scelerisque quis. Nam pellentesque et nulla eu egestas.
            Suspendisse elit ex, lobortis et pharetra facilisis, sagittis eget mi. Fusce lobortis, quam id sollicitudin imperdiet,
            sem viverra tellus, at porttitor elit enim quis diam. Ut pellentesque dui ac interdum dictum.</p>
            <a href="">Link to Resource</a>
          </div>
        </div>
        <hr />
        <div className={styles.resourcesBox}>
          <div className={styles.resourceImg} />
          <div className={styles.resourceText}>
            <h6>Title of Resource</h6>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar, lorem sit amet pellentesque accumsan,
            massa nisl commodo dui, quis gravida enim eros ut enim. Sed rutrum ornare quam, nec suscipit nulla pulvinar
            sollicitudin. Aenean dignissim mi augue, id lobortis mauris scelerisque quis. Nam pellentesque et nulla eu egestas.
            Suspendisse elit ex, lobortis et pharetra facilisis, sagittis eget mi. Fusce lobortis, quam id sollicitudin imperdiet,
            sem viverra tellus, at porttitor elit enim quis diam. Ut pellentesque dui ac interdum dictum.</p>
            <a href="">Link to Resource</a>
          </div>
        </div>
        <hr />
        <div className={styles.resourcesBox}>
          <div className={styles.resourceImg} />
          <div className={styles.resourceText}>
            <h6>Title of Resource</h6>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar, lorem sit amet pellentesque accumsan,
            massa nisl commodo dui, quis gravida enim eros ut enim. Sed rutrum ornare quam, nec suscipit nulla pulvinar
            sollicitudin. Aenean dignissim mi augue, id lobortis mauris scelerisque quis. Nam pellentesque et nulla eu egestas.
            Suspendisse elit ex, lobortis et pharetra facilisis, sagittis eget mi. Fusce lobortis, quam id sollicitudin imperdiet,
            sem viverra tellus, at porttitor elit enim quis diam. Ut pellentesque dui ac interdum dictum.</p>
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
