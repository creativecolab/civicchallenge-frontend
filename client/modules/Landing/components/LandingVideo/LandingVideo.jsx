import React from 'react';
import PropTypes from 'prop-types';

import { withCollectRef } from 'util/RefCollector';


import styles from './LandingVideo.scss';

const propTypes = {
  componentRef: PropTypes.func.isRequired,
};

const contextTypes = {
  router: PropTypes.object,
};

const defaultProps = {};

const LandingVideo = (props) => {
  return (
    <div className={styles.landingVideoContainer} ref={props.componentRef}>
      <iframe
        className={styles.landingVideo} src="https://www.youtube.com/embed/V7LxWFqMm4g?autoplay=1&rel=0&showinfo=0&vq=highres&mute=1"
        frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen
      />
    </div>
  );
};

LandingVideo.propTypes = propTypes;
LandingVideo.contextTypes = contextTypes;
LandingVideo.defaultProps = defaultProps;

export default withCollectRef('LandingVideo')(LandingVideo);
