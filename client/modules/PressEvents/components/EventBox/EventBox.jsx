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
    eventDate: '',
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
      'Innovators from across the city kicked off the <a href="/">Design for San Diego (D4SD)</a> challenges with a design sprint and hackathon. Dozens of people worked into the wee hours of the morning and submitted 13 amazing and diverse concepts for the kickoff competition aimed at improving transportation in San Diego.',
      'First place and a prize of $2,000 and 3 months of co-working space at Downtown Works went to Roshan Fernando, Ian Carrasco, and Lucien Eloundou—a mix of student engineers and cognitive scientists currently enrolled at UC San Diego and San Diego State University. Their winning concept seeks to streamline highway traffic by utilizing community-based navigation apps such as Google Maps and Waze to help current and future autonomous vehicles travel more efficiently and safely.',
      'Second prize went to Laurel Green and Jacob Browne. Third prize was shared between Katherine Whitmore, Gleidson Dantas, Arielle Chen, Antonio Khazdozian, Katheryn Rhodes, Jared Libby and Andre Wolf.',
      'Our weekend hackathon is complete, but challenge isn’t over yet! Teams can register until October 10 with entries due by Oct 22.  Find a team on our Slack discussion forum and join for hands-on sessions at UC San Diego campus.',
      'Click through to learn more about what happened at the <a href=”https://www.eventbrite.com/e/kickoff-for-the-2017-d4sd-civic-design-challenge-tickets-37543424393#” target=”_blank” rel=” noopener noreferrer”>Kickoff event with Mayor Faulconer</a> and the <a href=”https://www.eventbrite.com/e/2017-d4sd-civic-design-challenge-tickets-37553137445” target=”_blank” rel=” noopener noreferrer”>Design Sprint and Hackathon</a> (events closed).',
    ],
  },
  {
    eventName: 'Civic Design Course',
    eventDate: '',
    hostedBy: 'Professor Dow at UC San Diego',
    scheduleList: [
      {
        dayEvents: [
          {
            date: 'Oct 3-19, 2017',
            timeRange: '5pm-7pm',
            dayName: 'Human-centered design process',
            dayDetails: 'Join university professors, professional designers, and the City’s data scientists (location TBD)',
            buttonTitle: '',
            buttonLink: '',
          },
        ],
      },
    ],
  },
  {
    eventName: 'D4SD Design Challenge Deadline',
    eventDate: '',
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
    eventDate: '',
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
        {EVENTS.map(({ eventName, eventDate, hostedBy, scheduleList, scheduleButton, eventSummary }) => (
          <div key={eventName} className={styles.eventWrapper}>
            <div className={styles.eventHeader}>
              <h6>{eventDate}</h6>
              <h2>{eventName}</h2>
              <h4>{hostedBy}</h4>
              <hr />
            </div>
            {scheduleList
              .map(({ dayEvents }) => (
                <ScheduleBox
                  dayEvents={dayEvents}
                  scheduleButton={scheduleButton}
                  eventSummary={eventSummary}
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
