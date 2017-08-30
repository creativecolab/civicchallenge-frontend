import React from 'react';
import PropTypes from 'prop-types';

import styles from './ScheduleBox.scss';

/**
 * Constants
 */

/**
 * ScheduleBox
 */

const propTypes = {
  dayEvents: PropTypes.array.isRequired,
};

const contextTypes = {
  router: PropTypes.object,
};

const defaultProps = {};

function ScheduleBox({ dayEvents }) {
  return (
    <div className={styles.scheduleWrapper}>
      {dayEvents.map(({ timeRange, eventDetails }) => (
        <div className={styles.scheduleBox}>
          <div className={styles.date}>
            <h6 key={timeRange}>{timeRange}</h6>
          </div>
          <div className={styles.event}>
            <p key={eventDetails}>{eventDetails}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

ScheduleBox.propTypes = propTypes;
ScheduleBox.contextTypes = contextTypes;
ScheduleBox.defaultProps = defaultProps;

export default ScheduleBox;
