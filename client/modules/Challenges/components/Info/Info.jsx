import React from 'react';
import PropTypes from 'prop-types';

import globalStyles from 'main.scss';
import styles from './Info.scss';

/**
 * Info
 */

const propTypes = {};

const contextTypes = {
  router: PropTypes.object,
};

const defaultProps = {};

function Info() {
  return (
    <section className={styles.info}>
      <p className={globalStyles.textContainer}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus dolorum eaque eligendi eveniet illo ipsa labore
        minima nesciunt nulla totam? Atque consequatur dolor ipsum iusto laudantium quibusdam soluta sunt voluptatum.
      </p>
    </section>
  );
}

Info.propTypes = propTypes;
Info.contextTypes = contextTypes;
Info.defaultProps = defaultProps;

export default Info;
