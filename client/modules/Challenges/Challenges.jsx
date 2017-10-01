/* eslint-disable max-len */

import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Header from 'components/Navbar/Navbar';
import Footer from 'components/Footer/Footer';
import StandardSectionBox from 'components/StandardSectionBox/StandardSectionBox';

import globalStyles from 'main.scss';

import DBBox from 'components/DBBox/DBBox';

import styles from './Challenges.scss';

import traffic from './traffic.png';
import autonomousCars from './autonomous.png';
import aging from './accessibility_2.jpg';
import walking from './biking.png';

/**
 * Challenges
 */

const INFO = [
  {
    sectionTitle: 'Challenge Briefs',
    text: 'The challenges below explore the concerns currently facing San Diegans while also looking towards the future of transportation. Join a conversation about the issue that concerns you most and find teammates to submit a proposal. In addition to the Grand Prize, at the Design Forward Alliance we will award prizes for the best prototype in each of the four challenge categories.',
  },
];

const DESIGN_BRIEFS = [
  {
    id: '',
    subtitle: 'Walkable and Bikeable Communities',
    title: 'How might we improve safety on the street?',
    thumbnail: walking,
    linkKey: 'walking',
  },
  {
    id: '',
    subtitle: 'IMPROVING ACCESSIBILITY',
    title: 'How do we help everyone reach their destination?',
    thumbnail: aging,
    linkKey: 'improvingaccessibility',
  },
  {
    id: '',
    subtitle: 'ENHANCING THE COMMUTER EXPERIENCE',
    title: 'What would make your commute relaxing?',
    thumbnail: traffic,
    linkKey: 'traffic',
  },
  {
    id: '',
    subtitle: 'PREPARING FOR AUTONOMOUS VEHICLES',
    title: 'How do we take our hands off the wheel?',
    thumbnail: autonomousCars,
    linkKey: 'autonomousvehicles',
  },
];


const propTypes = {};

const contextTypes = {
  router: PropTypes.object,
};

const defaultProps = {};

function Challenges() {
  return (
    <section className={styles.challenges}>
      <Helmet
        title="Challenges"
      />
      <Header />
      <div className={globalStyles.pageWrapper}>
        {INFO.map(({ sectionTitle, text }) => (
          <StandardSectionBox
            sectionTitle={sectionTitle}
            text={text}
          />
        ))}
        <div className={globalStyles.gridStyle}>
          {DESIGN_BRIEFS.map(({ title, subtitle, thumbnail, linkKey }) => (
            <DBBox
              title={title}
              subtitle={subtitle}
              thumbnail={thumbnail}
              linkUrl={`/challenges/${linkKey}`}
            />
          ))}
        </div>
      </div>
      <Footer />
    </section>
  );
}

Challenges.propTypes = propTypes;
Challenges.contextTypes = contextTypes;
Challenges.defaultProps = defaultProps;

export default Challenges;
