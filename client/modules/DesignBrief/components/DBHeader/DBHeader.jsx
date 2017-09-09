import React from 'react';
import PropTypes from 'prop-types';

import globalStyles from 'main.scss';
import styles from './DBHeader.scss';

/**
 * Constants
 */

const rel = 'noreferrer noopener';
const target = '_blank';
const buttonText = 'Join the Discussion';
const linkUrl = 'https://join.slack.com/t/d4sd/shared_invite/MjExMjA5MDY0MjkzLTE0OTk3ODcxMjktMzIxYmRkMTJkMA';
/**
 * DBHeader
 */

const propTypes = {
  intro: PropTypes.string.isRequired,
};

const contextTypes = {
  router: PropTypes.object,
};

const defaultProps = {};

function DBHeader({ intro }) {
  return (
    <section className={styles.DBHeader}>
      <div className={styles.DBHeaderText}>
        <h2>Introduction</h2>
        <p
          dangerouslySetInnerHTML={{
            __html: intro,
          }}
        />
        <div className={styles.button}>
          <div className={globalStyles.sectionBtn}>
            <a className={globalStyles.blueOutline} href={linkUrl} rel={rel} target={target}>{buttonText}</a>
          </div>
        </div>
      </div>
    </section>
  );
}

DBHeader.propTypes = propTypes;
DBHeader.contextTypes = contextTypes;
DBHeader.defaultProps = defaultProps;

export default DBHeader;
