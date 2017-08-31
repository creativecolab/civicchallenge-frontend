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
      {dayEvents
        .map(({ date, timeRange, eventDetails }) => (
          <div className={styles.scheduleBox}>
            <div className={styles.date}>
              <h5 key={date}>{date}</h5>
              <span key={timeRange}>{timeRange}</span>
            </div>
            <div className={styles.event}>
              <p key={eventDetails}>{eventDetails}</p>
            </div>
          </div>
        ))
        .reduce((prev, curr) =>
          [prev, <hr className={styles.betweenEvents} />, curr])}
    </div>
  );
}

ScheduleBox.propTypes = propTypes;
ScheduleBox.contextTypes = contextTypes;
ScheduleBox.defaultProps = defaultProps;

export default ScheduleBox;
