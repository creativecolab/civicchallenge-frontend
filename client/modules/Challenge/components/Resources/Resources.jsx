/* eslint-disable max-len */

import React from 'react';
import PropTypes from 'prop-types';

/**
 * Resource
 */
function Resource({ name, url }) {
  return (
    <a href={url}>{name}</a>
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
    <div>
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
