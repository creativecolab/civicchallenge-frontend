/* eslint-disable max-len */

import React from 'react';
import PropTypes from 'prop-types';
import { withCollectRef } from 'util/RefCollector';

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

const dummyLink = '';
const sectionTitle = 'Challenge Briefs';
const description = 'We all have places to go and people to see. Whether for work or play—and by car, bike, train, bus, boat, or foot—mobility significantly affects millions on a daily basis. San Diego is culturally and economically diverse, as well as spread out, which makes getting around the city an important issue to explore.';

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
          <div className={globalStyles.gridStyle}>
            {DESIGN_BRIEFS.map(({ title, subtitle, thumbnail }) => (
              <DBBox
                title={title}
                subtitle={subtitle}
                thumbnail={thumbnail}
                linkUrl={dummyLink}
              />
            ))}
          </div>
          <div className={styles.textWrapper}>
            <h1>{sectionTitle}</h1>
            <p>{description}</p>
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
