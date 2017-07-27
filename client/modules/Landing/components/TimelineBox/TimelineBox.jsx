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
const description = 'This year’s theme for D4SD’s inaugural Challenge is mobility. We want YOU to develop solutions for the city’s most pressing mobility challenges using design thinking methodologies… needs revision';

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
    <section id={styles.TimelineBox} ref={props.componentRef}>
      <div className={globalStyles.contentWrapper}>
        <div className={styles.textWrapper}>
          <h1
            dangerouslySetInnerHTML={{
              __html: sectionTitle,
            }}
          />
          <p>{description}</p>
        </div>
        <Timeline />
      </div>
    </section>
  );
}

TimelineBox.propTypes = propTypes;
TimelineBox.contextTypes = contextTypes;
TimelineBox.defaultProps = defaultProps;

export default withCollectRef('TimelineBox')(TimelineBox);
