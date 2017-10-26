/* eslint-disable max-len */

import globalStyles from 'main.scss';
import React from 'react';
import PropTypes from 'prop-types';

import facebookIcon from './icon-facebook-white.png';
import twitterIcon from './icon-twitter-white.png';
import styles from './Footer.scss';

/**
 * Constants
 */

const START_YEAR = 2017;

const SOCIAL_MEDIA = [
  {
    mediaLink: 'https://www.facebook.com/DesignForSanDiego/',
    imgSrc: facebookIcon,
    imgAlt: 'facebookIcon',
  },
  {
    mediaLink: 'https://twitter.com/Design4SD',
    imgSrc: twitterIcon,
    imgAlt: 'twitterIcon',
  },
];


/**
 * Footer
 */

const email = 'team@d4sd.org';

const propTypes = {};

const contextTypes = {
  router: PropTypes.object,
};

const defaultProps = {};

// function Footer(props, { router }) {
function Footer() {
  const currentYear = (new Date()).getFullYear();
  const copyrightYear = START_YEAR === currentYear ? currentYear : `${START_YEAR}-${currentYear}`;
  return (
    <footer className={styles.footer}>
      <section className={globalStyles.contentWrapper}>
        <div className={styles.copyright}>
          <div className={styles.copyright}><p>Copyright &copy; {copyrightYear} D4SD. All Rights Reserved. Send feedback to <a href={`mailto:${email}`}>{email}</a>.</p></div>
        </div>
        <div className={styles.mediaIcons}>
          {SOCIAL_MEDIA.map(({ mediaLink, imgSrc, imgAlt }) => (
            <a href={mediaLink} key={imgAlt} target="_blank" rel="noopener noreferrer">
              <img src={imgSrc} alt={imgAlt} />
            </a>
          ))}
        </div>
      </section>
    </footer>
  );
}

Footer.propTypes = propTypes;
Footer.contextTypes = contextTypes;
Footer.defaultProps = defaultProps;

export default Footer;
