import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

import styles from './About.scss';

/**
 * About
 */

const propTypes = {};

const contextTypes = {
  router: PropTypes.object,
};

const defaultProps = {};

function About(props, { router }) {
  return (
    <div className={styles.about}>
      Path: {router.location.pathname}
      <br />
      <Link to="/">Back to homepage</Link>
    </div>
  );
}

About.propTypes = propTypes;
About.contextTypes = contextTypes;
About.defaultProps = defaultProps;

export default About;
