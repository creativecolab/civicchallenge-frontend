/* eslint-disable max-len */

import React from 'react';
import PropTypes from 'prop-types';
import { withCollectRef } from 'util/RefCollector';

import globalStyles from 'main.scss';

import styles from './ChallengeDescription.scss';

/* images */

import challengeIcon from './the-challenge-icon.png';

/**
 * Constants
 */

const sectionTitle = 'The Challenge';
const description = 'In a new combined effort to solve complex city problems through design thinking and crowdsourcing, UC San Diego’s Design Lab—with support from the National Science Foundation, Design Forward Alliance and SCALE SD—announces the 2017 Design for San Diego (D4SD) Mobility Challenge.';
const description2 = 'We all have places to go and people to see. Whether for work or play—and by car, bike, train, bus, boat, or foot—mobility significantly affects millions on a daily basis. San Diego is culturally and economically diverse, as well as spread out, which makes getting around the city an important issue to explore.';

/**
 * ChallengeDescription
 */

const propTypes = {
  componentRef: PropTypes.func.isRequired,
};

const contextTypes = {
  router: PropTypes.object,
};

const defaultProps = {};

function ChallengeDescription(props) {
  return (
    <section id={styles.challengeDescription} ref={props.componentRef}>
      <div className={globalStyles.contentWrapper}>
        <div className={styles.challengeRow}>
          <div className={styles.challengeImg}>
            <img src={challengeIcon} alt={sectionTitle} />
          </div>
          <div className={styles.textWrapper}>
            <h1>{sectionTitle}</h1>
            <p>{description}</p>
            <p>{description2}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

ChallengeDescription.propTypes = propTypes;
ChallengeDescription.contextTypes = contextTypes;
ChallengeDescription.defaultProps = defaultProps;

export default withCollectRef('ChallengeDescription')(ChallengeDescription);
