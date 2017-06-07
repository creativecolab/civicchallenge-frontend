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
import Process from '../Landing/components/Process/Process';

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
                type: 1,
              },
              {
                text: 'Insight 2',
                type: 1,
              },
              {
                text: 'Insight 3',
                type: 1,
              },
              {
                text: 'Insight 4',
                type: 2,
              },
              {
                text: 'Insight 5',
                type: 2,
              },
              {
                text: 'Insight 6',
                type: 2,
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
          <Process phase={challenge.phase} />
          <div>
            <div className={globalStyles.title}>
              <h3 className={globalStyles.ul}>Background</h3>
            </div>
            <p>{challenge.description}</p>
          </div>
          <div>
            <div className={globalStyles.title}>
              <h3 className={globalStyles.ul}>Learn More</h3>
            </div>
            <Resources resources={challenge.resources} />
          </div>
        </div>
        <div>
          <div className={globalStyles.title}>
            <h3 className={globalStyles.ul}>Join the Conversation</h3>
          </div>
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
