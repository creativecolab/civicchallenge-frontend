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
import News from '../News/News';

import styles from './Resources.scss';

/* icons */
import civicCourseHeader from './imgs/civicCourse3.jpg';
import buildMeHeader from './imgs/buildme.jpg';
import openDataHeader from './imgs/data.jpg';

/** images */
import googleGlass from './imgs/june30googleGlass.jpg';
import signLang from './imgs/july13signLang.jpg';
import seats from './imgs/march23seats.jpg';
import lyft from './imgs/july12lyft.jpg';
import lobbying from './imgs/july19lobbying.jpg';
import communityParking from './imgs/july19communityParking.jpg';
import proPilot from './imgs/july21proPilot.jpg';
import futureCars from './imgs/may12futurecars.jpg';
import smartParking from './imgs/july12smartParkingUNC.jpg';
import blvd from './imgs/june27kansaselcajonblvd.jpg';
import bikelanes from './imgs/may30bikelanes.jpg';
import zerodeaths from './imgs/march8zerotrafficdeaths.jpg';
import ford from './imgs/jan6ford.jpg';
import lyftLA from './imgs/sept18lyftLA.jpg';

/**
 * Constants
 */
const sectionTitle = 'Resources';
const titleDescription = 'This page provides a wealth of resources to help you learn methods for human-centered design, find about the latest technology related to mobility, and get answers to your frequently asked questions.';

const newsTitle = 'Latest In Mobility';
const newsDescription = 'Cities across the globe grapple with many of the mobility issues in San Diego, click here for a list of research papers and popular articles that we have found useful.';


const description = 'New to human-centered design? These resources can help you get started.';
const description2 = 'If you find more news on Mobility, join the online Slack discussion group and share!';

const slackLink = 'https://join.slack.com/t/d4sd/shared_invite/MjExMjA5MDY0MjkzLTE0OTk3ODcxMjktMzIxYmRkMTJkMA';
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


const NEWS_ARTICLES = [
  {
    id: '',
    date: 'SEPT 18',
    source: 'CNN',
    title: 'Lyft\'s redesigned street concept could fix L.A. traffic',
    thumbnail: lyftLA,
    linkKey: 'http://money.cnn.com/2017/09/18/technology/future/lyft-streets-autonomous-vehicles/index.html',
    descr: 'Lyft and transportation experts illustrate the benefits of coordinating autonomous vehicles, bike lanes, public transit and more greenspace.',
  },
  {
    id: '',
    date: 'MAY 12',
    source: 'CityLab',
    title: 'How does a city plan for a future with autonomous cars?',
    thumbnail: futureCars,
    linkKey: 'https://www.citylab.com/transportation/2017/05/8-bright-ideas-for-driverless-cities/526446/',
    descr: 'Could self-driving cars bring on more affordable housing? Should car companies slap a “warning label” on private autos? At a national summit of mobility leaders, some big thoughts came up.',
  },
  {
    id: '',
    date: 'JULY 19',
    source: 'SD Union-Tribune',
    title: 'A Local Community Solves a Dangerous Parking Situation',
    thumbnail: communityParking,
    linkKey: 'http://www.sandiegouniontribune.com/ramona-sentinel/news/local-news/sd-cm-ram-mt-woodson-mtg-0713-story.html',
    descr: 'Hikers are currently endangering themselves by parking along Highway 67 to access a popular trail in Ramona. A local supervisor hosted a community meeting to hammer out details with local officials and other groups.',
  },
  {
    id: '',
    date: 'JULY 12',
    source: 'EcoWatch',
    title: 'Lyft to Go All Electric for Autonomous Vehicle Fleet',
    thumbnail: lyft,
    linkKey: 'https://www.ecowatch.com/lyft-electric-car-2458093644.html',
    descr: 'If you think the only way to drive electric is to buy electric, then think again. Ride sharing companies like Lyft and Uber will be going all electric for their fleet of autonomous cars.',
  },
  {
    id: '',
    date: 'JUNE 27',
    source: 'San Diego Reader',
    title: 'Should the city engineers have made safety improvements?',
    thumbnail: blvd,
    linkKey: 'https://www.sandiegoreader.com/news/2017/jun/27/ticker-city-engineers-changes-kansas-el-cajon-bl/#',
    descr: 'Traffic engineers maintain that a traffic intersection that has caused a string of pedestrian deaths does not require a traffic signal or warrant improvements for safety.',
  },
  {
    id: '',
    date: 'MARCH 8',
    source: 'KPBS',
    title: 'How will the San Diego City Council eliminate all traffic deaths by 2025?',
    thumbnail: zerodeaths,
    linkKey: 'http://www.kpbs.org/news/2017/jul/20/san-diego-city-council-vision-zero-traffic-safety/',
    descr: 'The San Diego City Council heard a plan that hopes to eliminate all traffic deaths by 2025 and make travel safer for pedestrians and bicyclists.',
  },
  {
    id: '',
    date: 'JULY 19',
    source: 'The Verge',
    title: 'Has Congress Overestimated the Safety of Self Driving Cars?',
    thumbnail: lobbying,
    linkKey: 'https://www.theverge.com/2017/7/19/15998356/self-driving-car-congress-legislation-lobbying-safety',
    descr: 'Multiple auto companies are lobbying for the ability to circumnavigate certain road safety standards. And it’s working, Congress is set to fast-track several bills that will lift regulations for testing.',
  },
  {
    id: '',
    date: 'JUNE 30',
    source: 'The Kansas City Star',
    title: 'Helping the Blind Experience World with Google Glass',
    thumbnail: googleGlass,
    linkKey: 'http://www.kansascity.com/news/local/article158958379.html',
    descr: 'Smart glasses by Google allow blind and visually impaired individuals to experience their surroundings by connecting them to live “agents” who describe what the glasses’ camera is recording.',
  },
  {
    id: '',
    date: 'JAN 6',
    source: 'Wired',
    title: 'Ford\'s future is filled with self-driving cars and drones',
    thumbnail: ford,
    linkKey: 'https://www.wired.com/2016/01/fords-future-is-filled-with-self-driving-cars-and-drones/',
    descr: 'How is Ford integrating technological breakthroughs like self-driving cars and drones to become an auto and \'mobility\' company?',
  },
  {
    id: '',
    date: 'JULY 21',
    source: 'Wards Auto',
    title: 'Semi-Automatic Cruise Control Tech Aims to Ease Traffic',
    thumbnail: proPilot,
    linkKey: 'http://wardsauto.com/technology/nissan-aims-ease-stress-heavy-traffic-propilot',
    descr: 'Nissan is bringing together adaptive cruise control and lane-keeping assist with lane-centering technology into a new featured called ProPilot Assist. The technology will assist drivers with heavy stop-and-go traffic.',
  },
  {
    id: '',
    date: 'JULY 21',
    source: 'Campus Technology',
    title: 'Smarter Parking Systems Save Time and Money. This Campus Made Digital Parking Permits.',
    thumbnail: smartParking,
    linkKey: 'https://campustechnology.com/articles/2017/07/06/unc-charlotte-gets-smart-with-parking-on-campus.aspx',
    descr: 'Starting this fall, drivers will no longer need to display paper permits in their windows, and UNCC parking staff will be able to monitor vehicles through a digital system alone.',
  },
  {
    id: '',
    date: 'JULY 13',
    source: 'CBCNews',
    title: 'Researchers Create Glove that Translates ASL into Text',
    thumbnail: signLang,
    linkKey: 'http://www.cbc.ca/news/technology/wearable-tech-asl-glove-1.4195429',
    descr: 'A new project out of the University of California San Diego shows how wearable technology could improve the lives of people with hearing impairments, by translating sign language into text.',
  },
  {
    id: '',
    date: 'MAY 30',
    source: 'The San Diego Union Tribune',
    title: 'Are bike lanes bad for business?',
    thumbnail: bikelanes,
    linkKey: 'http://www.sandiegouniontribune.com/news/environment/sd-me-carwars-bike-lanes-201705230-story.html',
    descr: 'This article is a discussion of how bike lanes affect businesses, including their influence when the space needed to create bike lanes is factored in.',
  },
  {
    id: '',
    date: 'MARCH 23',
    source: 'Citylab',
    title: 'Improving Public Transit for Those with Invisible Illnesses',
    thumbnail: seats,
    linkKey: 'https://www.citylab.com/life/2017/03/riding-the-subway-with-an-invisible-illness/520503/',
    descr: 'Many transit riders suffer from an invisible illness—such as neurological disorders or chronic pain— that prevents others from sharing their seat. This London agency aims to help.',
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
              key={linkKey}
              title={title}
              text={text}
              icon={icon}
              linkUrl={linkKey}
            />
          ))}
        </div>
        <div className={styles.sectionWrapper}>
          <News sectionTitle={newsTitle} description={newsDescription} articles={NEWS_ARTICLES} />
        </div>
        <div className={styles.callOut}>
          <div className={styles.callOutWrapper}>
            <p> {description2} </p>
            <div className={globalStyles.sectionBtn}>
              <a className={globalStyles.whiteOutline} href={slackLink} target="_blank" rel="noopener noreferrer">share now</a>
            </div>
          </div>
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
