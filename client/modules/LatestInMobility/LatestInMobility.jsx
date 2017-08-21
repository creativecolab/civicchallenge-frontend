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
import carEyes from './imgs/july21avEyes.png';
import lobbying from './imgs/july19lobbying.png';
import communityParking from './imgs/july19communityParking.png';
import proPilot from './imgs/july21proPilot.png';

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
    descr: 'A new project out of the University of California San Diego shows how wearable technology could more easily integrate with the way people live — and that high-tech does not have to come with a high cost.',
  },
  {
    id: '',
    date: 'MARCH 23',
    source: 'Citylab',
    title: 'Improving Transit for Those with Invisible Illnesses',
    thumbnail: seats,
    linkKey: 'https://www.citylab.com/life/2017/03/riding-the-subway-with-an-invisible-illness/520503/',
    descr: 'A London agency is developing a campaign for destigmatizing the usage of disabled seating by individuals with illnesses that are not visibly identifiable by others, such as neurological disorders, chronic pain, or fatigue.',
  },
  {
    id: '',
    date: 'JULY 12',
    source: 'EcoWatch',
    title: 'Lyft to Go All Electric for Autonomous Vehicle Fleet',
    thumbnail: lyft,
    linkKey: 'https://www.ecowatch.com/lyft-electric-car-2458093644.html',
    descr: 'If you think the only way to drive electric is to buy electric, then think again. The auto industry is making it easier for those without their own set of wheels to drive—or ride—electric.',
  },
  {
    id: '',
    date: 'JULY 21',
    source: 'Stanford News',
    title: 'Researchers Create 4D camera for Improving Robot Vision',
    thumbnail: carEyes,
    linkKey: 'http://news.stanford.edu/2017/07/21/new-camera-improve-robot-vision-virtual-reality/',
    descr: 'This camera prototype could provide artificially intelligent technology with an exceptionally wide field of view and detailed depth information, all from a single image.',
  },
  {
    id: '',
    date: 'JULY 19',
    source: 'The Verge',
    title: 'Congress is Overestimating Safety of Self Driving Cars',
    thumbnail: lobbying,
    linkKey: 'https://www.theverge.com/2017/7/19/15998356/self-driving-car-congress-legislation-lobbying-safety',
    descr: 'Multiple auto companies are lobbying for the ability to circumnavigate certain road safety standards. And it’s working, Congress is set to fast-track several bills that will lift regulations for testing.',
  },
  {
    id: '',
    date: 'JULY 19',
    source: 'San Diego Union-Tribune',
    title: 'Groups Ideate Solutions for Unsafe Parking Situation',
    thumbnail: communityParking,
    linkKey: 'http://www.sandiegouniontribune.com/ramona-sentinel/news/local-news/sd-cm-ram-mt-woodson-mtg-0713-story.html',
    descr: 'Hikers are currently endangering themselves by parking along Highway 67 in Ramona to access a popular trail. A local supervisor hosted a community meeting to hammer out details with local officials and other groups.',
  },
  {
    id: '',
    date: 'JULY 21',
    source: 'Wards Auto',
    title: 'Nissan Aims to Ease Stress of Traffic with New System',
    thumbnail: proPilot,
    linkKey: 'http://wardsauto.com/technology/nissan-aims-ease-stress-heavy-traffic-propilot',
    descr: 'Nissan is bringing together adaptive cruise control and lane-keeping assist with lane-centering technology into a new featured called ProPilot Assist. The technology will assist drivers with heavy stop-and-go traffic.',
  },
  {
    id: '',
    date: 'JULY 21',
    source: 'Campus Technology',
    title: 'UNC is digitizing its campus parking permits',
    thumbnail: proPilot,
    linkKey: 'http://wardsauto.com/technology/nissan-aims-ease-stress-heavy-traffic-propilot',
    descr: 'Starting this fall, drivers will no longer need to display paper permits in their windows, and UNCC parking staff will be able to monitor vehicles through a digital system alone.',
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
