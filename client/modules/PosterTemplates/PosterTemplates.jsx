/* eslint-disable max-len, react/no-danger */

import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Navbar from 'components/Navbar/Navbar';
import Footer from 'components/Footer/Footer';

import StandardSectionBox from 'components/StandardSectionBox/StandardSectionBox';
import globalStyles from 'main.scss';

import styles from './PosterTemplates.scss';

import posterTemplate from './D4SD-poster-template.png';
import posterExample from './D4SD-poster-example.png';

/**
 * PosterTemplates
 */

const sectionTitle = 'Poster Template and Example';
const description = '';

const propTypes = {};

const contextTypes = {
  router: PropTypes.object,
};

const defaultProps = {};

function PosterTemplates() {
  return (
    <section className={styles.posterTemplates}>
      <Helmet
        title="Poster Template"
      />
      <Navbar />

      <div className={globalStyles.pageWrapper}>
        <StandardSectionBox
          sectionTitle={sectionTitle}
          text={description}
        />

        <div className={globalStyles.contentContainer}>
          <img src={posterTemplate} alt="poster template" />
          <img src={posterExample} alt="poster exmaple" />
        </div>

      </div>

      <Footer />
    </section>
  );
}

PosterTemplates.propTypes = propTypes;
PosterTemplates.contextTypes = contextTypes;
PosterTemplates.defaultProps = defaultProps;

export default PosterTemplates;
