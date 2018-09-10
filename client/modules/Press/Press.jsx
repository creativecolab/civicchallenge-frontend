/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
/* import classNames from 'util/classNames'; */

import Navbar from 'components/Navbar/Navbar';
import Footer from 'components/Footer/Footer';
import StandardSectionBox from 'components/StandardSectionBox/StandardSectionBox';

import globalStyles from 'main.scss';

import News from '../News/News';

import styles from './Press.scss';

/**
 * Images
 */
import dfs17 from './imgs/designForwardSummit17.jpeg';
import designWorldCapital from './imgs/designWorldCapital.jpg';
import xconomy from './imgs/xconomy.jpg';
import hackathon from './imgs/hackathon.jpg';
import ucsdnews from './imgs/ucsdnews.jpg';
import timesofsd from './imgs/timesofsd.jpg';

/**
 * Constants
 */

const sectionTitle = 'Press';
// const titleDescription = 'This page provides a wealth of press to help you learn methods for human-centered design, find about the latest technology related to mobility, and get answers to your frequently asked questions.';

/**
 * Articles
 */
const ARTICLES = [
  {
    id: '',
    date: 'FALL 2017',
    source: 'SAN DIEGO MAGAZINE',
    title: '10 Takeaways from the Design Forward Summit 2017',
    thumbnail: dfs17,
    linkKey: 'http://www.sandiegomagazine.com/Blogs/Happenings/Fall-2017/10-Takeaways-from-Design-Forward-Summit-2017',
    descr: 'San Diego Magazine\'s marketing art director shares some useful advice for designers',
  },
  {
    id: '',
    date: 'OCT 2017',
    source: 'SAN DIEGO UNION TRIBUNE',
    title: 'Is San Diego a \'Design World Capital\'?',
    thumbnail: designWorldCapital,
    linkKey: 'http://www.sandiegouniontribune.com/business/growth-development/sd-fi-design-20171019-story.html',
    descr: '',
  },
  {
    id: '',
    date: 'OCT 2017',
    source: 'XCONOMY',
    title: 'Lab Focused on Human-Centered Design Moves to Put San Diego on Map',
    thumbnail: xconomy,
    linkKey: 'https://www.xconomy.com/san-diego/2017/10/19/lab-focused-on-human-centered-design-moves-to-put-san-diego-on-map/',
    descr: '',
  },
  {
    id: '',
    date: 'SEP 2017',
    source: 'SAN DIEGO UNION TRIBUNE',
    title: 'Public invited to all-night hackathon to solve San Diego\'s commuting nightmare',
    thumbnail: hackathon,
    linkKey: 'http://www.sandiegouniontribune.com/business/growth-development/sd-fi-mobility-20170915-story.html',
    descr: 'Making commuting more enjoyable is one of the design challenges in the Design for San Diego challenge.',
  },
  {
    id: '',
    date: 'SEP 2017',
    source: 'UC SAN DIEGO NEWS',
    title: 'Public Invited to Design Solutions to Our City’s Biggest Issues',
    thumbnail: ucsdnews,
    linkKey: 'https://ucsdnews.ucsd.edu/index.php/pressrelease/public-invited-to-design-solutions-to-our-citys-biggest-issues',
    descr: 'Mayor and UC San Diego Chancellor slated to kick off city-wide civic design challenge on transportation and mobility on Sept. 21',
  },
  {
    id: '',
    date: 'SEP 2017',
    source: 'TIMES OF SAN DIEGO',
    title: 'UCSD Challenges Public to Tackle San Diego’s Transportation Issues',
    thumbnail: timesofsd,
    linkKey: 'https://timesofsandiego.com/tech/2017/09/07/ucsd-challenges-public-to-tackle-san-diegos-transportation-issues/',
    descr: '',
  },
];

/**
 * Press
 */

const propTypes = {};

const contextTypes = {
  router: PropTypes.object,
};

const defaultProps = {};

function Press() {
  return (
    <div className={styles.press}>
      <Helmet
        title="Press"
      />
      <Navbar />
      <div className={globalStyles.pageWrapper}>
        <StandardSectionBox
          sectionTitle={sectionTitle}
          // text={titleDescription}
        />
        <News articles={ARTICLES} />
      </div>
      <Footer />
    </div>
  );
}

Press.propTypes = propTypes;
Press.contextTypes = contextTypes;
Press.defaultProps = defaultProps;

export default Press;
