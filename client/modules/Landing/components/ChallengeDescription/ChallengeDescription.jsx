/* eslint-disable max-len, react/no-danger */

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
const description = 'In a new combined effort to solve complex city problems through design thinking and crowdsourcing, <a href="http://designlab.ucsd.edu/" rel="noopener noreferrer" target="_blank">UC San Diego\'s Design Lab</a>—with support from the <a href="https://www.nsf.gov/" rel="noopener noreferrer" target="_blank">National Science Foundation</a>, <a href="http://www.designforwardsd.com/" rel="noopener noreferrer" target="_blank">Design Forward Alliance</a> and <a href="http://www.scalesd.com/" rel="noopener noreferrer" target="_blank">SCALE SD</a>—is excited to announce the 2017 Design for San Diego (D4SD) Civic Design Challenge on Mobility.';
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
    <section id="challengeDescription" className={styles.challengeDescription} ref={props.componentRef}>
      <div className={globalStyles.contentWrapper}>
        <div className={styles.challengeRow}>
          <div className={styles.challengeImg}>
            <img src={challengeIcon} alt={sectionTitle} />
          </div>
          <div className={styles.textWrapper}>
            <h1>{sectionTitle}</h1>
            <p
              dangerouslySetInnerHTML={{
                __html: description,
              }}
            />
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
