/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
/* import classNames from 'util/classNames'; */

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
    text: 'New to human-centered design? Click below for a curated list of resources to help you learn and get started on learning human-centered design today.',
    icon: toolsIcon,
    linkKey: 'designtoolsandtips',
  },
  {
    title: 'Latest in Mobility',
    text: 'Cities across the globe grapple with many of the mobility issues in San Diego, click here for a list of research papers and popular articles that we have found useful.',
    icon: latestIcon,
    linkKey: 'latestinmobility',
  },
  {
    title: 'FAQs',
    text: 'Got questions? Click here for information about the competition, to how to find a team, submit your design concepts and access the D4SD Slack discussions.',
    icon: faqIcon,
    linkKey: 'faqs',
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

      <div className={globalStyles.pageWrapper}>
        <StandardSectionBox
          sectionTitle={sectionTitle}
          text={description}
        />
        <div className={globalStyles.gridStyle}>
          {RESOURCE_CONTENT.map(({ title, text, icon, linkKey }) => (
            <ResourceBox
              title={title}
              text={text}
              icon={icon}
              linkUrl={`/resources/${linkKey}`}
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
