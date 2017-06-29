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
            resourceName="Resource Name"
            resourceText="Lorem Khaled Ipsum is a major key to success. Wraith talk. Mogul talk. In life you have to take the trash out, if you have trash in your life."
          />
          <ResourceBox
            resourceName="Challenge FAQ"
            resourceText="Lorem Khaled Ipsum is a major key to success. Wraith talk. Mogul talk. In life you have to take the trash out, if you have trash in your life."
          />
          <ResourceBox
            resourceName="Slack FAQ"
            resourceText="Lorem Khaled Ipsum is a major key to success. Wraith talk. Mogul talk. In life you have to take the trash out, if you have trash in your life."
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
