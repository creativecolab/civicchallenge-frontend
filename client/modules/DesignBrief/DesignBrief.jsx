import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';

import DBHeader from './components/DBHeader/DBHeader';
import DBOverview from './components/DBOverview/DBOverview';
import DBDiscussion from './components/DBDiscussion/DBDiscussion';
import DBResources from './components/DBResources/DBResources';

import styles from './DesignBrief.scss';

/**
 * DesignBrief
 */


const propTypes = {};

const contextTypes = {
  router: PropTypes.object,
};

const defaultProps = {};

function DesignBrief() {
  return (
    <div className={styles.DesignBrief}>
      <Helmet
        title="Design Brief"
      />
      <Header
        backgroundImg={''}
        headerText={'Design Brief'}
        subheaderText={''}
        showButton={false}
      />
      <section className={styles.contentContainer}>

        <DBHeader />

        <Tabs>
          <TabList>
            <section className="briefNavBar">
              <Tab><h4>Overview</h4></Tab>
              <Tab><h4>Discussion</h4></Tab>
              <Tab><h4>Resources</h4></Tab>
            </section>
          </TabList>
          <hr />
          <TabPanel>
            <DBOverview />
          </TabPanel>
          <TabPanel>
            <DBDiscussion />
          </TabPanel>
          <TabPanel>
            <DBResources />
          </TabPanel>
        </Tabs>

      </section>

      <Footer />

    </div>
  );
}

DesignBrief.propTypes = propTypes;
DesignBrief.contextTypes = contextTypes;
DesignBrief.defaultProps = defaultProps;

export default DesignBrief;
