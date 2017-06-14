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
          <h1>This challenge is a little different because we do the research and brainstorming together!</h1>
          <ul>
            <li>Once you join&#44; we&#39;ll add you to a discussion forum where&#44; throughout July&#44; we will identify the community&#39;s needs and come up with solutions.</li>
            <li>In August&#44; we&#39;ll switch into contest mode&#44; when you&#39;ll start prototyping an idea of your choice as part of a team or on your own.</li>
            <li>In October&#44; you&#39;ll show us your awesome work and give your fellow competitors feedback.</li>
            <li>On October 26th&#44; 2017&#44; we&#39;ll showcase the best projects and award the winners at Design Forward&#39;s 2017 Summit.</li>
            <li>From there&#44; the designers of the winning projects will get the opportunity to meet with city leaders to discuss their projects and take action.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

GetInvolved.propTypes = propTypes;
GetInvolved.contextTypes = contextTypes;
GetInvolved.defaultProps = defaultProps;

export default withCollectRef('GetInvolved')(GetInvolved);
