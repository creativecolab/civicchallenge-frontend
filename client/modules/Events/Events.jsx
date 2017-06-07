import React from 'react';
import PropTypes from 'prop-types';
import Navbar from './components/Navbar/Navbar';

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
      <Navbar />
      <header>
        <div className={styles.headerText}>
          <h3>Events</h3>
        </div>
      </header>
      <div className={styles.eventsGrid}>
        <div className={styles.eventsRow}>
          <div className={styles.eventsElement}>
            <h3>Event</h3>
          </div>
          <div className={styles.eventsElement}>
            <h3>Event</h3>
          </div>
          <div className={styles.eventsElement}>
            <h3>Event</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

Events.propTypes = propTypes;
Events.contextTypes = contextTypes;
Events.defaultProps = defaultProps;

export default Events;
