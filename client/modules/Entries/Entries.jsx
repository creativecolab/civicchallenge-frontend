import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import classNames from 'util/classNames';

import globalStyles from 'main.scss';

import Navbar from 'components/Navbar/Navbar';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';

import EntriesGroup from './components/EntriesGroup/EntriesGroup';
import FinalistsGroup from './components/FinalistsGroup/FinalistsGroup';


import styles from './Entries.scss';

/** images */
import entriesBackground from './hands.jpg';

/**
 * Constants
 */

const sectionTitle = 'Entries';

// const gridTitle = 'The Entries';

/**
 * Entries
 */

const propTypes = {};

const contextTypes = {
  router: PropTypes.object,
};

const defaultProps = {};

function Entries() {
  return (
    <section className={classNames([styles.entries, globalStyles.contentWrapper])}>
      <Helmet
        title="Entries"
      />
      <Navbar />
      <Header
        backgroundImg={entriesBackground}
        headerText={sectionTitle}
        subheaderText=""
        showButton={false}
      />
      <div className={globalStyles.pageWrapper}>
        {/* <h2 className={styles.finalistTitle}>{gridTitle}</h2> */}

        <FinalistsGroup
          title=""
          text=""
          figureA=""
          figureALink=""
        />

        <EntriesGroup
          title=""
          text=""
          figureA=""
          figureALink=""
        />

      </div>
      <Footer />
    </section>
  );
}

Entries.propTypes = propTypes;
Entries.contextTypes = contextTypes;
Entries.defaultProps = defaultProps;

export default Entries;
