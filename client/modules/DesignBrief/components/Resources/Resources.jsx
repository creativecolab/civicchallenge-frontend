import React from 'react';
import PropTypes from 'prop-types';

import DBResources from './components/DBResources/DBResources';

import styles from './Resources.scss';

/**
 * Resources
 */

const propTypes = {
  external: PropTypes.array.isRequired,
};

const contextTypes = {
  router: PropTypes.object,
};

const defaultProps = {};

function Resources({ external }) {
  return (
    <div className={styles.resources}>
      <h2>Learning Resources</h2>
      <div className={styles.resourcesContainer}>
        <div className={styles.externalResources}>
          <h3>External Resources</h3>
          {external.map(({ resourceTitle, description }) => (
            <div className={styles.resourcesComponentWrapper}>
              <DBResources
                resourceTitle={resourceTitle}
                description={description}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

Resources.propTypes = propTypes;
Resources.contextTypes = contextTypes;
Resources.defaultProps = defaultProps;

export default Resources;
