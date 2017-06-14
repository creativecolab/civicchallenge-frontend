/* eslint-disable max-len */

import React from 'react';
import PropTypes from 'prop-types';
import { withCollectRef } from 'util/RefCollector';

import classNames from 'util/classNames';

import LazyImage from 'components/LazyImage/LazyImage';

import styles from './ChallengeGrid.scss';

import publicTransit from './public-transit.png';

import accessibility from './accessibility.png';
import walking from './walking.png';
import parking from './parking.png';
import traffic from './traffic.png';
/*
import urbanPlanning from './urban-planning.png';
import autonomousCars from './autonomous-cars.png';*/

/**
 * Constants
 */

const CHALLENGES = [
  {
    name: 'Enhancing Rider Feedback Systems',
    description: 'The Metropolitan Transit System (MTS) provides around 310,000 passenger trips each week, but riders are not satisfied with the transit costs, availability, and cleanliness. As MTS adds new stations and trolleys to the fleet, how might we make it easier for riders to voice their concerns and for MTS to hear and address them?',
    image: publicTransit,
  },
  {
    name: 'Walking and Biking Safely',
    description: 'As the city of San Diego grows in population, more residents are choosing to use walking and biking to avoid traffic congestion and parking. However, since walking and biking are not the norm they can be dangerous in a city built for cars. How might we make walking and biking safer for San Diego citizens?',
    image: walking,
  },
  {
    name: 'Parking and Population Growth',
    description: 'In a city with over 2.2 million personal vehicles, parking is a problem. As more cars join the road each year, better systems are needed to manage and plan for new parking infrastructure. Drivers need information about where to find a spot and how much time they have left on the meter. City planners could also use real-time information from sensors or citizens to better understand parking demand. How might we help drivers and planners navigate the challenge of parking in San Diego?',
    image: parking,
  },
  {
    name: 'Accessibility',
    description: 'The lack of convenient, accessible, and affordable transportation for citizens with a disability is a major problem in San Diego. Programs exist yet challenges persist around infrastructure and transit deficient areas. How might we help those with a disability, who may also lack technology and a voice in the community, communicate their mobility challenges and gain independence?',
    image: accessibility,
  },
  {
    name: 'More Coming Soon',
    description: 'Autonomous Vehicles, Aging and Mobility, Traffic Congestion, Crossing the Border',
    image: traffic,
  },
  /* {
    name: 'Suggest a Challenge',
    description: 'Residents of San Diego deal with congested freeways and lanes. There is a need to reduce traffic frustration and improve the experience for commuters.',
    image: traffic,
  },
  {
    name: 'Autonomous Cars',
    description: 'As technology continues to revolutionize the dynamics of our everyday transportation, self-driving cars can be the key to decreasing accidents and building a more sustainable system. San Diego has been chosen as one of five cities to test autonomous cars, however trust and safety are two important components in integrating autonomous cars as a widely accepted mode of transportation.',
    image: autonomousCars,
  },*/
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
            <span className={styles.description}>Did we miss something? If there’s another mobility challenge San Diego faces that you don’t see here, toss us an email at <a href="mailto:design4sandiego@gmail.com">design4sandiego@gmail.com</a>.</span>
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
