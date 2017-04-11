import React, { Component, PropTypes } from 'react';

import styles from './Theme.scss';

/**
 * Challenge Box
 */

const ChallengeBox = (props) => {
  const challengeRef = (el) => {
    if (el) {
      el.addEventListener('mouseover', () => {
        el.classList.add(styles.hover);
      });

      el.addEventListener('mouseout', () => {
        el.classList.remove(styles.hover);
      });
    }
  };

  return (
    <div className={styles.challenge} ref={challengeRef}>
      <div className={styles.text}>
        <div className={styles.name}>{props.name}</div>
        <div className={styles.description}>{props.description}</div>
      </div>
    </div>
  );
};

ChallengeBox.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

/**
 * Theme
 */

const CHALLENGES = [
  {
    name: '14th Street Promenade',
    description: 'The 14th St Promenade in Downtown San Diego is in the process of  improving pedestrian and cyclist accessibility based on a newly approved plan for creating a sustainable streetscape design.',
  },
  {
    name: 'National City Traffic',
    description: 'Residents of National City deal with congested freeways going northbound in the morning, and even slower going southbound in the evening. Investigating the underlying causes of traffic as well as possible infrastructural, behavioral, or policy-wise changes can reduce the ever-present frustration of traffic and dependence on cars.',
  },
  {
    name: 'Parking',
    description: 'As the population of San Diego continues to grow, parking becomes a more pressing issue. This provides opportunity for innovative solutions to maximize existing parking infrastructure and generate more effective practices for future parking areas.',
  },
  {
    name: 'Autonomous Cars',
    description: 'As technology continues to revolutionize the dynamics of our everyday transportation, self-driving cars can be the key to decreasing accidents and building a more sustainable system. San Diego has been chosen as one of five cities to test autonomous cars, providing a prime opportunity to design a futuristic era of transportation.',
  },
  {
    name: 'Accessibility',
    description: 'The San Diego community provides transportation services to elderly and disabled people through different organizations. By collaborating with these organizations, we can develop novel methods to help expand and improve upon existing accessibility for this population.',
  },
  {
    name: 'Walking',
    description: 'Reducing pedestrian and bicycle deaths, implementing safe walks to schools, and the push for more infrastructure and funding for pedestrian and bicycle spaces is a critical issue in San Diego as more citizens look for alternatives to driving.',
  },
];

class Theme extends Component {
  constructor(props) {
    super(props);
    this.state = { isMounted: false };
  }

  componentDidMount() {
    this.setState({ isMounted: true });
  }

  render() {
    return (
      <div className={styles.theme}>
        <div className={styles.header}>
          <h3>
            <span className={styles.text1}>Civic Challenge:</span>
            <br />
            <span className={styles.text2}>Mobility</span>
          </h3>
          <p className={styles.description}>
            D4SD will host a 2017 large-scale human-centered design challenge
            around the complex civic issue of Mobility. People need to move
            around a city. Whether for work or play—and by car, bike, train, bus,
            boat, or foot— mobility significant affects the daily lives of
            millions. San Diego is culturally and economically diverse, as well
            as geographical dispersed, which makes it a ripe topic for exploring
            issues around transportation. The mobility challenge will investigate
            concerns currently facing San Diegans, as well as take a look to
            future transportation systems.
          </p>
        </div>
        <div className={styles.challenges}>
          {CHALLENGES.map(challenge =>
            <ChallengeBox
              key={challenge.name}
              {...challenge}
            />
          )}
        </div>
      </div>
    );
  }
}

Theme.propTypes = {};

Theme.contextTypes = {
  router: PropTypes.object,
};

export default Theme;
