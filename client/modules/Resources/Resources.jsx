/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import classNames from 'util/classNames';

import Navbar from 'components/Navbar/Navbar';
import Footer from 'components/Footer/Footer';
import StandardSectionBox from 'components/StandardSectionBox/StandardSectionBox';

import globalStyles from 'main.scss';

import ResourceBox from './components/ResourceBox/ResourceBox';

import styles from './Resources.scss';

/* icons */
import toolsIcon from './icon-tools.png';
import latestIcon from './icon-latest.png';
import faqIcon from './icon-faq.png';

/**
 * Constants
 */

const sectionTitle = 'Resources';
const description = 'This page provides a wealth of resources to help you learn methods for human-centered design, find about the latest technology related to mobility, and get answers to your frequently asked questions.';

const RESOURCE_CONTENT = [
  {
    title: 'Design Tools & Tips',
    text: 'The human-centered design process involves discovering needs through user research methods, brainstorming ideas, prototyping the best ideas, and testing your solutions with real users.',
    icon: toolsIcon,
  },
  {
    title: 'Latest in Mobility',
    text: 'Cities across the globe grapple with many of the mobility issues in San Diego, click here for a list of research papers and popular articles that we have found useful.',
    icon: latestIcon,
  },
  {
    title: 'FAQs',
    text: 'Got questions? We’ve got answers! Click here for information about the competition, to how to find a team, submit your design concepts and access the D4SD Slack discussions.',
    icon: faqIcon,
  },
];

/**
 * Resources
 */

const propTypes = {};

const contextTypes = {
  router: PropTypes.object,
};

const defaultProps = {};

function Resources() {
  return (
    <div className={styles.resources}>
      <Helmet
        title="Resources"
      />
      <Navbar />

      <div className={globalStyles.contentWrapper}>
        <StandardSectionBox
          sectionTitle={sectionTitle}
          text={description}
        />
        <div className={classNames([globalStyles.gridStyle, styles.gridWrapper])}>
          {RESOURCE_CONTENT.map(({ title, text, icon }) => (
            <ResourceBox
              title={title}
              text={text}
              icon={icon}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

Resources.propTypes = propTypes;
Resources.contextTypes = contextTypes;
Resources.defaultProps = defaultProps;

export default Resources;
