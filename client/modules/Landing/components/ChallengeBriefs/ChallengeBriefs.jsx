/* eslint-disable max-len */

import React from 'react';
import PropTypes from 'prop-types';
import { withCollectRef } from 'util/RefCollector';
import classNames from 'util/classNames';

import globalStyles from 'main.scss';

import DBBox from './components/DBBox/DBBox';

import styles from './ChallengeBriefs.scss';

import traffic from './traffic.png';
import autonomousCars from './autonomous.png';
import aging from './accessibility_2.jpg';
import walking from './biking.png';

/**
 * Constants
 */

/* const dummyLink = ''; */
const sectionTitle = 'Challenge Briefs';
const description = 'Mobility is about the everyday problems and pleasures to transportation and being transported.  The aim of the D4SD Mobility Challenge is to solve the issues most important to San Diego residents by focusing on four broad areas: promoting walking and biking, enhancing the commuter experience, improving accessibility, and preparing for autonomous vehicles. To get involved and submit your own innovations, first read more about the specific challenges.';

const DESIGN_BRIEFS = [
  {
    id: '',
    subtitle: 'PROMOTING WALKING AND BIKING',
    title: 'How can we avoid dangerous bike accidents?',
    thumbnail: walking,
  },
  {
    id: '',
    subtitle: 'IMPROVING ACCESSIBILITY',
    title: 'How do we help everyone reach their destination?',
    thumbnail: aging,
  },
  {
    id: '',
    subtitle: 'ENHANCING THE COMMUTER EXPERIENCE',
    title: 'Stuck in traffic? How can we make commuting fun?',
    thumbnail: traffic,
  },
  {
    id: '',
    subtitle: 'PREPARING FOR AUTONOMOUS VEHICLES',
    title: 'Driverless cars? How will this change the experience?',
    thumbnail: autonomousCars,
  }
];

/**
 * ChallengeBriefs Index
 */

const propTypes = {
  componentRef: PropTypes.func.isRequired,
};

const contextTypes = {
  router: PropTypes.object,
};

const defaultProps = {};

function ChallengeBriefs(props) {
  return (
    <section id={styles.ChallengeBriefs} ref={props.componentRef}>
      <div className={styles.contentWrapper}>
        <div className={styles.contentRow}>
          <div className={styles.textWrapper}>
            <h1>{sectionTitle}</h1>
            <p>{description}</p>
          </div>
          <div className={classNames([globalStyles.gridStyle, styles.briefsWrapper])}>
            {DESIGN_BRIEFS.map(({ title, subtitle, thumbnail }) => (
              <DBBox
                title={title}
                subtitle={subtitle}
                thumbnail={thumbnail}
                /* linkUrl={dummyLink} */
              />
            ))}
          </div>
        </div>
        {/* <div className={styles.challengeRow}>
          <div className={styles.textWrapper}>
            <h1>{sectionTitle}</h1>
            <p>{description}</p>
          </div>
        </div> */}
      </div>
    </section>
  );
}

ChallengeBriefs.propTypes = propTypes;
ChallengeBriefs.contextTypes = contextTypes;
ChallengeBriefs.defaultProps = defaultProps;

export default withCollectRef('ChallengeBriefs')(ChallengeBriefs);
