import React from 'react';
import PropTypes from 'prop-types';

import globalStyles from 'main.scss';
import styles from './Team.scss';

/**
 * Constants
 */

const PEOPLE = [
  {
    name: 'Steven Dow',
    position: 'Assistant Professor',
    biography: 'Steven is an Assistant Professor of Cognitive Science at UC San Diego where he researches human-computer interaction, social computing, and creativity.',
    link: 'http://spdow.ucsd.edu/',
  },
  {
    name: 'Narges Mahyer',
    position: 'Postdoctoral Fellow',
    biography: 'I am a postdoctoral fellow in the Design Lab at the University of California San Diego, mentored by Steven Dow.',
    link: 'http://nmahyar.ucsd.edu/',
  },
  {
    name: 'David Luu',
    position: 'B.S. Computer Engineering',
    biography: 'David is a person',
    link: 'https://davidluu.me/',
  },
];

/**
 * Profile
 */

function Profile({ name, position, biography, link }) {
  return (
    <div className={styles.profile}>
      <div className={styles.defaultText}>
        <div className={styles.name}>{name}</div>
        <div className={styles.position}>{position}</div>
      </div>
      <div className={styles.hoverText}>
        <div className={styles.flexContainer}>
          <div className={styles.biography}>{biography}</div>
          {link && <a href={link} target="_blank" rel="noopener noreferrer">Website</a>}
        </div>
      </div>
    </div>
  );
}

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  biography: PropTypes.string.isRequired,
  link: PropTypes.string,
};

Profile.defaultProps = {
  link: '',
};


/**
 * Team
 */

const propTypes = {};

const contextTypes = {
  router: PropTypes.object,
};

const defaultProps = {};

function Team() {
  return (
    <section className={styles.team}>
      <h3 className={globalStyles.ul}>Team</h3>
      <div className={styles.profiles}>
        {PEOPLE.map(person =>
          <Profile key={person.name} {...person} />
        )}
      </div>
    </section>
  );
}

Team.propTypes = propTypes;
Team.contextTypes = contextTypes;
Team.defaultProps = defaultProps;

export default Team;
