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
const dummyTopText = 'Improving Accesibility';

const OVERVIEW = [
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
];

/* const RESOURCES = {
  challengeName: 'Accesibility',
  external: [
    {
      resourceTitle: 'Resource Title',
      description: 'Vestibulum rutrum quam vitae fringilla tincidunt. Suspendisse nec tortor urna. Ut laoreet sodales nisi, quis iaculis nulla iaculis vitae',
    },
    {
      resourceTitle: 'Resource Title',
      description: 'Vestibulum rutrum quam vitae fringilla tincidunt. Suspendisse nec tortor urna. Ut laoreet sodales nisi, quis iaculis nulla iaculis vitae',
    },
    {
      resourceTitle: 'Resource Title',
      description: 'Vestibulum rutrum quam vitae fringilla tincidunt. Suspendisse nec tortor urna. Ut laoreet sodales nisi, quis iaculis nulla iaculis vitae',
    },
  ],
  news: [
    {
      headline: 'News Article Headline',
      date: 'August 9',
    },
    {
      headline: 'News Article Headline',
      date: 'August 9',
    },
    {
      headline: 'News Article Headline',
      date: 'August 9',
    },
    {
      headline: 'News Article Headline',
      date: 'August 9',
    },
  ],
}; */

/**
 * DesignBrief
 */


const propTypes = {};

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

    if (this.resources.getBoundingClientRect().top <= 10) {
      newCurrentSection = DesignBrief.CURRENTSECTION_RESOURCES;
    } else {
      for (let i = this.overviews.length - 1; i >= 0; i -= 1) {
        if (this.overviews[i].getBoundingClientRect().top <= 10) {
          newCurrentSection = `${DesignBrief.CURRENTSECTION_OVERVIEW_BASE}${i}`;
          break;
        }
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

    return (
      <div className={styles.DesignBrief}>
        <Helmet
          title="Accessibility"
        />
        <Header
          backgroundImg={''}
          headerText={'Design Brief aodsi alsdfjlsd sd ldkfsdalas  lk'}
          subheaderText={dummyTopText}
          showButton={false}
        />
        <section className={styles.contentContainer}>

          <ul className={styles.sidebar}>
            <a href="#introduction">
              <li className={currentSection === DesignBrief.CURRENTSECTION_HEADER ? styles.current : ''}>Introduction</li>
            </a>
            {OVERVIEW.map(({ title }, i) => (
              <a href={`#${title.replace(/( |\W)/g, '').toLowerCase()}`}>
                <li className={currentSection === `${DesignBrief.CURRENTSECTION_OVERVIEW_BASE}${i}` ? styles.current : ''}>{title}</li>
              </a>
            ))}
          </ul>

          <div id={'introduction'} ref={(el) => { this.header = el; }}>
            <DBHeader />
          </div>

          {OVERVIEW.map(({ title, text, link, linkText }, i) => (
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
