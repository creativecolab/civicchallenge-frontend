/* eslint-disable max-len, react/no-danger */

import React from 'react';
import PropTypes from 'prop-types';
import { withCollectRef } from 'util/RefCollector';

import globalStyles from 'main.scss';
import styles from './Register.scss';

/**
 * Constants
 */


const sectionTitle = 'Find out more about the 2017 D4SD Challenge!';
const description = 'Out of 23 entries into this year\'s challenge, we selected 8 finalists that represent a mix of our four challenge briefs<br /> (commuter experience, accessibility, biking/walking, and autonomous vehicles).';
const btnLink = '/entries';
const btnText = 'SEE FINALISTS';
const btnLink1 = '/D4SD_2017_WhitePaper.pdf';
const btnText1 = 'DOWNLOAD WHITEPAPER';

/**
 * Register
 */

const propTypes = {
  componentRef: PropTypes.func.isRequired,
};

const contextTypes = {
  router: PropTypes.object,
};

const defaultProps = {};

function Register(props) {
  return (
    <section id={styles.register} ref={props.componentRef}>
      <div className={globalStyles.contentWrapper}>
        <div className={styles.content}>
          <h1 className={globalStyles.white}>{sectionTitle}</h1>
          <p
            className={globalStyles.white}
            dangerouslySetInnerHTML={{
              __html: description,
            }}
          />
          <div className={globalStyles.sectionBtn}>
            <a className={globalStyles.whiteOutline} href={btnLink}>{btnText}</a>
            <a className={styles.pdf} href={btnLink1}>{btnText1}</a>
          </div>

        </div>
      </div>
    </section>
  );
}

Register.propTypes = propTypes;
Register.contextTypes = contextTypes;
Register.defaultProps = defaultProps;

export default withCollectRef('Register')(Register);
