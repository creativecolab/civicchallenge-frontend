/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';

import globalStyles from 'main.scss';
import styles from './GetInvolvedCallout.scss';

/* images

import downloadIcon from './download_icon.png'; */
/**
 * Constants
 */

const sectionTitle = 'Challenge entries due in October 22 at 11:59PM';
const description = 'Check back soon to get all the details about dates, contest rules, and submission guidelines.';

const pdfText = 'Submission guidelines can be viewed ';
const link = '/codeofconduct';
const linkText = 'here';
const period = '.';
/**
 * GetInvolvedCallout
 */

const propTypes = {};

const contextTypes = {
  router: PropTypes.object,
};

const defaultProps = {};

function GetInvolvedCallout() {
  return (
    <section className={styles.getInvolvedCallout}>
      <div className={styles.jankyBox}>
        <div className={globalStyles.contentWrapper}>
          <div className={styles.calloutWrapper}>
            <h2 className={globalStyles.grey}>{sectionTitle}</h2>
            <p className={globalStyles.grey}>{description}</p>
            <div className={globalStyles.paragraphLink}>
              <p className={globalStyles.grey}>
                {pdfText}
                <a href={link}>{linkText}</a>
                {period}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

GetInvolvedCallout.propTypes = propTypes;
GetInvolvedCallout.contextTypes = contextTypes;
GetInvolvedCallout.defaultProps = defaultProps;

export default GetInvolvedCallout;
