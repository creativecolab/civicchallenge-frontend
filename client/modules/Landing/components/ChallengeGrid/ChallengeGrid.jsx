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
import autonomousCars from './autonomous-cars.png';

/**
 * ChallengeBox
 */

const CHALLENGES_INFO = [
  {
    title: 'Challenge Briefs',
    description: 'The challenges below explore the concerns currently facing San Diegans while also looking towards the future of transportation. Join a conversation about the issue that concerns you most and find teammates to submit a proposal!',
  },
];

const CHALLENGES = [
  {
    id: '',
    name: 'Promoting Walkable and Bikeable Communities',
    summary: 'How can we avoid dangerous bike accidents?',
    thumbnail: walking,
  },
  {
    id: '',
    name: 'Enhancing the Commuter Experience',
    summary: 'How can we make commuting bearable (and maybe even fun)?',
    thumbnail: publicTransit,
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
