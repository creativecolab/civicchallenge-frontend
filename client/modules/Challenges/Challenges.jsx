/* eslint-disable max-len */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import Info from './components/Info/Info';
import DBBox from './components/DBBox/DBBox';
import Categories from './components/Categories/Categories';

import styles from './Challenges.scss';

/**
 * Challenges
 */

const propTypes = {};

const contextTypes = {
  router: PropTypes.object,
};

const defaultProps = {};

class Challenges extends Component {
  constructor(props) {
    super(props);
    this.state = { categories: [] };
  }

  componentDidMount() {
    fetch('https://d4sd-api.ucsd.edu/categories?challenges=1&questions=1')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({ categories: data.categories });
      });
  }

  render() {
    return (
      <section className={styles.challenges}>
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
        <div className={styles.dbBoxRow}>
          <DBBox />
          <DBBox />
        </div>
        <div className={styles.dbBoxRow}>
          <DBBox />
          <DBBox />
        </div>
        <div className={styles.dbBoxRow}>
          <DBBox />
          <DBBox />
        </div>
        <Categories categories={this.state.categories} />
        <Footer />
      </section>
    );
  }
}

Challenges.propTypes = propTypes;
Challenges.contextTypes = contextTypes;
Challenges.defaultProps = defaultProps;

export default Challenges;
