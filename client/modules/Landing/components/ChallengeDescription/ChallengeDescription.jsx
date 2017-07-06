/* eslint-disable max-len */

import React from 'react';
import PropTypes from 'prop-types';
import { withCollectRef } from 'util/RefCollector';

import globalStyles from 'main.scss';
import styles from './ChallengeDescription.scss';


/**
 * ChallengeDescription
 */

const propTypes = {
  componentRef: PropTypes.func.isRequired,
};

const contextTypes = {
  router: PropTypes.object,
};

const defaultProps = {};

function ChallengeDescription(props) {
  return (
    <section id={styles.ChallengeDescription} ref={props.componentRef}>
      <div className={globalStyles.sectionTitle}>
        <h1>The Challenge</h1>
        <p>Let’s see what Chef Dee got that they don’t want us to eat. The key to more success is to have a lot of pillows.
        I’m giving you cloth talk, cloth. Special cloth alert, cut from a special cloth. Look at the sunset, life is amazing,
        life is beautiful, life is what you make it. You do know, you do know that they don’t want you to have lunch. I’m
        keeping it real with you, so what you going do is have lunch. Congratulations, you played yourself.</p>
      </div>
    </section>
  );
}

ChallengeDescription.propTypes = propTypes;
ChallengeDescription.contextTypes = contextTypes;
ChallengeDescription.defaultProps = defaultProps;

export default withCollectRef('ChallengeDescription')(ChallengeDescription);
