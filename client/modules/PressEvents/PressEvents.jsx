import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';

import globalStyles from 'main.scss';

import styles from './PressEvents.scss';

/**
 * PressEvents
 */

const propTypes = {};

const contextTypes = {
  router: PropTypes.object,
};

const defaultProps = {};

function PressEvents() {
  return (
    <div className={styles.pressEvents}>
      <Helmet
        title="Press & Events"
      />
      <Header
        backgroundImg={''}
        headerText={'Press & Events'}
        subheaderText={''}
        showButton={false}
      />
      <div className={globalStyles.contentWrapper}>
        <div className={globalStyles.placeholderWrapper}>
          <p>Content Coming Soon</p>
        </div>
      </div>
      <div className={globalStyles.placeholderFooter}>
        <Footer />
      </div>
    </div>
  );
}

PressEvents.propTypes = propTypes;
PressEvents.contextTypes = contextTypes;
PressEvents.defaultProps = defaultProps;

export default PressEvents;
