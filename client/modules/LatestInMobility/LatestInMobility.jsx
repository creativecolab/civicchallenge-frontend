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
    title: 'Can Google-glass help the blind come close to seeing again?',
    thumbnail: googleGlass,
    linkKey: 'http://www.kansascity.com/news/local/article158958379.html',
    descr: 'Google glasses designed for blind people connects those with disabilities to a live person who describes the surroundings of the person while viewing through the glasses camera.',
  },
  {
    id: '',
    date: 'JULY 13',
    source: 'CBCNews',
    title: 'Sometimes all sign language needs is a helping glove that translates their words into text.',
    thumbnail: signLang,
    linkKey: 'http://www.cbc.ca/news/technology/wearable-tech-asl-glove-1.4195429',
    descr: 'Wearable tech gloves that can sense sign language and translate the movements into text that can be read, making communication between those with speaking disabilities and others much better.',
  },
  {
    id: '',
    date: 'MARCH 23',
    source: 'Citylab',
    title: 'How can we actually know who needs our seat on transit?',
    thumbnail: seats,
    linkKey: 'https://www.citylab.com/life/2017/03/riding-the-subway-with-an-invisible-illness/520503/',
    descr: 'This article raises the question of who deserves to be given priority on transit seats, considering the number of people who have disabilities that may not be visually identifiable.',
  },
  {
    id: '',
    date: 'JULY 12',
    source: 'EcoWatch',
    title: 'Lyft has made a pledge to power 1 billion automated electric car rides per year by 2025.',
    thumbnail: lyft,
    linkKey: 'https://www.ecowatch.com/lyft-electric-car-2458093644.html',
    descr: 'If you think the only way to drive electric is to buy electric, then think again. From ride sharing to car sharing, and short-term rentals to typical rental cars, the auto industry is making it easier for those without their own set of wheels to drive—or ride—electric.',
  },
  {
    id: '',
    date: 'JULY 21',
    source: 'Stanford News',
    title: 'Self-driving cars have eyes too, or at least cameras that provide 140 degrees of information and a 4D image.',
    thumbnail: carEyes,
    linkKey: 'http://news.stanford.edu/2017/07/21/new-camera-improve-robot-vision-virtual-reality/',
    descr: 'This article introduces a new technology, a camera that generates a four-dimensional image and captures 140 degrees of information that can help robots navigate the world, especially autonomous vehicles.',
  },
  {
    id: '',
    date: 'JULY 19',
    source: 'The Verge',
    title: ' Lobbying might be bad for road safety if Congress doesn’t fully consider the impact of AVs',
    thumbnail: lobbying,
    linkKey: 'https://www.theverge.com/2017/7/19/15998356/self-driving-car-congress-legislation-lobbying-safety',
    descr: 'Companies are lobbying to be granted the privilege of ignoring some of the current road safety measures for the testing of autonomous vehicles.',
  },
  {
    id: '',
    date: 'JULY 19',
    source: 'The San Diego Union-Tribune',
    title: 'Take a look at what a community can accomplish when they put their heads together to think of creative solutions to their shared challenges.',
    thumbnail: communityParking,
    linkKey: 'http://www.sandiegouniontribune.com/ramona-sentinel/news/local-news/sd-cm-ram-mt-woodson-mtg-0713-story.html',
    descr: 'A community group met to brainstorm ideas about alleviating some of the parking issues they face and came up with some solutions.',
  },
  {
    id: '',
    date: 'JULY 21',
    source: 'Wards Auto',
    title: 'Stop and Go traffic won’t be as stressful when the car is doing it for you, like Nissan’s ProPilot Assist.',
    thumbnail: proPilot,
    linkKey: 'http://wardsauto.com/technology/nissan-aims-ease-stress-heavy-traffic-propilot',
    descr: 'ProPilot Assist, from Nissan is supposed to help with stop-and-go traffic while taking away some of the stress of driving, it stops on its own, alerts the driver that the car has stopped, and will prompt them to put their feet on the breaks, supposedly making the process less stressful.',
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
              linkUrl={`/challenges/${linkKey}`}
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
