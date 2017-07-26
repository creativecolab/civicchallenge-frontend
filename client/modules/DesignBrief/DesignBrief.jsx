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
    text: 'Most of us take our eyes and ears for granted. For those with sensory disabilities, navigating the city presents a major challenge. For the blind and those with poor vision, it can be difficult to walk through urban environments and to take public transit. San Diego’s Metropolitan Transit System has outfitted all stations with raised letters and braille plates identifying the route and direction (North, South, East, West), but challenges remain. For example, even the step onto a train can be intimidating. What are other mobility challenges faced by the visually impaired? For individuals who are deaf or hearing impaired, the biggest challenge is lack of auditory cues. For example, a deaf individual cannot hear a big truck bearing down or loud sirens from an ambulance. How might we create services and products that help hearing-impaired individuals stay aware of their surroundings?',
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

const RESOURCES = [
  {
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
  },
];

/**
 * DesignBrief
 */


const propTypes = {};

const contextTypes = {
  router: PropTypes.object,
};

const defaultProps = {};

function DesignBrief() {
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

        <DBHeader />

        {OVERVIEW.map(({ title, text, link, linkText }) => (
          <div className={styles.contentWrapper}>
            <DBOverview
              title={title}
              text={text}
              link={link}
              linkText={linkText}
            />
          </div>
        ))}

        {RESOURCES.map(({ challengeName, external, news }) => (
          <Resources
            title={challengeName}
            external={external}
            news={news}
          />
        ))}

      </section>

      <Footer />

    </div>
  );
}

DesignBrief.propTypes = propTypes;
DesignBrief.contextTypes = contextTypes;
DesignBrief.defaultProps = defaultProps;

export default DesignBrief;
