import React from 'react';
import PropTypes from 'prop-types';

import DBResources from './components/DBResources/DBResources';
import ResourceNews from './components/ResourceNews/ResourceNews';

import styles from './Resources.scss';

/**
 * Resources
 */

const propTypes = {
  title: PropTypes.string.isRequired,
  external: PropTypes.array.isRequired,
  news: PropTypes.array.isRequired,
};

const contextTypes = {
  router: PropTypes.object,
};

const defaultProps = {};

function Resources({ title, external, news }) {
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

        <div className={styles.externalResources}>
          <h3>News about {title}</h3>
          {news.map(({ headline, date }) => (
            <div className={styles.resourcesComponentWrapper}>
              <ResourceNews
                headline={headline}
                date={date}
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
