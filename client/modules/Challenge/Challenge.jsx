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

const propTypes = {
  params: PropTypes.object.isRequired,
};

const contextTypes = {
  router: PropTypes.object,
};

const defaultProps = {};

class Challenges extends Component {
  constructor(props) {
    super(props);
    this.state = {
      challenge: {},
    };
  }

  componentDidMount() {
    fetch(`https://d4sd-api.ucsd.edu/challenges/${this.props.params.id}?resources=1&questions=1&insights=1&groupInsightsByQuestion=1`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({ challenge: data.challenge });
      });
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
