/* eslint-disable max-len, react/no-danger  */

import React from 'react';
import PropTypes from 'prop-types';

import classNames from 'util/classNames';

import LazyInlineSvg from 'components/LazyInlineSvg/LazyInlineSvg';

import globalStyles from 'main.scss';
import styles from './Process.scss';

import diagnose from './discover.svg';
import ideate from './ideate.svg';
import propose from './action.svg';
import implement from './prototype.svg';

/**
 * Constants
 */

const TIMELINE_ITEMS = [
  {
    image: diagnose,
    months: '',
    title: 'Discover',
    description: 'Frame the most significant<br />challenges around mobility<br />in San Diego',
  },
  {
    image: ideate,
    months: '',
    title: 'Ideate',
    description: 'Generate many creative<br />solutions to address the key<br />challenges',
  },
  {
    image: propose,
    months: '',
    title: 'Prototype',
    description: 'Form teams and build<br />mockups of solutions',
  },
  {
    image: implement,
    months: '',
    title: 'Implement',
    description: 'Submit solutions for <br />judging by civic leaders<br />and experts',
  },
];


/**
 * TimelineText
 */

function TimelineText({ active, title, description, i, months }) {
  const classes = [styles.timelineText, styles[`timelineText${i}`]];
  if (!active) {
    classes.push(styles.inactiveText);
  }

  return (
    <div className={classNames(classes)}>
      <div className={styles.months}>{months}</div>
      <div className={styles.title}><h2 className={globalStyles.white}>{title}</h2></div>
      <div
        className={styles.description}
        dangerouslySetInnerHTML={{
          __html: description,
        }}
      />
    </div>
  );
}

TimelineText.propTypes = {
  active: PropTypes.bool,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  i: PropTypes.number.isRequired,
  months: PropTypes.string.isRequired,
};

TimelineText.defaultProps = {
  active: true,
};


/**
 * Process
 */

const propTypes = {
  phase: PropTypes.number,
  mini: PropTypes.bool,
};

const contextTypes = {
  router: PropTypes.object,
};

const defaultProps = {
  phase: null,
  mini: false,
};

function Process({ phase, mini }) {
  const circles = TIMELINE_ITEMS.map((item, i) => {
    const containerClasses = [styles.circleContainer];
    if (phase !== null) {
      if (i <= phase) {
        containerClasses.push(styles.active);
      } else {
        containerClasses.push(styles.inactive);
      }
    }

    return (
      <div key={item.title} className={classNames(containerClasses)}>
        <div className={classNames([styles.circle, styles[`circle${i}`]])} />
        <div className={classNames([styles.circleOverlay, styles[`circleOverlay${i}`]])} />
        <LazyInlineSvg wrapperClassName={styles.circleIcon} src={item.image} />
      </div>
    );
  });

  const connectors = Array.apply(0, Array(TIMELINE_ITEMS.length - 1)).map((el, i) => {
    const j = i + 1;
    const key = `${i}${j}`;
    const classes = [styles[`connector${key}`]];

    if (phase !== null) {
      if (i <= (phase - 1)) {
        classes.push(styles.active);
      } else {
        classes.push(styles.inactive);
      }
    }

    return (
      <div key={key} className={classNames(classes)} />
    );
  });

  let timelineText = null;
  const processClass = [styles.process];
  if (!mini) {
    const timelineItems = TIMELINE_ITEMS.map((item, i) => {
      let isActive = true;
      if (phase !== null) {
        isActive = phase === i;
      }

      return (
        <TimelineText
          key={item.title}
          active={isActive}
          i={i}
          {...item}
        />
      );
    });
    timelineText = <div className={styles.timelineTextContainer}>{timelineItems}</div>;
  } else {
    processClass.push(styles.mini);
  }

  return (
    <section className={classNames(processClass)}>
      <div className={styles.timeline}>
        <div className={styles.chart}>
          <div className={styles.circlesContainer}>{circles}</div>
          {connectors}
        </div>
        {timelineText}
      </div>
      <br />
    </section>
  );
}

Process.propTypes = propTypes;
Process.contextTypes = contextTypes;
Process.defaultProps = defaultProps;

export default Process;
