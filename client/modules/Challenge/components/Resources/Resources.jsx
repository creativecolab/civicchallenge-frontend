/* eslint-disable max-len */

import React from 'react';
import PropTypes from 'prop-types';

import styles from './Resources.scss';

/**
 * Resource
 */
function Resource({ name, url }) {
  return (
    <a href={url} rel="noopener noreferrer" target="_blank" className={styles.resource}>
      {name}
    </a>
  );
}

Resource.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

Resource.contextTypes = {
  router: PropTypes.object,
};

Resource.defaultProps = {};

/**
 * Resources
 */
function Resources({ resources }) {
  return (
    <div className={styles.resources}>
      {resources.map(resource => (
        <Resource key={resource.id} {...resource} />
      ))}
    </div>
  );
}

Resources.propTypes = {
  resources: PropTypes.arrayOf(PropTypes.object),
};

Resource.contextTypes = {
  router: PropTypes.object,
};

Resources.defaultProps = {
  resources: [],
};

export default Resources;
