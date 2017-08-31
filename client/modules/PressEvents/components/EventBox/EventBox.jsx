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

/**
 * Events list
 * enter schedulelsit with no existing schedule in following format
 *
  scheduleList: [
    {
      dayTitle: '',
      dayEvents: [],
    },
  ],
 */
const EVENTS = [
  {
    eventName: 'D4SD Kick-off Design Sprint and Hackathon',
    eventDate: 'Sept 21-23',
    hostedBy: 'SCALE SD at Downtown Works',
    scheduleList: [
      {
        dayEvents: [
          {
            date: 'Sept 21',
            timeRange: '10am-1pm',
            eventDetails: 'Kick off (Meet the Mayor & learn about the mobility challenges)',
          },
          {
            date: 'Sept 22',
            timeRange: '5pm-midnight',
            eventDetails: 'Design Sprint (Brainstorm ideas, form teams, & start prototyping solutions)',
          },
          {
            date: 'Sept 23',
            timeRange: '6pm-9pm',
            eventDetails: 'Hackathon (teams share prototypes and win prizes)',
          },
        ],
      },
    ],
  },
  {
    eventName: 'D4SD Challenge Judging and Prize Ceremony',
    eventDate: 'Oct 24-26',
    hostedBy: 'Design Forward at Broadway Pier & Liberty Station',
    scheduleList: [
      {
        dayEvents: [
          {
            date: 'Oct 24',
            timeRange: '',
            eventDetails: 'Online Challenge Submissions Deadline',
          },
          {
            date: 'Oct 25',
            timeRange: '',
            eventDetails: 'Final Submissions Judged & Showcased (Broadway Pier)',
          },
          {
            date: 'Oct 26',
            timeRange: '',
            eventDetails: 'Finalists Showcased & Awards Presented (Liberty Station)',
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
          <div key={eventName} className={styles.eventWrapper}>
            <div className={styles.eventHeader}>
              <h6>{eventDate}</h6>
              <h2>{eventName}</h2>
              <h4>Hosted by {hostedBy}</h4>
              <hr />
            </div>
            {scheduleList
              .map(({ dayEvents }) => (
                <ScheduleBox
                  dayEvents={dayEvents}
                />
              ))}
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
