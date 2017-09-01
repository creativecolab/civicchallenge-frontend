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
            dayName: 'Information Session & Kick-Off',
            dayDetails: 'Introduction by Mayor Faulconer, Chancellor Khosla & Don Norman',
          },
          {
            date: 'Sept 22',
            timeRange: '5pm-midnight',
            dayName: 'Design Sprint & Hackathon - Day 1',
            dayDetails: 'Learn about the challenges, brainstorm, form teams, & build prototypes',
          },
          {
            date: 'Sept 23',
            timeRange: '6pm-9pm',
            dayName: 'Design Sprint & Hackathon - Day 2',
            dayDetails: 'Present Prototypes, Win Prizes & Party',
          },
        ],
      },
    ],
    scheduleButton: [
      {
        scheduleLink: '',
        scheduleCallout: 'Register Now for the Event',
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
            timeRange: '5pm',
            dayName: 'Design Challenge Deadline',
            dayDetails: 'All entries must be submitted on <a href="/">d4sd.org</a>',
          },
          {
            date: 'Oct 25',
            timeRange: '3pm-9pm',
            dayName: 'Judging for D4SD Submissions',
            dayDetails: 'All teams present posters at the Design Forward community event (at Broadway Pier)',
          },
          {
            date: 'Oct 26',
            timeRange: '9am-9pm',
            dayName: 'Finalist Showcase and Awards Ceremony',
            dayDetails: 'Finalists posters and award ceremony at Design Forward Summit (Liberty Station)',
          },
        ],
      },
    ],
    scheduleButton: [
      {
        scheduleLink: 'http://www.designforwardsd.com/',
        scheduleCallout: 'Learn More about Design Forward',
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
        {EVENTS.map(({ eventName, eventDate, hostedBy, scheduleList, scheduleButton }) => (
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
                  scheduleButton={scheduleButton}
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
