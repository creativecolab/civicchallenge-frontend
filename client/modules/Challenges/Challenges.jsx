/* eslint-disable max-len */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import Info from './components/Info/Info';
import Category from './components/Category/Category';

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
    fetch('https://d4sd-api.ucsd.edu/categories?challenges=true')
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
        <div>
          {this.state.categories.map(category =>
            <Category key={category.name} {...category} />
          )}
        </div>
        <Footer />
      </section>
    );
  }
}

Challenges.propTypes = propTypes;
Challenges.contextTypes = contextTypes;
Challenges.defaultProps = defaultProps;

export default Challenges;
