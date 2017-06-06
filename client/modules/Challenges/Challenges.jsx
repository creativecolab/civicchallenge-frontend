/* eslint-disable max-len */

import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import Info from './components/Info/Info';
import Category from './components/Category/Category';

import styles from './Challenges.scss';

const CATEGORIES = [
  {
    name: 'Urban Planning',
    description: 'Description',
    challenges: [
      {
        name: '14th Street',
      },
      {
        name: 'Gaslamp',
      },
    ],
  },
  {
    name: 'Category 2',
    description: 'Description',
    challenges: [
      {
        name: 'Challenge 1',
      },
      {
        name: 'Challenge 2',
      },
    ],
  },
];

/**
 * Challenges
 */

const propTypes = {};

const contextTypes = {
  router: PropTypes.object,
};

const defaultProps = {};

function Challenges() {
  return (
    <div className={styles.challenges}>
      <Helmet
        title="Challenges"
      />
      <Header
        backgroundImg={''}
        headerText={'Challenges'}
        subheaderText={''}
        showButton={false}
      />
      <Info />
      <div>
        {CATEGORIES.map(category =>
          <Category key={category.name} {...category} />
        )}
      </div>
      <Footer />
    </div>
  );
}

Challenges.propTypes = propTypes;
Challenges.contextTypes = contextTypes;
Challenges.defaultProps = defaultProps;

export default Challenges;
