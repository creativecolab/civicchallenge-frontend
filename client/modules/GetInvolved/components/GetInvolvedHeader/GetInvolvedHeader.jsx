/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';

import globalStyles from 'main.scss';
import styles from './GetInvolvedHeader.scss';

/**
 * Constants
 */

const HEADER_TEXT = [
  {
    sectionTitle: 'Ready to get Involved?',
    text: 'There are multiple ways you can get involved in the D4SD Mobility Challenge. Checkout how you can make an impact below! Details about how all the activities are building up to final submission, deadline in October, learn more about submitting by downloading the full-rules and guidelines below.',
  },
];

const SUBMIT_LINK = [
  {
    submitText: 'Submission Rules and Guidelines PDF',
    link: '',
  }
];

/**
 * GetInvolvedHeader
 */

const propTypes = {};

const contextTypes = {
  router: PropTypes.object,
};

const defaultProps = {};

function GetInvolvedHeader() {
  return (
    <div className={styles.getInvolvedHeader}>
      {HEADER_TEXT.map(({ sectionTitle, text }) => (
        <div className={styles.headerWrapper}>
          <h2>{sectionTitle}</h2>
          <p>{text}</p>
        </div>
      ))}

      {SUBMIT_LINK.map(({ submitText, link }) => (
        <div className={globalStyles.paragraphLink}>
          <a href={link} rel="noopener noreferrer" target="_blank">{submitText}</a>
        </div>
      ))}
    </div>
  );
}

GetInvolvedHeader.propTypes = propTypes;
GetInvolvedHeader.contextTypes = contextTypes;
GetInvolvedHeader.defaultProps = defaultProps;

export default GetInvolvedHeader;
