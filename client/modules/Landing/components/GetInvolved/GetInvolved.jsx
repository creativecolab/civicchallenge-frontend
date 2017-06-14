/* eslint-disable max-len */

import React from 'react';
import PropTypes from 'prop-types';
import { withCollectRef } from 'util/RefCollector';

import globalStyles from 'main.scss';
import styles from './GetInvolved.scss';


/**
 * Get Involved
 */

const propTypes = {
  componentRef: PropTypes.func.isRequired,
};

const contextTypes = {
  router: PropTypes.object,
};

const defaultProps = {};

function GetInvolved(props) {
  return (
    <section id={styles.sponsors} ref={props.componentRef}>
      <div className={styles.content}>
        <div className={styles.title}>
          <h3 className={globalStyles.ul}>Get Involved</h3>
        </div>
        <div className="{styles.sponsorsBox}">
          <p>The challenge is open to anyone who wants to improve mobility in San Diego, from students and senior citizens to entrepreneurs and designers. The process is designed to guide participants through a range of design thinking activities—such as needfinding, brainstorming, team formation, and prototyping—culminating in a showcase at the Design Forward Summit in October 2017.</p>
        </div>
      </div>
    </section>
  );
}

GetInvolved.propTypes = propTypes;
GetInvolved.contextTypes = contextTypes;
GetInvolved.defaultProps = defaultProps;

export default withCollectRef('GetInvolved')(GetInvolved);
