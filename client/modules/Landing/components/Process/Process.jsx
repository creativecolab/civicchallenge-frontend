/* eslint-disable max-len */

import React from 'react';
import PropTypes from 'prop-types';

import classNames from 'util/classNames';

import LazyInlineSvg from 'components/LazyInlineSvg/LazyInlineSvg';

import styles from './Process.scss';

import diagnose from './diagnose.svg';
import ideate from './ideate.svg';
import propose from './propose.svg';
import implement from './implement.svg';

/**
 * Constants
 */

const TIMELINE_ITEMS = [
  {
    image: diagnose,
    months: 'April - May',
    title: 'Discover Issues',
    description: 'Discover issues and find biggest challenges in the targeted problem space',
  },
  {
    image: ideate,
    months: 'June - August',
    title: 'Ideate Solutions',
    description: 'Generate multiple ways and alternative solutions to address challenges',
  },
  {
    image: propose,
    months: 'September - October',
    title: 'Prototype Concepts',
    description: 'Build mockups of solutions to move forward with testing and feedback',
  },
  {
    image: implement,
    months: 'October -',
    title: 'Take Action',
    description: 'Present best solutions to civic leaders and experts for implementation',
  },
];


/**
 * TimelineText
 */

function TimelineText({ title, description, months }) {
  return (
    <div className={styles.timelineText}>
      <div className={styles.months}>{months}</div>
      <div className={styles.title}>{title}</div>
      <div className={styles.description}>{description}</div>
    </div>
  );
}

TimelineText.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  months: PropTypes.string.isRequired,
};


/**
 * Process
 */

const propTypes = {};

const contextTypes = {
  router: PropTypes.object,
};

const defaultProps = {};

function Process() {
  const circles = TIMELINE_ITEMS.map((item, i) => (
    <div key={item.title} className={styles.circleContainer}>
      <div className={classNames([styles.circle, styles[`circle${i}`]])} />
      <div className={classNames([styles.circleOverlay, styles[`circleOverlay${i}`]])} />
      <LazyInlineSvg wrapperClassName={styles.circleIcon} src={item.image} />
    </div>
  ));

  const connectors = Array.apply(0, Array(TIMELINE_ITEMS.length - 1)).map((el, i) => {
    const j = i + 1;
    const key = `${i}${j}`;

    return (
      <div key={key} className={styles[`connector${key}`]} />
    );
  });

  const timelineText = TIMELINE_ITEMS.map(item =>
    <TimelineText
      key={item.title}
      {...item}
    />
  );

  return (
    <section className={styles.process}>
      <div className={styles.timeline}>
        <div className={styles.chart}>
          <div className={styles.circlesContainer}>{circles}</div>
          {connectors}
        </div>
        <div className={styles.timelineTextContainer}>{timelineText}</div>
      </div>
    </section>
  );
}

Process.propTypes = propTypes;
Process.contextTypes = contextTypes;
Process.defaultProps = defaultProps;

export default Process;
