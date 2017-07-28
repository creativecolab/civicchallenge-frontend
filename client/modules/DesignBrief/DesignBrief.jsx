/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';

import DBHeader from './components/DBHeader/DBHeader';
import DBOverview from './components/DBOverview/DBOverview';
/* import Resources from './components/Resources/Resources'; */

import styles from './DesignBrief.scss';

/**
 * Constants
 */

const CHALLENGE_INFO = {
  improvingaccessibility: {
    challengeTitle: 'Improving Accesibility',
    question: 'How do you move around if you cannot see or hear?',
    intro: 'Many people face challenges getting around. Mobility can be difficult for any combination of physical, sensory, mental, or cognitive impairments. Approximately 17% of San Diegans have some form of impairment that affects their mobility. Individuals older than 60 represent the fastest growing segment of the population, with the number of senior residents expected to double by 2030. The sprawling nature of our region also makes it harder for people to reach their destination compared to other cities.',
    overview: [
      {
        title: 'How do you move around if you cannot see?',
        text: 'Most of us take our eyes and ears for granted. For those with sensory disabilities, navigating the city presents a major challenge. For the blind and those with poor vision, it can be difficult to walk through urban environments and to take public transit. San Diego’s Metropolitan Transit System has outfitted all stations with raised letters and braille plates identifying the route and direction (North, South, East, West), but challenges remain. For example, even the step onto a train can be intimidating. What are other mobility challenges faced by the visually impaired? For individuals who are deaf or hearing impaired, the biggest challenge is lack of auditory cues. For example, a deaf individual cannot hear a big truck bearing down or loud sirens from an ambulance. How might we create services and products that help hearing-impaired individuals stay aware of their surroundings?',
        link: '',
        linkText: 'Discuss this in Slack (coming soon)',
      },
      {
        title: 'How do you navigate stairs in a wheelchair?',
        text: 'Nam dapibus nisl vitae elit fringilla rutrum. Aenean sollicitudin, erat a elementum rutrum, neque sem pretium metus, quis mollis nisl nunc et massa. Vestibulum sed metus in lorem tristique ullamcorper id vitae erat. Nulla mollis sapien sollicitudin lacinia lacinia. Vivamus facilisis dolor et massa placerat, at vestibulum nisl egestas. Nullam rhoncus lacus non odio luctus, eu condimentum mauris ultrices. Praesent blandit, augue a posuere aliquam, arcu tortor feugiat turpis, quis lacinia augue sapien at tellus. Cras ut erat magna. Morbi nibh ante, condimentum vestibulum tempus a, tristique et velit. Sed semper aliquet ante. Quisque tempus arcu sapien, id convallis turpis dictum quis. Nunc commodo vitae risus sit amet sollicitudin. Sed id facilisis sem.',
        link: '',
        linkText: 'Discuss this in Slack (coming soon)',
      },
    ],
  },
  autonomousvehicles: {
    challengeTitle: 'Preparing for Autonomous Vehicles',
    question: 'Driverless cars? How will this change the experience?',
    intro: 'An autonomous vehicle (self-driving car) is a vehicle that can drive itself without human guidance. These vehicles are arriving faster than most people have anticipated. How might we prepare for this major advance in transportation? An important concern about adding Autonomous Vehicles (AVs) is the effect of “driverless” on the industries that hire drivers, as well as the drivers themselves. There are also policy questions about Autonomous Vehicles such as, determining fault in the case of an accident (e.g., passenger, manufacturer, designer). However, a related concern is how other drivers will engage with AVs—there is some concern that other drivers might cut off, chase down, or otherwise aggressively engage with AVs. Lastly, it may be easy to hack an AV, as they are designed to continuously receive information from other cars and sensors on the road through a “WiFi like” transmission system. Preparing for AVs may also mean rethinking the design of our existing roadways and signage. If AVs can monitor the speed and distance of other AVs, that means that cars can potentially travel at far faster speeds and in very close proximity. Will stop lights be necessary in this not-so-distant future?',
    overview: [
      {
        title: 'What kinds of experiences can we create for people when the car drives itself?',
        text: 'The experience of riding in an autonomous vehicle (AV) may be very different than driving. Driving may no longer be about keeping your eyes on the road and hands at 10 and 2. Moving around, dancing, even singing karaoke are all possibilities when driverless cars are involved. Several automotive companies have made a pledge to have AVs on the road before 2020. As one example of how AVs might offer a radically new experience, think about what work might be like while riding in an AV. Many cars are already WiFi-enabled and wired for conference calls. Without needing to focus on the road, a rider could focus on that pressing report and why keep the meeting in the office conference room, if we could set a course and sit around a table while cruising down La Jolla’s Scenic Drive?',
        link: '',
        linkText: 'Discuss this in Slack (coming soon)',
      },
    ],
  },
  error: {
    challengeTitle: 'Error',
    question: 'That is not a valid challenge',
    intro: '',
    overview: [],
  },
};


/**
 * DesignBrief
 */


const propTypes = {
  params: PropTypes.object.isRequired,
};

const contextTypes = {
  router: PropTypes.object,
};

const defaultProps = {};

class DesignBrief extends React.PureComponent {
  static CURRENTSECTION_HEADER = 'header';
  static CURRENTSECTION_OVERVIEW_BASE = 'overview';
  static CURRENTSECTION_RESOURCES = 'resources';

  static SCROLL_PX_PER_MS = 1000;

  constructor(props) {
    super(props);

    this.state = {
      currentSection: DesignBrief.CURRENTSECTION_HEADER,
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
    const { currentSection } = this.state;

    let newCurrentSection = DesignBrief.CURRENTSECTION_HEADER;

    for (let i = this.overviews.length - 1; i >= 0; i -= 1) {
      if (this.overviews[i].getBoundingClientRect().top <= 10) {
        newCurrentSection = `${DesignBrief.CURRENTSECTION_OVERVIEW_BASE}${i}`;
        break;
      }
    }

    if (newCurrentSection !== currentSection) {
      this.setState({
        currentSection: newCurrentSection,
      });
    }
  }

  render() {
    const { currentSection } = this.state;

    let pageInfo = CHALLENGE_INFO[this.props.params.id];

    if (!pageInfo) {
      pageInfo = CHALLENGE_INFO.error;
    }

    const { challengeTitle, intro, question, overview } = pageInfo;

    return (
      <div className={styles.DesignBrief}>
        <Helmet
          title={challengeTitle}
        />
        <Header
          backgroundImg={''}
          headerText={question}
          subheaderText={challengeTitle}
          showButton={false}
        />
        <section className={styles.contentContainer}>

          <ul className={styles.sidebar}>
            <a href="#introduction">
              <li className={currentSection === DesignBrief.CURRENTSECTION_HEADER ? styles.current : ''}>Introduction</li>
            </a>
            {overview.map(({ title }, i) => (
              <a href={`#${title.replace(/( |\W)/g, '').toLowerCase()}`}>
                <li className={currentSection === `${DesignBrief.CURRENTSECTION_OVERVIEW_BASE}${i}` ? styles.current : ''}>{title}</li>
              </a>
            ))}
          </ul>

          <div id={'introduction'} ref={(el) => { this.header = el; }}>
            <DBHeader
              intro={intro}
            />
          </div>

          {overview.map(({ title, text, link, linkText }, i) => (
            <div id={title.replace(/( |\W)/g, '').toLowerCase()} className={styles.contentWrapper} ref={(el) => { this.overviews = this.overviews || []; this.overviews[i] = el; }}>
              <DBOverview
                title={title}
                text={text}
                link={link}
                linkText={linkText}
              />
            </div>
          ))}

          {/* <div id={'learningresources'} ref={(el) => { this.resources = el; }}>
            <Resources
              title={RESOURCES.challengeName}
              external={RESOURCES.external}
              news={RESOURCES.news}
            />
          </div> */}

        </section>

        <Footer />

      </div>
    );
  }
}

DesignBrief.propTypes = propTypes;
DesignBrief.contextTypes = contextTypes;
DesignBrief.defaultProps = defaultProps;

export default DesignBrief;
