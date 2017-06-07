import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';

import styles from './Events.scss';

/**
 * Placeholder
 */

const propTypes = {};

const contextTypes = {
  router: PropTypes.object,
};

const defaultProps = {};

function Events() {
  return (
    <div className={styles.events}>
      <Helmet
        title="Events"
      />
      <Header
        backgroundImg={''}
        headerText="Events"
        subheaderText={''}
        showButton={false}
      />
      <div className={styles.eventsGrid}>
        <div className={styles.eventsRow}>
          <div className={styles.eventsElement}>
            <div className={styles.eventsContent}>
              <h3>Event</h3>
              <h4>Date</h4>
              <p>Description goes here</p>
            </div>
          </div>
          <div className={styles.eventsElement}>
            <div className={styles.eventsContent}>
              <h3>Event</h3>
              <h4>Date</h4>
              <p>Description goes here</p>
            </div>
          </div>
          <div className={styles.eventsElement}>
            <div className={styles.eventsContent}>
              <h3>Event</h3>
              <h4>Date</h4>
              <p>Description goes here</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

Events.propTypes = propTypes;
Events.contextTypes = contextTypes;
Events.defaultProps = defaultProps;

export default Events;
