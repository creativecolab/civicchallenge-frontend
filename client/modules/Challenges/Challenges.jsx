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

/* import publicTransit from './public-transit.png';
import accessibility from './accessibility.png';
import parking from './parking.png'; */
import traffic from './traffic.jpg';
import autonomousCars from './autonomous-cars.png';
import aging from './aging.jpg';
import walking from './walking.png';

/**
 * Challenges
 */

const INFO = [
  {
    sectionTitle: 'The Challenge Briefs',
    text: 'D4SD is collaborating with the Design Forward Alliance to host a 2017 large-scale human-centered design challenge around the complex civic issue of Mobility. People need to move around a city. Whether for work or play—and by car, bike, train, bus, boat, or foot— mobility significant affects the daily lives of millions. San Diego is culturally and economically diverse, as well as geographical dispersed, which makes it a ripe topic for exploring issues around transportation. The mobility challenges below investigate concerns currently facing San Diegans, as well as take a look to future transportation systems.',
  },
];

const DESIGN_BRIEFS = [
  {
    id: '',
    subtitle: 'PROMOTING WALKABLE AND BIKEABLE COMMUNITIES',
    title: 'How can we avoid dangerous bike accidents?',
    thumbnail: walking,
  },
  {
    id: '',
    subtitle: 'IMPROVING ACCESSIBILITY',
    title: 'How do we help everyone reach their destination?',
    thumbnail: aging,
  },
  {
    id: '',
    subtitle: 'ENHANCING THE COMMUTER EXPERIENCE',
    title: 'How can we make commuting bearable (and maybe even fun)?',
    thumbnail: traffic,
  },
  {
    id: '',
    subtitle: 'PREPARING FOR AUTONOMOUS VEHICLES',
    title: 'Driverless cars? How will this change the experience?',
    thumbnail: autonomousCars,
  }
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
            <div className={styles.DBBoxGrid}>
              {DESIGN_BRIEFS.map(({ title, subtitle, thumbnail }) => (
                <DBBox
                  title={title}
                  subtitle={subtitle}
                  thumbnail={thumbnail}
                />
              ))}
            </div>
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
