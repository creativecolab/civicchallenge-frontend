import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

import styles from './Categories.scss';

/**
 * Challenge
 */
function Challenge(props) {
  return (
    <div>
      <div className={styles.indexRow}>
        <div className={styles.indexPic}>
          <p>IMG goes here</p>
        </div>

        <div className={styles.indexContent}>
          <div className={styles.indexTimeline}>
            <p>TIMELINE GOES HERE</p>
          </div>
          <h4>{props.name}</h4>
          <p>San Diego is culturally and economically diverse, as well as geographical
            dispersed, which makes it a ripe topic for exploring issues around transportation. The mobility
            challenges below.
          </p>
          <h5>Questions:</h5>
          <ul>
            <li>1. <a href="/challenge#question">Question 1</a></li>
            <li>2. <a href="/challenge#question">Question 2</a></li>
            <li>3.<a href="/challenge#question">Question 3</a></li>
          </ul>
          <Link to={`/challenges/${props.id}`}>Learn More</Link>
        </div>
      </div>
    </div>
  );
}

Challenge.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
};

Challenge.defaultProps = {};

/**
 * Category
 */
function Category(props) {
  return (
    <div className={styles.indexGrid}>
      <div className={styles.indexTitle}>
        <h3>{props.name}</h3>
      </div>
      <p>{props.description}</p>
      {props.challenges.map(challenge =>
        <Challenge key={challenge.name} {...challenge} />
      )}
    </div>
  );
}

Category.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  challenges: PropTypes.arrayOf(PropTypes.object).isRequired,
};

/**
 * Categories
 */
function Categories(props) {
  return (
    <div className={styles.categories}>
      {props.categories.map(category =>
        <Category key={category.id} {...category} />
      )}
    </div>
  );
}

Categories.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Categories;
