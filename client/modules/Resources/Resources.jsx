import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';

import ResourceBox from './components/ResourceBox/ResourceBox';

import styles from './Resources.scss';

/**
 * Resources
 */

const propTypes = {};

const contextTypes = {
  router: PropTypes.object,
};

const defaultProps = {};

function Resources() {
  return (
    <div className={styles.resources}>
      <Helmet
        title="Resources"
      />
      <Header
        backgroundImg={''}
        headerText={'Resources'}
        subheaderText={''}
        showButton={false}
      />

      <section className={styles.content}>
        <div className={styles.boxRow}>
          <ResourceBox
            resourceName="The Process"
            resourceText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas mattis posuere purus nec fringilla. Nullam a gravida quam."
            resourceLink=""
          />
          <ResourceBox
            resourceName="Challenge FAQ"
            resourceText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas mattis posuere purus nec fringilla. Nullam a gravida quam"
            resourceLink="/faq"
          />
          <ResourceBox
            resourceName="Slack FAQ"
            resourceText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas mattis posuere purus nec fringilla. Nullam a gravida quam"
            resourceLink="/faq"
          />
        </div>
      </section>
      <Footer />
    </div>
  );
}

Resources.propTypes = propTypes;
Resources.contextTypes = contextTypes;
Resources.defaultProps = defaultProps;

export default Resources;
