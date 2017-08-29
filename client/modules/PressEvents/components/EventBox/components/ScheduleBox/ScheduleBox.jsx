import React from 'react';
import PropTypes from 'prop-types';

import styles from './ScheduleBox.scss';

/**
 * Constants
 */

const defaultMessage = 'Details coming soon!';

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
      {dayTitle ? <h3>{dayTitle}</h3> : <h5>{defaultMessage}</h5>}
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
