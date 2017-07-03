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
      <div className={globalStyles.sectionTitle}>
        <h3>What is a Design Brief?</h3>
        <p>D4SD is collaborating with the Designdafsdf  Forward Alliance to host a 2017 large-scale human-centered
          design challenge around the complex civic issue of Mobility. People need to move around a city.
          Whether for work or play—and by car, bike, train, bus, boat, or foot— mobility significant affects the
          daily lives of millions. San Diego is culturally and economically diverse, as well as geographical
          dispersed, which makes it a ripe topic for exploring issues around transportation. The mobility
          challenges below investigate concerns currently facing San Diegans, as well as take a look to future
          transportation systems.
        </p>
      </div>

    </section>
  );
}

Info.propTypes = propTypes;
Info.contextTypes = contextTypes;
Info.defaultProps = defaultProps;

export default Info;
