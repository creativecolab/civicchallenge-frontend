/* eslint-disable max-len */

import React from 'react';
import PropTypes from 'prop-types';
import { withCollectRef } from 'util/RefCollector';

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
 * Constants
 */

const CHALLENGES = [
  {
    name: 'Public Transit',
    description: 'The San Diego Metropolitan Transit System (MTS) services thousands of citizens over nearly 600 square miles through bus and light rail systems. MTS is continually expanding, but needs your thoughts about how to expand in ways that better serve San Diego’s culturally and economically diverse communities. What are your experiences with MTS? What matters most on your ride, whether on a bus or on the light rail system?',
    image: publicTransit,
  },
  {
    name: 'Urban Planning',
    description: 'With an expanding population, there is a need for infrastructure and services to equally represent residents and promote diversity. How can we improve the city’s infrastructure to promote unity and interaction between residents?',
    image: urbanPlanning,
  },
  {
    name: 'Accessibility',
    description: 'Mobility should not be limited to a specific group of individuals. There is a growing population of the elderly and disabled. However, there are limited public transportation resources for the elderly and disabled. With a growing senior population and limited resources for disabled individuals, how can we make people aware of accessibility and improve outreach?',
    image: accessibility,
  },
  {
    name: 'Walking/Biking',
    description: 'San Diego residents use walking and biking as alternative modes of transportation, but there is a need for safer routes and mores spaces designed to get around the city.',
    image: walking,
  },
  {
    name: 'Parking',
    description: 'As the population of San Diego continues to grow, parking becomes a more pressing issue. This provides opportunity for innovative solutions to maximize existing parking infrastructure and generate more effective practices for future parking areas.',
    image: parking,
  },
  {
    name: 'Traffic',
    description: 'Residents of San Diego deal with congested freeways and lanes. There is a need to reduce traffic frustration and improve the experience for commuters.',
    image: traffic,
  },
  {
    name: 'Autonomous Cars',
    description: 'As technology continues to revolutionize the dynamics of our everyday transportation, self-driving cars can be the key to decreasing accidents and building a more sustainable system. San Diego has been chosen as one of five cities to test autonomous cars, however trust and safety are two important components in integrating autonomous cars as a widely accepted mode of transportation.',
    image: autonomousCars,
  },
];


/**
 * ChallengeBox
 */

function ChallengeBox({ name, description, image }) {
  return (
    <div className={styles.challenge}>
      <div className={styles.text}>
        <span className={styles.name}>{name}</span>
        <span className={styles.description}>{description}</span>
      </div>
      <LazyImage src={image} alt={name} />
    </div>
  );
}

ChallengeBox.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};


/**
 * ChallengeGrid
 */

const propTypes = {
  componentRef: PropTypes.func.isRequired,
};

const contextTypes = {
  router: PropTypes.object,
};

const defaultProps = {};

function ChallengeGrid(props) {
  return (
    <section className={styles.challengeGrid} ref={props.componentRef}>
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

ChallengeGrid.propTypes = propTypes;
ChallengeGrid.contextTypes = contextTypes;
ChallengeGrid.defaultProps = defaultProps;

export default withCollectRef('Challenges')(ChallengeGrid);
