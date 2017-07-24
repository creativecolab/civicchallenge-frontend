/* eslint-disable max-len */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withCollectRef } from 'util/RefCollector';
import fetch from 'isomorphic-fetch';
import { Link } from 'react-router';

import classNames from 'util/classNames';

import LazyImage from 'components/LazyImage/LazyImage';

import globalStyles from 'main.scss';
import styles from './ChallengeGrid.scss';

import publicTransit from './public-transit.png';
import accessibility from './accessibility.png';
import walking from './walking.png';
import parking from './parking.png';
import traffic from './traffic.jpg';
import autonomousCars from './autonomous-cars.png';
import aging from './aging.jpg';
/**
 * ChallengeBox
 */

const CHALLENGES_INFO = [
  {
    title: 'Challenges',
    description: 'We all have places to go and people to see. Whether for work or play—and by car, bike, train, bus, boat, or foot—mobility significantly affects millions on a daily basis. San Diego is culturally and economically diverse, as well as spread out,which makes getting around the city an important issue to explore. The design briefs below explore the concerns currently facing San Diegans while also looking towardsthe future of transportation. Join a conversation about the issue that concerns you most and find teammates to submit a proposal!',
  },
];

const CHALLENGES = [
  {
    id: '',
    name: 'Safer Walking and Biking',
    summary: 'What can be done to improve pedestrian and bicycle safety in San Diego? Since 2001, more than 8,000 pedestrians have been injured and 270 killed in San Diego to to traffic accidents.',
    thumbnail: walking,
  },
  {
    id: '',
    name: 'Accommodating Aging',
    summary: 'Mobility for seniors is not only about getting around, it is also about physical and social well-being. Seniors who are physically active and able to get around independently have greater flexibility, muscle strength, balance, and bone density---all of which help them recover more rapidly from illness and injuries, and live longer, healthier lives. What transportation services or initiatives might we imagine for our cities senior residents?',
    thumbnail: aging,
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
    name: 'Understanding Parking Demand',
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
];

/*
    <Link to={`/challenges/${id}`} className={classNames(challengeClasses)}>
      <div className={styles.text}>
        <span className={styles.name}>{name}</span>
        <span
          className={styles.description}
          dangerouslySetInnerHTML={{
            __html: summary,
          }}
        />
      </div>
      {image}
    </Link>*/

function ChallengeBox({ id, name, summary, thumbnail }) {
  const challengeClasses = [styles.challenge];
  let image;
  if (!thumbnail) {
    challengeClasses.push(styles.placeholder);
    image = null;
  } else {
    image = <LazyImage src={thumbnail} alt={name} />;
  }
  return (
    <Link to={`${id}`} className={classNames(challengeClasses)}>
      <div className={styles.text}>
        <span className={styles.name}>{name}</span>
        <span
          className={styles.description}
          dangerouslySetInnerHTML={{
            __html: summary,
          }}
        />
      </div>
      {image}
    </Link>
  );
}

ChallengeBox.defaultProps = {
  thumbnail: null,
};

ChallengeBox.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  thumbnail: PropTypes.string,
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

class ChallengeGrid extends Component {
  constructor(props) {
    super(props);
    this.state = { challenges: [] };
  }

  componentDidMount() {
    fetch('https://d4sd-api.ucsd.edu/challenges')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({ challenges: data.challenges });
      });
  }

  render() {
    return (
      <section className={styles.challengeGrid} ref={this.props.componentRef}>
        <div className={styles.challenges}>
          <div className={styles.content}>

            {CHALLENGES_INFO.map(({ title, description }) => (
              <div className={globalStyles.sectionTitle}>
                <h1>{title}</h1>
                <div className={styles.descr}>
                  <p>{description}</p>
                </div>
              </div>
            ))}
            <div className={styles.challengeGrid}>
              {CHALLENGES.map(challenge =>
                <ChallengeBox
                  key={challenge.name}
                  {...challenge}
                />
              )}
              <div className={classNames([styles.challenge, styles.placeholder])}>
                <div className={styles.text}>
                  <span className={styles.name}>Suggest a Challenge</span>
                  <span className={styles.description}>Did we miss something? If there’s another mobility challenge San Diego faces that you don’t see here, toss us an <a href="mailto:team@d4sd.org">email</a>.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

ChallengeGrid.propTypes = propTypes;
ChallengeGrid.contextTypes = contextTypes;
ChallengeGrid.defaultProps = defaultProps;

export default withCollectRef('Challenges')(ChallengeGrid);
