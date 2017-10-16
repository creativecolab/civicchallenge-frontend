import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import classNames from 'util/classNames';

import globalStyles from 'main.scss';

import Navbar from 'components/Navbar/Navbar';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';

import JurorHeader from './components/JurorHeader/JurorHeader';
import JurorTeam from './components/JurorTeam/JurorTeam';

import styles from './Jurors.scss';

/** images */
import jurorsBackground from './jurors-background.png';

/**
 * Constants
 */

const sectionTitle = 'Judging';

const prizeSectionTitle = 'Prizes';
const prizeText = 'Entries judged to have the most potential will be awarded in cash prizes and exclusive networking opportunities.';


/**
 * Jurors
 */

const propTypes = {};

const contextTypes = {
  router: PropTypes.object,
};

const defaultProps = {};

function Jurors() {
  return (
    <section className={classNames([styles.jurors, globalStyles.contentWrapper])}>
      <Helmet
        title="Judging"
      />
      <Navbar />
      <Header
        backgroundImg={jurorsBackground}
        headerText={sectionTitle}
        subheaderText=""
        showButton={false}
      />
      <div className={globalStyles.pageWrapper}>
        <JurorHeader />
        <JurorTeam
          title=""
          text=""
          figureA=""
          figureALink=""
        />
        <section className={styles.prizes}>
          <h2>{prizeSectionTitle}</h2>
          <p>{prizeText}</p>
        </section>
      </div>
      <Footer />
    </section>
  );
}

Jurors.propTypes = propTypes;
Jurors.contextTypes = contextTypes;
Jurors.defaultProps = defaultProps;

export default Jurors;
