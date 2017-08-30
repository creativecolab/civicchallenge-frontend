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
            timeRange: 'Sept 21 (Thu)',
            eventDetails: 'Kick off (Meet the Mayor & learn about the mobility challenges)',
          },
          {
            timeRange: 'Sept 22 (Fri)',
            eventDetails: 'Design Sprint (Brainstorm ideas, form teams, & start prototyping solutions)',
          },
          {
            timeRange: 'Sept 23 (Sat)',
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
            timeRange: 'Oct 24 (Tue)',
            eventDetails: 'Challenge Submissions Due',
          },
          {
            timeRange: 'Oct 25 (Wed)',
            eventDetails: 'Final Submissions Judged & Showcased (Broadway Pier)',
          },
          {
            timeRange: 'Oct 26 (Thu)',
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
