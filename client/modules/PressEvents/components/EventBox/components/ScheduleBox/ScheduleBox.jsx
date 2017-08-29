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
  dayTitle: PropTypes.string.isRequired,
  dayEvents: PropTypes.array.isRequired,
};

const contextTypes = {
  router: PropTypes.object,
};

const defaultProps = {};

function ScheduleBox({ dayTitle, dayEvents }) {
  return (
    <div className={styles.scheduleWrapper}>
      <h3>{dayTitle}</h3>
      {dayEvents.map(({ timeRange, eventDetails }) => (
        <div className={styles.scheduleBox}>
          <div className={styles.date}>
            <h6>{timeRange}</h6>
          </div>
          <div className={styles.event}>
            <p>{eventDetails}</p>
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
