/* eslint-disable max-len, jsx-a11y/no-static-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import classNames from 'util/classNames';

import Navbar from 'components/Navbar/Navbar';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import globalStyles from 'main.scss';

import ScheduleBox from './components/EventBox/components/ScheduleBox/ScheduleBox';

import styles from './Events.scss';
import eventStyles from './components/EventBox/EventBox.scss';

/** IMAGES */

import headerImg from './headerImg.jpg';
import hackathon from './components/EventBox/hackathon.jpg';


/* navbar scroll animation */
let TweenLite = {};
if (process.env.browser) {
  TweenLite = require('gsap/TweenLite'); // eslint-disable-line global-require
  require('gsap/ScrollToPlugin'); // eslint-disable-line global-require
}

/**
 * Constants
 */

const headerText = 'Events';

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
      'Innovators from across the city kicked off the <a href=”/”>Design for San Diego (D4SD)</a> challenges with a design sprint and hackathon. Dozens of people worked into the wee hours of the morning and submitted 13 amazing and diverse concepts for the kickoff competition aimed at improving transportation in San Diego. Check out this <a href=”http://ucsdnews.ucsd.edu/feature/you-can-help-design-solutions-to-san-diegos-troubles-with-traffic-and-more” target="_blank" rel="noopener noreferrer">story by ThisWeek@UCSanDiego</a> and this <a href=”https://scalesdblog.wordpress.com/” target="_blank" rel="noopener noreferrer">blog report by SCALE SD</a> about the event.',
    ],
    eventImg: hackathon,
    eventImgAlt: 'People standing around a table at the hackathon event',
  },
  {
    eventName: 'Civic Design Course',
    hostedBy: 'Hosted by Professor Dow at UC San Diego (all sessions from 5-7pm)',
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
          {
            date: '',
            timeRange: '',
            dayName: '',
            dayDetails: '',
            buttonTitle: 'Sign up now to join sessions at UCSD',
            buttonLink: 'https://goo.gl/forms/0tkGBf09TXSqza7g1',
          },
        ],
      },
    ],
    eventSummaryNoImg: [
      '',
    ],
  },
  {
    eventName: 'D4SD Challenge Deadline',
    hostedBy: '',
    scheduleList: [
      {
        dayEvents: [
          {
            date: 'Oct 22',
            timeRange: '11:59pm PDT',
            dayName: 'Deadline',
            dayDetails: 'All entries due by midnight.',
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
 * Events
 */


const propTypes = {
  params: PropTypes.object.isRequired,
};

const contextTypes = {
  router: PropTypes.object,
};

const defaultProps = {};

class Events extends React.PureComponent {
  static CURRENTSECTION_HEADER = 'header';
  static CURRENTSECTION_OVERVIEW_BASE = 'overview';
  static CURRENTSECTION_RESOURCES = 'resources';

  static SCROLL_PX_PER_MS = 1500;

  constructor(props) {
    super(props);

    this.state = {
      currentSection: Events.CURRENTSECTION_HEADER,
      post: false,
    };
  }

  componentDidMount() {
    this._onWindowScroll();
    window.addEventListener('scroll', this._onWindowScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this._onWindowScroll);
  }

  _onWindowScroll = () => {
    const { currentSection, post } = this.state;

    const newPost = this.contentContainer.getBoundingClientRect().top < 0;
    if (newPost !== post) {
      this.setState({
        post: newPost,
      });
    }

    let newCurrentSection = Events.CURRENTSECTION_HEADER;
    for (let i = this.overviews.length - 1; i >= 0; i -= 1) {
      if (this.overviews[i].getBoundingClientRect().top <= 30) {
        newCurrentSection = `${Events.CURRENTSECTION_OVERVIEW_BASE}${i}`;
        break;
      }
    }

    if (newCurrentSection !== currentSection) {
      this.setState({
        currentSection: newCurrentSection,
      });
    }
  }

  _onNavItemClicked = id => () => {
    const target = document.getElementById(id);

    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const bodyTop = document.body.getBoundingClientRect().top;
    const targetTop = target.getBoundingClientRect().top;
    const scrollTarget = targetTop - bodyTop;
    const scrollDuration = Math.abs(scrollTop - scrollTarget) / Events.SCROLL_PX_PER_MS;

    TweenLite.to(window, scrollDuration, { scrollTo: scrollTarget });
  }

  render() {
    const { currentSection, post } = this.state;

    let pageInfo = EVENTS;

    if (!pageInfo) {
      pageInfo = EVENTS.error;
    }

    return (
      <div className={styles.events}>
        <Helmet
          title={headerText}
        />
        <Navbar />
        <Header
          backgroundImg={headerImg}
          headerText={headerText}
          subheaderText=""
          showButton={false}
        />
        <section className={classNames([styles.contentContainer, post && styles.post])} ref={(el) => { this.contentContainer = el; }}>
          <div className={globalStyles.contentWrapper}>
            <div className={styles.menu}>

              {/* sidebar */}
              <ul className={styles.sidebar}>
                {EVENTS.map(({ eventName }, i) => (
                  <a key={eventName}>
                    <li
                      className={currentSection === `${Events.CURRENTSECTION_OVERVIEW_BASE}${i}` ? styles.current : ''}
                      onClick={this._onNavItemClicked(eventName.replace(/( |\W)/g, '').toLowerCase())}
                    >
                      <p>{eventName}</p>
                    </li>
                  </a>
                ))}
              </ul>
            </div>

            {/* 2017 alert */}

            <div className={styles.alert}>
              <a href="/getinvolved">
                <b>All events below happened in 2017.</b>
                <br />Stay tuned for upcoming events or get involved on the planning team.
              </a>
            </div>


            <div className={classNames([eventStyles.eventBox, globalStyles.contentWrapper])}>
              <div className={eventStyles.contentContainer}>

                {/* events */}
                {EVENTS.map(({ eventName, hostedBy, scheduleList, eventSummary, eventSummaryNoImg, eventImg, eventImgAlt }, i) => (
                  <div
                    key={eventName}
                    id={eventName.replace(/( |\W)/g, '').toLowerCase()}
                    className={eventStyles.eventWrapper} ref={(el) => { this.overviews = this.overviews || []; this.overviews[i] = el; }}
                  >
                    <div className={eventStyles.eventHeader}>
                      <h2>{eventName}</h2>
                      <h4>{hostedBy}</h4>
                      <hr />
                    </div>
                    {scheduleList
                      .map(({ dayEvents }) => (
                        <ScheduleBox
                          key={dayEvents}
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
          </div>
        </section>
        <Footer />
      </div>
    );
  }
}

Events.propTypes = propTypes;
Events.contextTypes = contextTypes;
Events.defaultProps = defaultProps;

export default Events;
