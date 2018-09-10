/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
/* import classNames from 'util/classNames'; */

import Navbar from 'components/Navbar/Navbar';
import Footer from 'components/Footer/Footer';
import StandardSectionBox from 'components/StandardSectionBox/StandardSectionBox';

import globalStyles from 'main.scss';

import News from '../News/News';

import styles from './Press.scss';

/**
 * Constants
 */

const sectionTitle = 'Press';
const titleDescription = 'This page provides a wealth of press to help you learn methods for human-centered design, find about the latest technology related to mobility, and get answers to your frequently asked questions.';

/**
 * Press
 */

const propTypes = {};

const contextTypes = {
  router: PropTypes.object,
};

const defaultProps = {};

function Press() {
  return (
    <div className={styles.press}>
      <Helmet
        title="Press"
      />
      <Navbar />

      <div className={globalStyles.pageWrapper}>
        <StandardSectionBox
          sectionTitle={sectionTitle}
          text={titleDescription}
        />
        <News articles={[]} />
      </div>
      <Footer />
    </div>
  );
}

Press.propTypes = propTypes;
Press.contextTypes = contextTypes;
Press.defaultProps = defaultProps;

export default Press;
