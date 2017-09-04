/* eslint-disable react/no-danger */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'util/classNames';

import globalStyles from 'main.scss';
import styles from './ScheduleBox.scss';

/**
 * Constants
 */

/**
 * ScheduleBox
 */

const propTypes = {
  dayEvents: PropTypes.array.isRequired,
  scheduleButton: PropTypes.array.isRequired,
};

const contextTypes = {
  router: PropTypes.object,
};

const defaultProps = {};

function ScheduleBox({ dayEvents, scheduleButton }) {
  return (
    <div className={styles.scheduleWrapper}>
      {dayEvents
        .map(({ date, timeRange, dayName, dayDetails, buttonTitle, buttonLink }) => (
          <div className={styles.scheduleBox}>
            <div className={styles.date}>
              <h5 key={date}>{date}</h5>
              <span key={timeRange}>{timeRange}</span>
            </div>
            <div className={styles.event}>
              <p className={styles.dayName} key={dayName}>{dayName}</p>
              <p
                dangerouslySetInnerHTML={{
                  __html: dayDetails,
                }}
              />
            </div>
            {buttonTitle && <div className={globalStyles.sectionBtn}><a className={globalStyles.salmonSmallOutline} href={buttonLink}>{buttonTitle}</a></div>}
          </div>
        ))}
      <div className={classNames([styles.calloutBtn, globalStyles.sectionBtn])}>
        {scheduleButton.map(({ scheduleLink, scheduleCallout }) =>
          scheduleCallout && <a className={globalStyles.salmonOutline} href={scheduleLink}><span>{scheduleCallout}</span></a>
        )}
      </div>
    </div>
  );
}

ScheduleBox.propTypes = propTypes;
ScheduleBox.contextTypes = contextTypes;
ScheduleBox.defaultProps = defaultProps;

export default ScheduleBox;
