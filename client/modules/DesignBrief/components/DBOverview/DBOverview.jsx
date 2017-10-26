/* eslint-disable react/no-danger */
import React from 'react';
import PropTypes from 'prop-types';

/* import globalStyles from 'main.scss'; */
import styles from './DBOverview.scss';

/**
 * DBOverview
 */

const propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  figureA: PropTypes.string,
  figureALink: PropTypes.string,
};

const contextTypes = {
  router: PropTypes.object,
};

const defaultProps = {
  link: '',
  linkText: '',
  figureA: '',
  figureALink: '',
};

function DBOverview({ title, text, figureA, figureALink }) {
  return (
    <div className={styles.overview}>
      <div className={styles.overviewText}>
        <h2>{title}</h2>
        <div className={styles.overviewSummary}>
          <div className={styles.fB}>
            <img src={figureA} alt={figureALink} />
          </div>
          <span
            dangerouslySetInnerHTML={{
              __html: text,
            }}
          />
        </div>
      </div>
    </div>
  );
}

DBOverview.propTypes = propTypes;
DBOverview.contextTypes = contextTypes;
DBOverview.defaultProps = defaultProps;

export default DBOverview;
