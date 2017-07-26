import React from 'react';
import PropTypes from 'prop-types';

import globalStyles from 'main.scss';
import styles from './DBBox.scss';


/**
 * Constants
 */

const ButtonText = 'Learn More';

/**
 * DBBox
 */

const propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired
};

const contextTypes = {
  router: PropTypes.object,
};

const defaultProps = {};

function DBBox({ title, subtitle, thumbnail }) {
  return (
    <section className={globalStyles.sectionWrapper}>
      <div className={styles.boxWrapper}>
        <section className={styles.DBBox}>
          <div className={styles.dbBoxImg}>
            <div className={styles.blackBox} />
            <div className={styles.thumbnailImg}>
              <img src={thumbnail} alt={title} />
            </div>
          </div>
          <div className={styles.dbBoxTextWrapper}>
            <div className={styles.dbBoxText}>
              <h3 className={globalStyles.grey}>{subtitle}</h3>
              <h2>{title}</h2>
              <div className={styles.button}>
                <div className={globalStyles.sectionBtn}>
                  <a className={globalStyles.orangeOutline} href="">{ButtonText}</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}

DBBox.propTypes = propTypes;
DBBox.contextTypes = contextTypes;
DBBox.defaultProps = defaultProps;

export default DBBox;
