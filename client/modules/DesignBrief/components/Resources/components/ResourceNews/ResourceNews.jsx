import React from 'react';
import PropTypes from 'prop-types';

import styles from './ResourceNews.scss';

/**
 * ResourceNews
 */

const propTypes = {
  headline: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

const contextTypes = {
  router: PropTypes.object,
};

const defaultProps = {};

function ResourceNews({ headline, description }) {
  return (
    <div className={styles.resourceNews}>
      <h3>{headline}</h3>
      <p>{description}</p>
    </div>
  );
}

ResourceNews.propTypes = propTypes;
ResourceNews.contextTypes = contextTypes;
ResourceNews.defaultProps = defaultProps;

export default ResourceNews;
