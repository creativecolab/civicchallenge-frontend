import React from 'react';
import PropTypes from 'prop-types';

import styles from './DBOverview.scss';

/**
 * dbHeader
 */

const propTypes = {};

const contextTypes = {
  router: PropTypes.object,
};

const defaultProps = {};

function dbHeader() {
  return (
    <div className={styles.overview}>
      <div className={styles.overviewText}>
        <h2>The Brief</h2>
        <p>The lack of accessible and affordable transportation for citizens with disabilities is a
        complex issue both in terms of economy and life quality. People with disabilities face
        individually unique challenges. For example, a person who requires crutches, a cane, or
        a walker to get around have completely different difficulties in winter weather from those
        of a person in a wheelchair. Similarly, a sight-impaired person may have more trouble with
        certain crosswalk and intersection designs than a person with good sight who uses a wheelchair.
        Certain geographic areas in the San Diego County have lesser forms of public transportation than
        others. Many of the transit systems are far a walking distances away, making it difficult
        for people to access them if they are immobile. And even when they gain access to these transit
          systems, they may find themselves posed with other problems. How can we help this group by
        easing their mobility across the city? How can we get their input about specific spots that
        needs improvement? Even the communication involved in accessibility may need to be improved.</p>
      </div>
      <div className={styles.overviewSideBar}>
        <div className={styles.currentPhase}>
          <h2>Current Phase</h2>
          <div className={styles.timeLine} />
          <span>Phase 1: </span>
          <span>Ideation</span>
        </div>
        <div className={styles.currGoingOn}>
          <h2>What&#39;s Going On Now</h2>
          <ul>
            <li>Point 1</li>
            <li>Point 2</li>
            <li>Pointe 3</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

dbHeader.propTypes = propTypes;
dbHeader.contextTypes = contextTypes;
dbHeader.defaultProps = defaultProps;

export default dbHeader;
