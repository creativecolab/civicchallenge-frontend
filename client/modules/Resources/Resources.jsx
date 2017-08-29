/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
/* import classNames from 'util/classNames'; */

import Navbar from 'components/Navbar/Navbar';
import Footer from 'components/Footer/Footer';
import StandardSectionBox from 'components/StandardSectionBox/StandardSectionBox';

import globalStyles from 'main.scss';

import DesignToolsBox from '../DesignTools/components/ToolBox/ToolBox';
import LatestInMobility from '../LatestInMobility/LatestInMobility';

import styles from './Resources.scss';

/* icons */
import civicCourseHeader from './imgs/civicCourse3.png';
import buildMeHeader from './imgs/buildme.png';
import openDataHeader from './imgs/data.png';

/**
 * Constants
 */

const sectionTitle = 'Resources';
const titleDescription = 'This page provides a wealth of resources to help you learn methods for human-centered design, find about the latest technology related to mobility, and get answers to your frequently asked questions.';

const description = 'New to human-centered design? These resources can help you get started.';
const description2 = 'If you find more news on Mobility, please join the online Slack discussion group and share!';

const RESOURCE_CONTENT = [
  {
    title: 'Civic Design course at UC San Diego',
    text: 'This studio course follows a human-centered process to design services for complex socio-technical systems. Students teams will conduct user research, generate ideas, and create prototypes for civic issues affecting San Diegans.',
    icon: civicCourseHeader,
    linkKey: 'http://civicdesign.ucsd.edu/',
  },
  {
    title: 'City of San Diego’s Open Data Portal',
    text: 'The official data portal for City of San Diego includes data on public safety, street repairs, transit route lines bike routes, parking meter transactions and locations, traffic volume, and traffic accidents. Use the search bar at the top to find data.',
    icon: openDataHeader,
    linkKey: 'https://data.sandiego.gov/',
  },
  {
    title: 'SAP tools for creating design-led applications',
    text: 'SAP has created a set of educational materials and tools called BUILD.ME to help developers put people first. This site explains how you should invest time in user research and design at the beginning of the product lifecycle.',
    icon: buildMeHeader,
    linkKey: 'https://www.build.me/splashapp/how-it-works',
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
          text={titleDescription}
        />
        <h2>Design Tools and Tips</h2>
        <p> {description} </p>
        <div className={globalStyles.gridStyle}>
          {RESOURCE_CONTENT.map(({ title, text, icon, linkKey }) => (
            <DesignToolsBox
              title={title}
              text={text}
              icon={icon}
              linkUrl={linkKey}
            />
          ))}
        </div>
        <div className={styles.sectionWrapper}>
          <LatestInMobility />
        </div>
        <p> {description2} </p>
      </div>
      <Footer />
    </div>
  );
}

Resources.propTypes = propTypes;
Resources.contextTypes = contextTypes;
Resources.defaultProps = defaultProps;

export default Resources;
