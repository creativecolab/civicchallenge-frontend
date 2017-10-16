/* eslint-disable react/no-danger, max-len */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'util/classNames';
import styles from './JurorHeader.scss';

/**
 * Constants
 */

const JUDGING_PROCESS = [
  'Judging for the 2017 D4SD challenge will happen in two rounds:',
  'In round one, a panel of experts in human-centered design, civics, and business will assess the deliverables according to the criteria listed below. Judging will happen online after the Oct 22 11:59pm PDT deadline.  Finalists will be announced on October 25th at the Design Forward community mixer at Broadway Pier (6-9pm), on the D4SD website, as well as through email.',
  'In round two, distinguished jurors will assess the finalists during the Design Forward Summit on Oct 26th. Teams must have at least one team member present throughout the day (7am-7pm) to interact with the jurors.  Finalist teams will also deliver a two-minute verbal pitch that evening during the D4SD Awards Ceremony.',
];

const CRITERIA = [
  {
    criteriaTitle: '',
    criteriaDescription: '',
  },
  {
    criteriaTitle: 'Human-centered process',
    criteriaDescription: 'How effectively does the team involve stakeholders, obtain feedback, and leverage data to support design decisions?',
  },
  {
    criteriaTitle: 'Novelty',
    criteriaDescription: 'How unique is the solution compared to other available solutions?',
  },
  {
    criteriaTitle: 'Feasibility',
    criteriaDescription: 'How likely can this solution be implemented? Will it work in the real world?',
  },
  {
    criteriaTitle: 'Impact',
    criteriaDescription: 'How will the solution affect people? Does it have any downsides?',
  },
];

/**
 * JurorHeader
 */

const propTypes = {};

const contextTypes = {
  router: PropTypes.object,
};

const defaultProps = {};

function JurorHeader() {
  return (
    <section className={styles.jurorHeader}>
      <div className={classNames([styles.jurorHeaderText, styles.notLastSection])}>
        <h2>Judging Process</h2>
        {JUDGING_PROCESS.map(processParagraph =>
          <p key={processParagraph}>{processParagraph}</p>
        )}
      </div>
      <div className={styles.jurorHeaderText}>
        <h2>Criteria</h2>
        {CRITERIA.map(({ criteriaTitle, criteriaDescription }, i) => (
          <div>
            {criteriaTitle &&
              <div className={styles.criteriaBox}>
                <h3>{i}. {criteriaTitle}</h3>
                <span>{criteriaDescription}</span>
              </div>
            }
          </div>
        ))}
      </div>
    </section>
  );
}

JurorHeader.propTypes = propTypes;
JurorHeader.contextTypes = contextTypes;
JurorHeader.defaultProps = defaultProps;

export default JurorHeader;
