import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'util/classNames';

import globalStyles from 'main.scss';
import styles from './ToolBox.scss';


/**
 * Constants
 */

const propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  linkUrl: PropTypes.string.isRequired,
};

/**
 * DBBox
 */

const contextTypes = {
  router: PropTypes.object,
};

const defaultProps = {};

function ToolBox() {
  return (
    <section className={classNames([globalStyles.sectionWrapper, styles.wrapper])}>
      <div className={styles.boxWrapper}>
        <section className={styles.DBBox}>
          <div className={styles.dbBoxImg}>
            <div className={styles.blackBox} />
          </div>
          <div className={styles.dbBoxTextWrapper}>
            <div className={styles.dbBoxText}>
              <h3 className={globalStyles.grey}>subtitle</h3>
              <h2>Title</h2>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}

ToolBox.propTypes = propTypes;
ToolBox.contextTypes = contextTypes;
ToolBox.defaultProps = defaultProps;

export default ToolBox;
