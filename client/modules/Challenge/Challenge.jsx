/* eslint-disable max-len */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';

import globalStyles from 'main.scss';
import styles from './Challenge.scss';

import Questions from './components/Questions/Questions';
import Resources from './components/Resources/Resources';

/**
 * Challenge
 */

const propTypes = {};

const contextTypes = {
  router: PropTypes.object,
};

const defaultProps = {};

class Challenges extends Component {
  constructor(props) {
    super(props);
    this.state = {
      challenge: {
        id: 1,
        name: 'Challenge 1',
        description: 'Challenge description',
        thumbnail: '',
        phase: 0,
        resources: [
          {
            id: 1,
            name: 'Resource 1',
            url: 'http://graham.net/voluptatibus-occaecati-similique-ut-omnis',
            description: 'Resource description',
            type: 'link',
            phase: 0,
          },
        ],
        questions: [
          {
            id: 1,
            text: 'Question 1',
            insights: [
              {
                text: 'Insight 1',
              },
            ],
          },
        ],
      },
    };
  }

  componentDidMount() {
  }

  render() {
    const challenge = this.state.challenge;
    return (
      <section className={styles.challenge}>
        <Helmet
          title={challenge.name}
        />
        <Header
          backgroundImg={''}
          headerText={challenge.name}
          subheaderText={''}
          showButton={false}
        />
        <div className={globalStyles.textContainer}>
          <p>{challenge.name}</p>
          <p>{challenge.phase}</p>
          <p>{challenge.description}</p>
          <Resources resources={challenge.resources} />
          <Questions questions={challenge.questions} />
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
