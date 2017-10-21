/* eslint-disable max-len */

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'util/classNames';
// import { Link } from 'react-router';
import { withCollectRef } from 'util/RefCollector';

import globalStyles from 'main.scss';
import styles from './LandingJurors.scss';


/** imgs */
import JohnBadringa from '../../../Jurors/components/JurorTeam/imgs/JohnBadringa.jpg';
import KatieRast from '../../../Jurors/components/JurorTeam/imgs/KatieRast.jpg';
import ScottKlemmer from '../../../Jurors/components/JurorTeam/imgs/ScottKlemmer.jpg';
import ChuckPelly from '../../../Jurors/components/JurorTeam/imgs/ChuckPelly.jpg';
/**
 * Get Involved
 */

const sectionTitle = 'Jurors';
const sectionDetails = 'Our amazing D4SD jurors come from the worlds of technology, government, entrepreneurship, and education. They will judge solutions based on four key criteria: human-centered process, novelty, feasibility, and impact.';
const btnText = 'see all jurors';
const btnLink = '/judging';

const JURORS_MAXFOUR = [
  {
    memberName: 'John Bandringa',
    memberTitle: [
      'Port of San Diego',
    ],
    memberImg: JohnBadringa,
    memberLink: 'https://www.linkedin.com/in/john-bandringa-77a47a4',
  },
  {
    memberName: 'Katie Rast',
    memberTitle: [
      'The San Diego Foundation',
      'Fab Lab',
    ],
    memberImg: KatieRast,
    memberLink: 'https://www.sdfoundation.org/about-us/who-we-are/our-team/katie-rast-bio/',
  },
  {
    memberName: 'Scott Klemmer',
    memberTitle: [
      'Design Lab, UC San Diego',
    ],
    memberImg: ScottKlemmer,
    memberLink: 'http://d.ucsd.edu/srk/about/',
  },
  {
    memberName: 'Chuck Pelly',
    memberTitle: [
      'Intersection-Inc',
    ],
    memberImg: ChuckPelly,
    memberLink: 'https://www.linkedin.com/in/chuck-pelly-63164211',
  },
];

const propTypes = {
  componentRef: PropTypes.func.isRequired,
};

const contextTypes = {
  router: PropTypes.object,
};

const defaultProps = {};

function LandingJurors(props) {
  return (
    <section id={styles.landingJurors} ref={props.componentRef}>
      <div className={globalStyles.contentWrapper}>
        <h1>{sectionTitle}</h1>
        <p>{sectionDetails}</p>
        <div className={styles.contentContainer}>
          {JURORS_MAXFOUR.map(({ memberName, memberTitle, memberImg, memberLink }) => (
            <a className={styles.jurorLink} href={memberLink} target="_blank" rel="noopener noreferrer">
              <div className={styles.memberWrapper}>
                <div className={styles.memberImg}>
                  <img src={memberImg} alt={memberName} />
                </div>
                <div className={styles.memberInfo}>
                  <h3>{memberName}</h3>
                  {memberTitle.map(position =>
                    <div className={styles.memberPositions}>
                      <span key={position}>{position}</span>
                      <br />
                    </div>
                  )}
                </div>
              </div>
            </a>
          ))}
        </div>
        <div className={classNames([globalStyles.sectionBtn, styles.btn])}>
          <a className={classNames([globalStyles.greyOutline, styles.btnA])} href={btnLink}>{btnText}</a>
        </div>
      </div>
    </section>
  );
}

LandingJurors.propTypes = propTypes;
LandingJurors.contextTypes = contextTypes;
LandingJurors.defaultProps = defaultProps;

export default withCollectRef('LandingJurors')(LandingJurors);
