/* eslint-disable max-len, jsx-a11y/no-static-element-interactions */

import React from 'react';
import PropTypes from 'prop-types';
import ReactGA from 'react-ga';
import { withProvideRefs } from 'util/RefCollector';

import globalStyles from 'main.scss';
import styles from './LandingHeader.scss';

let TweenLite = {};
if (process.env.browser) {
  TweenLite = require('gsap/TweenLite'); // eslint-disable-line global-require
  require('gsap/ScrollToPlugin'); // eslint-disable-line global-require
}

/**
 * LandingHeader
 */

/* const ButtonText = 'Participate Now'; */

function logClick() {
  ReactGA.event({
    category: 'Registration',
    action: 'Clicked Register Today',
    label: 'Challenge Text link',
  });
}

const propTypes = {
  refs: PropTypes.object.isRequired,
};

const contextTypes = {
  router: PropTypes.object,
};

const defaultProps = {};

class LandingHeader extends React.PureComponent {
  static SCROLL_PX_PER_MS = 1000;

  _onLearnMoreClicked = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollTarget = this.props.refs.ChallengeDescription.offsetTop;
    const scrollDuration = Math.abs(scrollTop - scrollTarget) / LandingHeader.SCROLL_PX_PER_MS;

    TweenLite.to(window, scrollDuration, { scrollTo: scrollTarget });
  };

  render() {
    return (
      <section id={styles.landingHeader}>
        <div className={styles.layer} />
        <div className={globalStyles.contentWrapper}>
          <div className={styles.content}>
            <div className={styles.textWrapper}>
              <h2 className={globalStyles.white}>Design for San Diego&#39;s 2017 Civic Challenge</h2>
              <h1 className={styles.title}>How do we create a San Diego where we all move freely?</h1>
            </div>
            <div className={styles.desktop}>
              <div className={styles.buttonWrapper}>
                <div className={globalStyles.sectionBtn}>
                  <a className={globalStyles.whiteOutline} onClick={logClick} href="/getinvolved" rel="noopener noreferrer" target="_blank">Get Involved</a>
                </div>
                <p className={styles.or}>OR</p>
                <div className={globalStyles.sectionBtn}>
                  <a className={globalStyles.blue} onClick={() => { logClick(); this._onLearnMoreClicked(); }}>Learn More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

LandingHeader.propTypes = propTypes;
LandingHeader.contextTypes = contextTypes;
LandingHeader.defaultProps = defaultProps;

export default withProvideRefs(LandingHeader);
