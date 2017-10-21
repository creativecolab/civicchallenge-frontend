/* eslint-disable max-len, react/no-danger */

import React from 'react';
import PropTypes from 'prop-types';
import { withCollectRef } from 'util/RefCollector';

import globalStyles from 'main.scss';

import styles from './DesignForwardCallout.scss';

/* images */
import dfLogo from './design-forward-logo.png';
/**
 * Constants
 */

const joinUs = 'JOIN US AT Design Forward (Oct 25-26)';
const dfLink = 'http://www.designforwardsd.com/';
const EVENTS = [
  {
    date: 'On Oct 25, 6-9pm',
    details: 'D4SD Poster Showcase at the Community Mixer',
  },
  {
    date: 'On Oct 25, 6-9pm',
    details: 'D4SD Poster Showcase at the Community Mixer',
  },
];

/**
 * DesignForwardCallout
 */

const propTypes = {
  componentRef: PropTypes.func.isRequired,
};

const contextTypes = {
  router: PropTypes.object,
};

const defaultProps = {};

function DesignForwardCallout(props) {
  return (
    <section id={styles.designForwardCallout} ref={props.componentRef}>
      <div className={globalStyles.contentWrapper}>
        <div className={styles.calloutWrapper}>
          <a href={dfLink} target="_blank" rel="noopener noreferrer">
            <div className={styles.dfLogo}>
              <img src={dfLogo} alt="design forward" />
            </div>
          </a>
          <div className={styles.horizontalLine} />
          <hr className={styles.mobileLine} />
          <div className={styles.calloutText}>
            <h2>{joinUs}</h2>
            {EVENTS.map(({ date, details }) => (
              <div className={styles.datesWrapper}>
                <p className={styles.date}>{date}</p>
                <p className={styles.details}>{details}</p>
              </div>
             ))}
          </div>
        </div>
      </div>
    </section>
  );
}

DesignForwardCallout.propTypes = propTypes;
DesignForwardCallout.contextTypes = contextTypes;
DesignForwardCallout.defaultProps = defaultProps;

export default withCollectRef('DesignForwardCallout')(DesignForwardCallout);
