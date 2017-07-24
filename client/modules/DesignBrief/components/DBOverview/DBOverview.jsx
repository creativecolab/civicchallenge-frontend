import React from 'react';
import PropTypes from 'prop-types';

import globalStyles from 'main.scss';
import styles from './DBOverview.scss';

/**
 * dbHeader
 */

const propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  link: PropTypes.string,
  linkText: PropTypes.string,
};

const contextTypes = {
  router: PropTypes.object,
};

const defaultProps = {
  link: '',
  linkText: '',
};

function dbHeader({ title, text, link, linkText }) {
  return (
    <div className={styles.overview}>
      <div className={styles.overviewText}>
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
      <div className={globalStyles.paragraphLink}>
        <a href={link}>{linkText}</a>
      </div>
    </div>
  );
}

dbHeader.propTypes = propTypes;
dbHeader.contextTypes = contextTypes;
dbHeader.defaultProps = defaultProps;

export default dbHeader;
