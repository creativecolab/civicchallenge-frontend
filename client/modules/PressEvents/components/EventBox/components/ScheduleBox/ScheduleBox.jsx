/* eslint-disable react/no-danger */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'util/classNames';

import globalStyles from 'main.scss';
import styles from './ScheduleBox.scss';

/**
 * Constants
 */

/**
 * ScheduleBox
 */

const propTypes = {
  dayEvents: PropTypes.array.isRequired,
  eventSummary: PropTypes.array,
  eventSummaryNoImg: PropTypes.array,
  eventImg: PropTypes.string,
  eventImgAlt: PropTypes.string,
};

const contextTypes = {
  router: PropTypes.object,
};

const defaultProps = {
  eventSummary: [],
  eventSummaryNoImg: [],
  eventImg: '',
  eventImgAlt: '',
};

function ScheduleBox({ dayEvents, eventSummary, eventSummaryNoImg, eventImg, eventImgAlt }) {
  return (
    <div className={styles.scheduleWrapper}>
      {dayEvents
        .map(({ date, timeRange, dayName, dayDetails, buttonTitle, buttonLink }) => (
          <div className={styles.scheduleBox}>
            <div className={styles.date}>
              <h5 key={date}>{date}</h5>
              {timeRange && <span key={timeRange}>{timeRange}</span>}
            </div>
            <div className={styles.event}>
              <p className={styles.dayName} key={dayName}>{dayName}</p>
              {dayDetails &&
                <p
                  className={styles.eventDetails}
                  dangerouslySetInnerHTML={{
                    __html: dayDetails,
                  }}
                />
              }
              {buttonTitle &&
                <div className={classNames([globalStyles.sectionBtn, styles.eventButton])}>
                  <a className={classNames([globalStyles.salmonSmallOutline])} href={buttonLink} target="_blank" rel="noreferrer noopener">
                    {buttonTitle}
                  </a>
                </div>}
            </div>
          </div>
        ))}
      <div className={styles.eventRecapWrapper}>
        {eventImg &&
          <div className={styles.eventImg}>
            <img src={eventImg} alt={eventImgAlt} />
          </div>
        }
        {eventSummary &&
          <div className={styles.eventSummary}>
            {eventSummary.map((eventParagraph => (
              <p
                key={eventParagraph}
                dangerouslySetInnerHTML={{
                  __html: eventParagraph,
                }}
              />
            )))}
          </div>
        }
      </div>
      {eventSummaryNoImg &&
        <div className={styles.eventSummaryNoImg}>
          {eventSummaryNoImg.map((eventParagraph => (
            <p
              key={eventParagraph}
              dangerouslySetInnerHTML={{
                __html: eventParagraph,
              }}
            />
          )))}
        </div>
      }
    </div>
  );
}

ScheduleBox.propTypes = propTypes;
ScheduleBox.contextTypes = contextTypes;
ScheduleBox.defaultProps = defaultProps;

export default ScheduleBox;
