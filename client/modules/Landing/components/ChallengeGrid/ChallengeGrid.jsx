/* eslint-disable max-len */

import React, { Component, PropTypes } from 'react';
import classNames from 'util/classNames';

import LazyImage from 'components/LazyImage/LazyImage';

import styles from './ChallengeGrid.scss';

import publicTransit from './public-transit.png';
import urbanPlanning from './urban-planning.png';
import accessibility from './accessibility.png';
import walking from './walking.png';
import parking from './parking.png';
import traffic from './traffic.png';
import autonomousCars from './autonomous-cars.png';

/**
 * Challenge Box
 */

const ChallengeBox = (props) => {
  return (
    <div className={styles.challenge}>
      <div className={styles.text}>
        <span className={styles.name}>{props.name}</span>
        <span className={styles.description}>{props.description}</span>
      </div>
      <LazyImage src={props.image} alt={props.name} />
    </div>
  );
};

ChallengeBox.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

/**
 * ChallengeGrid
 */

const CHALLENGES = [
  {
    name: 'Public Transit',
    description: 'The San Diego Metropolitan Transit System (MTS) services thousands of citizens over nearly 600 square miles through a robust bus and light rail system. The MTS system is continually expanding through various projects providing opportunity to better serve San Diego’s residents.',
    image: publicTransit,
  },
  {
    name: 'Urban Planning',
    description: 'There are several new opportunities for urban planning innovation in San Diego. Creating a gateway for growth will help achieve sustainable development as well as fair socioeconomic distribution in many areas through better infrastructure and services.',
    image: urbanPlanning,
  },
  {
    name: 'Accessibility',
    description: 'The San Diego community provides transportation services to elderly and disabled people through different organizations. By collaborating with these organizations, we can develop novel methods to help expand and improve upon existing accessibility for this population.',
    image: accessibility,
  },
  {
    name: 'Walking/Biking',
    description: 'Reducing pedestrian and bicycle deaths, implementing safe walks to schools, and the push for more infrastructure and funding for pedestrian and bicycle spaces is a critical issue in San Diego as more citizens look for alternatives to driving.',
    image: walking,
  },
  {
    name: 'Parking',
    description: 'As the population of San Diego continues to grow, parking becomes a more pressing issue. This provides opportunity for innovative solutions to maximize existing parking infrastructure and generate more effective practices for future parking areas.',
    image: parking,
  },
  {
    name: 'Traffic',
    description: 'Residents of San Diego deal with congested freeways going northbound in the morning, and even slower going southbound in the evening. Investigating the underlying causes of traffic as well as possible infrastructural, behavioral, or policy-wise changes can reduce the ever-present frustration of traffic and dependence on cars.',
    image: traffic,
  },
  {
    name: 'Autonomous Cars',
    description: 'As technology continues to revolutionize the dynamics of our everyday transportation, self-driving cars can be the key to decreasing accidents and building a more sustainable system. San Diego has been chosen as one of five cities to test autonomous cars, providing a prime opportunity to design a futuristic era of transportation.',
    image: autonomousCars,
  },
];

class ChallengeGrid extends Component {
  constructor(props) {
    super(props);
    this.state = { isMounted: false };
  }

  componentDidMount() {
    this.setState({ isMounted: true });
  }

  render() {
    return (
      <section className={styles.challengeGrid}>
        <div className={styles.challenges}>
          {CHALLENGES.map(challenge =>
            <ChallengeBox
              key={challenge.name}
              {...challenge}
            />
          )}
          <div className={classNames([styles.challenge, styles.placeholder])}>
            <div className={styles.text}>
              <span className={styles.name}>Suggest a Challenge</span>
              <span className={styles.description}>Please email <a href="mailto:design4sandiego@gmail.com">design4sandiego@gmail.com</a>.</span>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

ChallengeGrid.propTypes = {};

ChallengeGrid.contextTypes = {
  router: PropTypes.object,
};

export default ChallengeGrid;
