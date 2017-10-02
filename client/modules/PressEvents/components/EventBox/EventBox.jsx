/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'util/classNames';

import globalStyles from 'main.scss';

import ScheduleBox from './components/ScheduleBox/ScheduleBox';
import styles from './EventBox.scss';


/** images */

import hackathon from './hackathon.jpg';
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
    hostedBy: 'Hosted by SCALE SD at Downtown Works',
    scheduleList: [
      {
        dayEvents: [
          {
            date: 'Sept 21',
            timeRange: '10am-1pm',
            dayName: 'Kick-Off & Information Session',
            dayDetails: 'Introduction by Mayor Faulconer, Chancellor Khosla & Don Norman',
            buttonTitle: '',
            buttonLink: '',
          },
          {
            date: 'Sept 22',
            timeRange: '5pm-all night',
            dayName: 'D4SD Challenge: Design Sprint & Hackathon - Day 1',
            dayDetails: 'Learn about the challenges, brainstorm, form teams & build prototypes',
            buttonTitle: '',
            buttonLink: '',
          },
          {
            date: 'Sept 23',
            timeRange: 'all day-9pm',
            dayName: 'D4SD Challenge: Design Sprint & Hackathon - Day 2',
            dayDetails: 'Present prototypes, win prizes & party',
            buttonTitle: '',
            buttonLink: '',
          },
        ],
      },
    ],
    eventSummary: [
      'Innovators from across the city kicked off the <a href=”/”>Design for San Diego (D4SD)</a> challenges with a design sprint and hackathon. Dozens of people worked into the wee hours of the morning and submitted 13 amazing and diverse concepts for the kickoff competition aimed at improving transportation in San Diego. Learn more about this event on the <a href="https://scalesdblog.wordpress.com/" target="_blank" rel="noopener noreferrer">SCALE blog post</a>.',
    ],
    eventImg: hackathon,
    eventImgAlt: 'People standing around a table at the hackathon event',
  },
  {
    eventName: 'Civic Design Course',
    hostedBy: 'Hosted by Professor Dow at UC San Diego',
    scheduleList: [
      {
        dayEvents: [
          {
            date: 'Oct 3',
            timeRange: '',
            dayName: 'Team formation and brainstorming',
            dayDetails: '',
            buttonTitle: '',
            buttonLink: '',
          },
          {
            date: 'Oct 5',
            timeRange: '',
            dayName: 'Problem framing and ideation',
            dayDetails: '',
            buttonTitle: '',
            buttonLink: '',
          },
          {
            date: 'Oct 10',
            timeRange: '',
            dayName: 'Rapid prototyping',
            dayDetails: '',
            buttonTitle: '',
            buttonLink: '',
          },
          {
            date: 'Oct 12',
            timeRange: '',
            dayName: 'User research presentations',
            dayDetails: '',
            buttonTitle: '',
            buttonLink: '',
          },
          {
            date: 'Oct 17',
            timeRange: '',
            dayName: 'Visual design for posters/videos',
            dayDetails: '',
            buttonTitle: '',
            buttonLink: '',
          },
          {
            date: 'Oct 19',
            timeRange: '',
            dayName: 'Studio time for prototypes, posters, and entries',
            dayDetails: '',
            buttonTitle: '',
            buttonLink: '',
          },
        ],
      },
    ],
    eventSummaryNoImg: [
      'If you are interested in joining for any or all of these sessions on human-centered design, <a href="https://goo.gl/forms/0tkGBf09TXSqza7g1" target="_blank" rel="noopener noreferrer">please signup here</a>.',
    ],
  },
  {
    eventName: 'D4SD Design Challenge Deadline',
    hostedBy: '',
    scheduleList: [
      {
        dayEvents: [
          {
            date: 'Oct 22',
            timeRange: '11:59pm PDT',
            dayName: 'Deadline',
            dayDetails: 'All entries due by midnight. <a href="https://herox.com/D4SD-2017">Register your team now.</a>',
            buttonTitle: '',
            buttonLink: '',
          },
        ],
      },
    ],
  },
  {
    eventName: 'D4SD Challenge Judging and Awards Ceremony',
    hostedBy: 'Hosted by Design Forward at Broadway Pier & Liberty Station',
    scheduleList: [
      {
        dayEvents: [
          {
            date: 'Oct 25',
            timeRange: '6pm-9pm',
            dayName: 'Judging for D4SD Submissions',
            dayDetails: 'Teams present posters at the Design Forward community event (at Broadway Pier)',
            buttonTitle: '',
            buttonLink: '',
          },
          {
            date: 'Oct 26',
            timeRange: '7am-7pm',
            dayName: 'Finalist Showcase and Awards Ceremony',
            dayDetails: 'Finalists posters and award ceremony at Design Forward Summit (Liberty Station)',
            buttonTitle: 'Learn more about the Design Forward Summit',
            buttonLink: 'http://www.designforwardsd.com/',
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
        {EVENTS.map(({ eventName, hostedBy, scheduleList, eventSummary, eventSummaryNoImg, eventImg, eventImgAlt }) => (
          <div key={eventName} className={styles.eventWrapper}>
            <div className={styles.eventHeader}>
              <h2>{eventName}</h2>
              <h4>{hostedBy}</h4>
              <hr />
            </div>
            {scheduleList
              .map(({ dayEvents }) => (
                <ScheduleBox
                  dayEvents={dayEvents}
                  eventSummary={eventSummary}
                  eventSummaryNoImg={eventSummaryNoImg}
                  eventImg={eventImg}
                  eventImgAlt={eventImgAlt}
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
