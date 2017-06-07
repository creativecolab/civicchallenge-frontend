import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Header from 'components/Header/Header';
import Content from './components/Content/Content';

import styles from './ChallengeIndex.scss';

/**
 * Placeholder
 */

const propTypes = {};

const contextTypes = {
  router: PropTypes.object,
};

const defaultProps = {};

function ChallengeIndex() {
  return (
    <div className={styles.placeholder}>
      <Helmet
        title="Microchallenge Index"
      />
      <Header
        backgroundImg={''}
        headerText={'Microchallenge Index'}
        subheaderText={''}
        showButton={false}
      />
      <Content />
    </div>
  );
}

ChallengeIndex.propTypes = propTypes;
ChallengeIndex.contextTypes = contextTypes;
ChallengeIndex.defaultProps = defaultProps;

export default ChallengeIndex;
