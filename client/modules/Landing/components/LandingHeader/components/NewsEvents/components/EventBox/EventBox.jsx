import React from 'react';
import PropTypes from 'prop-types';

import styles from './EventBox.scss';

// import tabIcon from './newtab_icon.png';

/**
 * Constants
 */

/**
 * EventBox
 */

const propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

const contextTypes = {
  router: PropTypes.object,
};

const defaultProps = {};

function EventBox({ title, date, link }) {
  return (
    <section className={styles.wrapper}>
      <div className={styles.boxWrapper}>
        <section className={styles.EventBox}>
          <div className={styles.eventTextWrapper}>
            <div className={styles.eventText}>
              <a href={link} rel="noopener noreferrer" target="_blank"><h2 className={styles.title}>{title}</h2></a>
              <h5 className={styles.date}>{date}</h5>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}

EventBox.propTypes = propTypes;
EventBox.contextTypes = contextTypes;
EventBox.defaultProps = defaultProps;

export default EventBox;
