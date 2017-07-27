/* eslint-disable max-len */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Header from 'components/Navbar/Navbar';
import Footer from 'components/Footer/Footer';
import StandardSectionBox from 'components/StandardSectionBox/StandardSectionBox';

import globalStyles from 'main.scss';

import DBBox from './components/DBBox/DBBox';
import Categories from './components/Categories/Categories';

import styles from './Challenges.scss';

import traffic from './traffic.png';
import autonomousCars from './autonomous.png';
import aging from './accessibility_2.jpg';
import walking from './biking.png';

/**
 * Challenges
 */

const INFO = [
  {
    sectionTitle: 'Challenge Briefs',
    text: 'The challenges below explore the concerns currently facing San Diegans while also looking towards the future of transportation. Join a conversation about the issue that concerns you most and find teammates to submit a proposal! ',
  },
];

const DESIGN_BRIEFS = [
  {
    id: '',
    subtitle: 'PROMOTING WALKING AND BIKING',
    title: 'How can we avoid dangerous bike accidents?',
    thumbnail: walking,
  },
  {
    id: '',
    name: 'Enhancing the Commuter Experience',
    summary: 'How can we make commuting bearable (and maybe even fun)?',
    thumbnail: traffic,
  },
  {
    id: '',
    name: 'Preparing for Autonomous Vehicles',
    summary: 'Driverless cars? How will this change the experience?',
    thumbnail: autonomousCars,
  },
  {
    id: '',
    name: 'Improving Accessibility',
    summary: 'How do we help everyone reach their destination?',
    thumbnail: aging,
  },
];


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
        <Header />
        <div className={globalStyles.contentWrapperGrid}>
          <div className={styles.info}>
            {INFO.map(({ sectionTitle, text }) => (
              <StandardSectionBox
                sectionTitle={sectionTitle}
                text={text}
              />
            ))}
          </div>
          <div className={styles.DBBoxGrid}>
            {DESIGN_BRIEFS.map(({ name, summary, thumbnail }) => (
              <DBBox
                title={name}
                desc={summary}
                thumbnail={thumbnail}
              />
            ))}
          </div>
          <Categories categories={this.state.categories} />
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
