import React from 'react';
import PropTypes from 'prop-types';

import styles from './EventBox.scss';

// import tabIcon from './newtab_icon.png';

/**
 * Constants
 */
// const message = 'Link Coming Soon!';
/**
 * EventBox
 */

const propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  callToAction: PropTypes.string.isRequired,
};

const contextTypes = {
  router: PropTypes.object,
};

const defaultProps = {};

function EventBox({ title, date, link, callToAction }) {
  return (
    <section className={styles.wrapper}>
      <div className={styles.boxWrapper}>
        <section className={styles.EventBox}>
          {link ?
            <a href={link} rel="noopener noreferrer" target="_blank">
              <div className={styles.eventTextWrapper}>
                <div className={styles.eventText}>
                  <h2 className={styles.title}>{title}</h2>
                  <h5 className={styles.date}>{date}</h5>
                  <h5 className={styles.callToAction}>{callToAction}</h5>
                </div>
              </div>
            </a>
          :
            <div className={styles.eventTextWrapper}>
              <div className={styles.eventText}>
                <h2 className={styles.title}>{title}</h2>
                <h5 className={styles.date}>{date}</h5>
                <h5 className={styles.callToAction}>{callToAction}</h5>
              </div>
            </div>
          }
        </section>
      </div>
    </section>
  );
}

EventBox.propTypes = propTypes;
EventBox.contextTypes = contextTypes;
EventBox.defaultProps = defaultProps;

export default EventBox;
