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

import publicTransit from './public-transit.png';
import accessibility from './accessibility.png';
import walking from './walking.png';
import parking from './parking.png';
import traffic from './traffic.jpg';
import autonomousCars from './autonomous-cars.png';
import aging from './aging.jpg';
/**
 * Challenges
 */

const DESIGN_BRIEFS = [
  {
    id: '',
    name: 'Safer Walking and Biking',
    summary: 'What can be done to improve pedestrian and bicycle safety in San Diego? Since 2001, more than 8,000 pedestrians have been injured and 270 killed in San Diego to to traffic accidents.',
    thumbnail: walking,
  },
  {
    id: '',
    name: 'Mitigating Traffic',
    summary: 'Residents of San Diego deal with congested freeways every day---northbound in the morning, and even slower southbound in the evening. Why is it this way? Could we make changes to the infrastructure, traffic behavior, or policy-wise to reduce our dependence on cars? Our dependence on cars is not only bad for traffic and congestion, but also our health and the environment.',
    thumbnail: traffic,
  },
  {
    id: '',
    name: 'Facilitating Public Transit Feedback',
    summary: 'Users of public transport in San Diego have recently reported increased dissatisfaction with transit costs, public transit availability, and cleanliness at the public transit areas. The Metropolitan Transit System (MTS) and North Country Transit District (NCTD) need better ways of hearing and responding to public transit riders.',
    thumbnail: publicTransit,
  },
  {
    id: '',
    name: 'Balancing/Understanding Parking Demand',
    summary: 'In a city with over 2.2 million personal vehicles, parking is a widespread problem. As the population increases more cars join the road each year, better systems are needed to manage and plan for new parking infrastructure. How might we help drivers and planners navigate the challenge of parking in San Diego?',
    thumbnail: parking,
  },
  {
    id: '',
    name: 'Preparing for Autonomous Vehicles',
    summary: 'San Diego is one of 10 cities selected to test self-driving cars. Although there are risks to inviting Autonomous Vehicles onto our city streets, highways and byways. How might we prepare for this major advance in transportation?',
    thumbnail: autonomousCars,
  },
  {
    id: '',
    name: 'Improving Accessibility',
    summary: 'People with disabilities face unique challenges when getting around the city. The lack of convenient, accessible, and affordable mobility for disabled people is a major problem in San Diego: How might we imagine improving access to our community for people with disabilities?',
    thumbnail: accessibility,
  },
  {
    id: '',
    name: 'Accommodating Aging',
    summary: 'Mobility for seniors is not only about getting around, it is also about physical and social well-being. Seniors who are physically active and able to get around independently have greater flexibility, muscle strength, balance, and bone density---all of which help them recover more rapidly from illness and injuries, and live longer, healthier lives. What transportation services or initiatives might we imagine for our cities senior residents?',
    thumbnail: aging,
  },
  {
    id: '',
    name: 'Balancing Parking Demand',
    summary: 'The lack of convenient, accessible, and affordable transportation for citizens with a disability is a major problem in San Diego. Programs exist yet challenges persist around infrastructure and transit deficient areas. How might we help those with a disability, who may also lack technology and a voice in the community, communicate their mobility challenges and gain independence?',
    thumbnail: parking,
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
        <Header
          backgroundImg={''}
          headerText={'Design Briefs'}
          subheaderText={''}
          showButton={false}
        />
        <Info />
        <div className={styles.DBBoxGrid}>
          {DESIGN_BRIEFS.map(({ name, summary }) => (
            <DBBox
              title={name}
              desc={summary}
            />
          ))}
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
