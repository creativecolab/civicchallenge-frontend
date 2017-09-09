/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
/* import classNames from 'util/classNames'; */

import globalStyles from 'main.scss';

import styles from './LatestInMobility.scss';

import NewsBox from './components/NewsBox/NewsBox';

/** images */
import googleGlass from './imgs/june30googleGlass.png';
import signLang from './imgs/july13signLang.png';
import seats from './imgs/march23seats.png';
import lyft from './imgs/july12lyft.png';
import lobbying from './imgs/july19lobbying.png';
import communityParking from './imgs/july19communityParking.png';
import proPilot from './imgs/july21proPilot.png';
import futureCars from './imgs/may12futurecars.jpg';
import smartParking from './imgs/july12smartParkingUNC.png';
import blvd from './imgs/june27kansaselcajonblvd.png';
import bikelanes from './imgs/may30bikelanes.jpg';
import zerodeaths from './imgs/march8zerotrafficdeaths.jpg';
import ford from './imgs/jan6ford.jpg';
/**
 * Constants
 */

const sectionTitle = 'Latest In Mobility';
const description = 'Cities across the globe grapple with many of the mobility issues in San Diego, click here for a list of research papers and popular articles that we have found useful.';


/**
 * Resources
 */

const propTypes = {};

const NEWS_ARTICLES = [
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
    date: 'JULY 13',
    source: 'CBCNews',
    title: 'Researchers Create Glove that Translates ASL into Text',
    thumbnail: signLang,
    linkKey: 'http://www.cbc.ca/news/technology/wearable-tech-asl-glove-1.4195429',
    descr: 'A new project out of the University of California San Diego shows how wearable technology could improve the lives of people with hearing impairments, by translating sign language into text.',
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
    date: 'MAY 12',
    source: 'CityLab',
    title: 'How does a city plan for a future filled with autonomous cars?',
    thumbnail: futureCars,
    linkKey: 'https://www.citylab.com/transportation/2017/05/8-bright-ideas-for-driverless-cities/526446/',
    descr: 'Could self-driving cars bring on more affordable housing? Should car companies slap a “warning label” on private autos? At a national summit of mobility leaders, some big thoughts came up.',
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
    date: 'JAN 6',
    source: 'Wired',
    title: 'Ford\'s future is filled with self-driving cars and drones',
    thumbnail: ford,
    linkKey: 'https://www.wired.com/2016/01/fords-future-is-filled-with-self-driving-cars-and-drones/',
    descr: 'How is Ford integrating technological breakthroughs like self-driving cars and drones to become an auto and \'mobility\' company?',
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
    date: 'JUNE 27',
    source: 'San Diego Reader',
    title: 'Should the city engineers have made safety improvements?',
    thumbnail: blvd,
    linkKey: 'https://www.sandiegoreader.com/news/2017/jun/27/ticker-city-engineers-changes-kansas-el-cajon-bl/#',
    descr: 'Traffic engineers maintain that a traffic intersection that has caused a string of pedestrian deaths does not require a traffic signal or warrant improvements for safety.',
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
    date: 'MARCH 8',
    source: 'KPBS',
    title: 'How will the San Diego City Council eliminate all traffic deaths by 2025?',
    thumbnail: zerodeaths,
    linkKey: 'http://www.kpbs.org/news/2017/jul/20/san-diego-city-council-vision-zero-traffic-safety/',
    descr: 'The San Diego City Council heard a plan that hopes to eliminate all traffic deaths by 2025 and make travel safer for pedestrians and bicyclists.',
  },
];

/*
  {
    id: '',
    date: 'JANUARY 5',
    source: 'Entrepreneur',
    title: 'With Hyundai’s new legs, paraplegics and the elderly may be able to walk normally.',
    thumbnail: walking,
    linkKey: 'https://www.entrepreneur.com/article/287388',
    descr: 'Hyundai has begun to showcase wearable robot legs that are intended to help paraplegics and the elderly.',
  },
*/

const contextTypes = {
  router: PropTypes.object,
};

const defaultProps = {};

function LatestInMobility() {
  return (
    <div className={styles.resources}>
      <div className={styles.headerText}>
        <h2>{sectionTitle}</h2>
        <p>{description}</p>
      </div>
      <div className={styles.challenge}>
        <div className={globalStyles.gridStyle}>
          {NEWS_ARTICLES.map(({ title, date, thumbnail, linkKey, descr, source }) => (
            <NewsBox
              title={title}
              date={date}
              thumbnail={thumbnail}
              descr={descr}
              source={source}
              linkUrl={linkKey}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

LatestInMobility.propTypes = propTypes;
LatestInMobility.contextTypes = contextTypes;
LatestInMobility.defaultProps = defaultProps;

export default LatestInMobility;
