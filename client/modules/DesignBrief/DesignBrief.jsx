/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';

import DBHeader from './components/DBHeader/DBHeader';
import DBOverview from './components/DBOverview/DBOverview';
import Resources from './components/Resources/Resources';

import styles from './DesignBrief.scss';

/**
 * Constants
 */

const OVERVIEW = [
  {
    title: 'How do you move around if you cannot see?',
    text: 'Accessibility issues are more pronounced in some parts of San Diego County, where there are fewer alternate forms of public transportation---e.g., transit stations that are far apart, less regular bus or trolley routes. Although, even with better access to these transit systems, people with disabilities might also struggle when navigating other passengers. How can we help this group by reducing the strain of these and other mobility pains? What are the best ways to connect with this population of riders, and actively get their input about specific spots that need improvement? Even the design of that “feedback” may need improvement! Donec facilisis tortor ut augue lacinia, at viverra est semper. Sed sapien metus, scelerisque nec pharetra id, tempor a tortor. Donec facilisis tortor ut augue lacinia, at viverra est semper. Sed sapien metus, scelerisque nec pharetra id, tempor a tortor Donec facilisis tortor ut augue lacinia, at viverra est semper. Sed sapien metus, scelerisque nec pharetra id, tempor a tortor. PellentesqueDonec facilisis tortor ut augue lacinia, at viverra est semper. Sed sapien metus, scelerisque nec pharetra id, tempor a tortor. Pellentesque',
    link: '',
    linkText: 'Discuss this in Slack',
  },
  {
    title: 'How do you navigate stairs in a wheelchair?',
    text: 'Nam dapibus nisl vitae elit fringilla rutrum. Aenean sollicitudin, erat a elementum rutrum, neque sem pretium metus, quis mollis nisl nunc et massa. Vestibulum sed metus in lorem tristique ullamcorper id vitae erat. Nulla mollis sapien sollicitudin lacinia lacinia. Vivamus facilisis dolor et massa placerat, at vestibulum nisl egestas. Nullam rhoncus lacus non odio luctus, eu condimentum mauris ultrices. Praesent blandit, augue a posuere aliquam, arcu tortor feugiat turpis, quis lacinia augue sapien at tellus. Cras ut erat magna. Morbi nibh ante, condimentum vestibulum tempus a, tristique et velit. Sed semper aliquet ante. Quisque tempus arcu sapien, id convallis turpis dictum quis. Nunc commodo vitae risus sit amet sollicitudin. Sed id facilisis sem.',
    link: '',
    linkText: 'Discuss this in Slack',
  },
];

const RESOURCES = {
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
};

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
          headerText={'Design Brief'}
          subheaderText={''}
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
            <a href="#learningresources">
              <li className={currentSection === DesignBrief.CURRENTSECTION_RESOURCES ? styles.current : ''}>Learning Resources</li>
            </a>
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

          <div id={'learningresources'} ref={(el) => { this.resources = el; }}>
            <Resources
              title={RESOURCES.challengeName}
              external={RESOURCES.external}
              news={RESOURCES.news}
            />
          </div>

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
