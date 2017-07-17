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


const CHALLENGES = [
  {
    id: '',
    name: 'Safer Walking and Biking',
    summary: '<div className={styles.dscrptSummary}>The Metropolitan Transit System (MTS) provides around 310,000 passenger trips each week, but riders are not satisfied with the transit costs, availability, and cleanliness.</div> <br/> <div className={styles.dscrptQuestion}><b>How might we make it easier for riders to voice their concerns and for MTS to hear and address them?</b></div>',
    thumbnail: walking,
  },
  {
    id: '',
    name: 'Mitigating Traffic',
    summary: '<div className={styles.dscrptSummary}>As the city of San Diego grows in population, more residents are choosing to use walking and biking to avoid traffic congestion and parking. However, since walking and biking are not the norm they can be dangerous in a city built for cars.</div> <br /> <div className={styles.dscrptQuestion}> <b>How might we make walking and biking safer for San Diego citizens?</b></div>',
    thumbnail: traffic,
  },
  {
    id: '',
    name: 'Facilitating Public Transit Feedback',
    summary: '<div className={styles.dscrptSummary}> In a city with over 2.2 million personal vehicles, parking is a problem. As more cars join the road each year, better systems are needed to manage and plan for new parking infrastructure. Drivers need information about where to find a spot and how much time they have left on the meter. City planners could also use real-time information from sensors or citizens to better understand parking demand.</div> <br /> <div className={styles.dscrptQuestion}> <b> How might we help drivers and planners navigate the challenge of parking in San Diego?</b> </div>',
    thumbnail: publicTransit,
  },
  {
    id: '',
    name: 'Balancing/Understanding Parking Demand',
    summary: '<div className={styles.dscrptSummary}> The lack of convenient, accessible, and affordable transportation for citizens with a disability is a major problem in San Diego. Programs exist yet challenges persist around infrastructure and transit deficient areas.</div> <br /> <div className={styles.dscrptQuestion}> <b>How might we help those with a disability, who may also lack technology and a voice in the community, communicate their mobility challenges and gain independence?</b></div>',
    thumbnail: parking,
  },
  {
    id: '',
    name: 'Preparing for Autonomous Vehicles',
    summary: '<div className={styles.dscrptSummary}>The Metropolitan Transit System (MTS) provides around 310,000 passenger trips each week, but riders are not satisfied with the transit costs, availability, and cleanliness.</div> <br/> <div className={styles.dscrptQuestion}><b>How might we make it easier for riders to voice their concerns and for MTS to hear and address them?</b></div>',
    thumbnail: autonomousCars,
  },
  {
    id: '',
    name: 'Improving Accessibility',
    summary: '<div className={styles.dscrptSummary}>As the city of San Diego grows in population, more residents are choosing to use walking and biking to avoid traffic congestion and parking. However, since walking and biking are not the norm they can be dangerous in a city built for cars.</div> <br /> <div className={styles.dscrptQuestion}> <b>How might we make walking and biking safer for San Diego citizens?</b></div>',
    thumbnail: accessibility,
  },
  {
    id: '',
    name: 'Accommodating Aging',
    summary: '<div className={styles.dscrptSummary}> In a city with over 2.2 million personal vehicles, parking is a problem. As more cars join the road each year, better systems are needed to manage and plan for new parking infrastructure. Drivers need information about where to find a spot and how much time they have left on the meter. City planners could also use real-time information from sensors or citizens to better understand parking demand.</div> <br /> <div className={styles.dscrptQuestion}> <b> How might we help drivers and planners navigate the challenge of parking in San Diego?</b> </div>',
    thumbnail: aging,
  },
  {
    id: '',
    name: 'Balancing/Understanding Parking Demand',
    summary: '<div className={styles.dscrptSummary}> The lack of convenient, accessible, and affordable transportation for citizens with a disability is a major problem in San Diego. Programs exist yet challenges persist around infrastructure and transit deficient areas.</div> <br /> <div className={styles.dscrptQuestion}> <b>How might we help those with a disability, who may also lack technology and a voice in the community, communicate their mobility challenges and gain independence?</b></div>',
    thumbnail: parking,
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
            <div className={globalStyles.sectionTitle}>
              <h1>Design Briefs</h1>
              <div className={styles.descr}>
                <p>We all have places to go and people to see. Whether for work or play—and by car,
                bike, train, bus, boat, or foot—mobility significantly affects millions on a daily
                basis. San Diego is culturally and economically diverse, as well as spread out,
                which makes getting around the city an important issue to explore. The design briefs
                below explore the concerns currently facing San Diegans while also looking towards
                the future of transportation. Join a conversation about the issue that concerns
                you most and find teammates to submit a proposal!</p>
              </div>
            </div>
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
      </section>
    );
  }
}

ChallengeGrid.propTypes = propTypes;
ChallengeGrid.contextTypes = contextTypes;
ChallengeGrid.defaultProps = defaultProps;

export default withCollectRef('Challenges')(ChallengeGrid);
