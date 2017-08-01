/* eslint-disable max-len */

import React from 'react';
import PropTypes from 'prop-types';
import { withCollectRef } from 'util/RefCollector';

import globalStyles from 'main.scss';

import Timeline from './components/Process/Process';

import styles from './TimelineBox.scss';

/* images */

/**
 * Constants
 */

const sectionTitle = 'We challenge <u>YOU</u> to design solutions that improve the experience of moving around in San Diego.';
const description = 'This year’s theme for D4SD’s inaugural Challenge is mobility. We want YOU to develop solutions for the city’s most pressing transportation-related challenges using human-centered design.';

/**
 * TimelineBox
 */

const propTypes = {
  componentRef: PropTypes.func.isRequired,
};

const contextTypes = {
  router: PropTypes.object,
};

const defaultProps = {};

function TimelineBox(props) {
  return (
    <section id={styles.timelineBox} ref={props.componentRef}>
      <div className={globalStyles.contentWrapper}>
        <div className={styles.timelineWrapper}>
          <div className={styles.textWrapper}>
            <h1
              dangerouslySetInnerHTML={{
                __html: sectionTitle,
              }}
            />
            <p
              dangerouslySetInnerHTML={{
                __html: description,
              }}
            />
          </div>
          <div className={styles.timeline}>
            <Timeline />
          </div>
        </div>
      </div>
    </section>
  );
}

TimelineBox.propTypes = propTypes;
TimelineBox.contextTypes = contextTypes;
TimelineBox.defaultProps = defaultProps;

export default withCollectRef('TimelineBox')(TimelineBox);
