import React from 'react';
import PropTypes from 'prop-types';

/* import globalStyles from 'main.scss'; */
import styles from './DBOverview.scss';

/**
 * dbHeader
 */

const propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
/* link: PropTypes.string,
  linkText: PropTypes.string, */
  figureA: PropTypes.string,
  figureALink: PropTypes.string,
  /* figureB: PropTypes.string,
  figureBLink: PropTypes.string,
  figureC: PropTypes.string,
  figureCLink: PropTypes.string, */
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

/* function dbHeader({ title, text, link, linkText }) { */
function dbHeader({ title, text, figureA, figureALink }) {
  return (
    <div className={styles.overview}>
      <div className={styles.overviewText}>
        <h2>{title}</h2>
        {/* <div className={styles.fA}>
          <img src={figureA} alt={figureALink} />
        </div> */}
        <p>
          <div className={styles.fB}>
            <img src={figureA} alt={figureALink} />
          </div>
          <span
            dangerouslySetInnerHTML={{
              __html: text,
            }}
          />
          {/* <div className={styles.fC} />
          <img src={figureB} href={figureBLink}</div> */}
        </p>
      </div>
      {/* <div className={globalStyles.paragraphLink}>
        <a href={link}>{linkText}</a>
      </div> */}
    </div>
  );
}

dbHeader.propTypes = propTypes;
dbHeader.contextTypes = contextTypes;
dbHeader.defaultProps = defaultProps;

export default dbHeader;
