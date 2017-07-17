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

/**
 * ChallengeBox
 */

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
    <Link to={`/challenges/${id}`} className={classNames(challengeClasses)}>
      <div className={styles.text}>
        <span className={styles.name}>{name}</span>
        <span className={styles.description}>{summary}</span>
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
            {this.state.challenges.map(challenge =>
              <ChallengeBox
                key={challenge.name}
                {...challenge}
              />
            )}
            <div className={styles.challengeWrapper}>
              <div className={styles.challengeRow}>
                <div className={styles.challengeElement}>
                  <p>Challenge name</p>
                </div>
                <div className={styles.challengeElement}>
                  <p>Challenge name</p>
                </div>
                <div className={styles.challengeElement}>
                  <p>Challenge name</p>
                </div>
                <div className={styles.challengeElement}>
                  <p>Challenge name</p>
                </div>
              </div>
              <div className={styles.challengeRow}>
                <div className={styles.challengeElement}>
                  <p>Challenge name</p>
                </div>
                <div className={styles.challengeElement}>
                  <p>Challenge name</p>
                </div>
                <div className={styles.challengeElement}>
                  <p>Challenge name</p>
                </div>
                <div className={styles.challengeElement}>
                  <p>Challenge name</p>
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
