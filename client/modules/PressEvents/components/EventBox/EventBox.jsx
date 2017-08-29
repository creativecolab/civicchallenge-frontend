/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'util/classNames';

import globalStyles from 'main.scss';

import ScheduleBox from './components/ScheduleBox/ScheduleBox';
import styles from './EventBox.scss';

/**
 * Constants
 */

const EVENTS = [
  {
    eventName: 'Kickoff Event',
    eventDate: 'Sept 21-23',
    hostedBy: 'x, y, z',
    scheduleList: [
      {
        dayTitle: 'Sept 21, Opening Cermonies',
        dayEvents: [
          {
            timeRange: '11:00-11:59',
            eventDetails: 'yes this is the event',
          },
          {
            timeRange: '11:00-11:59',
            eventDetails: 'yes this is the event',
          },
          {
            timeRange: '11:00-11:59',
            eventDetails: 'yes this is the event',
          },
          {
            timeRange: '11:00-11:59',
            eventDetails: 'yes this is the event',
          },
          {
            timeRange: '11:00-11:59',
            eventDetails: 'yes this is the event',
          },
          {
            timeRange: '11:00-11:59',
            eventDetails: 'yes this is the event',
          },
          {
            timeRange: '11:00-11:59',
            eventDetails: 'yes this is the event',
          },
        ],
      },
      {
        dayTitle: 'Sept 21, Opening Cermonies',
        dayEvents: [
          {
            timeRange: '11:00-11:59',
            eventDetails: 'yes this is the event',
          },
          {
            timeRange: '11:00-11:59',
            eventDetails: 'yes this is the event',
          },
          {
            timeRange: '11:00-11:59',
            eventDetails: 'yes this is the event',
          },
          {
            timeRange: '11:00-11:59',
            eventDetails: 'yes this is the event',
          },
          {
            timeRange: '11:00-11:59',
            eventDetails: 'yes this is the event',
          },
          {
            timeRange: '11:00-11:59',
            eventDetails: 'yes this is the event',
          },
          {
            timeRange: '11:00-11:59',
            eventDetails: 'yes this is the event',
          },
        ],
      },
    ],
  },
];


/**
 * EventBox
 */

const propTypes = {};

const contextTypes = {
  router: PropTypes.object,
};

const defaultProps = {};

function EventBox() {
  return (
    <div className={classNames([styles.eventBox, globalStyles.contentWrapper])}>
      <div className={styles.contentContainer}>
        {EVENTS.map(({ eventName, eventDate, hostedBy, scheduleList }) => (
          <div className={styles.eventWrapper}>
            <div className={styles.eventHeader}>
              <h6>{eventDate}</h6>
              <h2>{eventName}</h2>
              <h4>Hosted by {hostedBy}</h4>
              <hr />
            </div>
            {scheduleList
              .map(({ dayTitle, dayEvents }) => (
                <ScheduleBox
                  dayTitle={dayTitle}
                  dayEvents={dayEvents}
                />
              ))
              .reduce((prev, curr) =>
                [prev, <hr className={styles.sectionDivide} />, curr])}
          </div>
        ))}
      </div>
    </div>
  );
}

EventBox.propTypes = propTypes;
EventBox.contextTypes = contextTypes;
EventBox.defaultProps = defaultProps;

export default EventBox;
