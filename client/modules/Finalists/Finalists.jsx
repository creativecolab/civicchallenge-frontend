import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import classNames from 'util/classNames';

import globalStyles from 'main.scss';

import Navbar from 'components/Navbar/Navbar';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';

import FinalistsGroup from './components/FinalistsGroup/FinalistsGroup';

import styles from './Finalists.scss';

/** images */
import finalistsBackground from './hands.jpg';

/**
 * Constants
 */

const sectionTitle = 'Finalists';

const gridTitle = 'The Finalists';

/**
 * Finalists
 */

const propTypes = {};

const contextTypes = {
  router: PropTypes.object,
};

const defaultProps = {};

function Finalists() {
  return (
    <section className={classNames([styles.finalists, globalStyles.contentWrapper])}>
      <Helmet
        title="Finalists"
      />
      <Navbar />
      <Header
        backgroundImg={finalistsBackground}
        headerText={sectionTitle}
        subheaderText=""
        showButton={false}
      />
      <div className={globalStyles.pageWrapper}>
        <h2 className={styles.finalistTitle}>{gridTitle}</h2>
        <FinalistsGroup
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

Finalists.propTypes = propTypes;
Finalists.contextTypes = contextTypes;
Finalists.defaultProps = defaultProps;

export default Finalists;
