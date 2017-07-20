import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import LazyImage from 'components/LazyImage/LazyImage';

import styles from './Categories.scss';

/**
 * Challenge
 */
function Challenge(props) {
  return (
    <div>
      <div className={styles.indexRow}>
        <div className={styles.indexPic}>
          <LazyImage src={props.thumbnail} alt={props.name} />
        </div>

        <div className={styles.indexContent}>
          <h4>{props.name}</h4>
          <p>{props.description}</p>
          <h5>Questions:</h5>
          <ol>
            {props.questions.map(question =>
              <li key={question.id}><Link to={`/challenges/${props.id}`}>{question.text}</Link></li>
            )}
          </ol>
          <Link to={`/challenges/${props.id}`}>Learn More</Link>
        </div>
      </div>
    </div>
  );
}

Challenge.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  thumbnail: PropTypes.string,
  questions: PropTypes.arrayOf(PropTypes.object),
};

Challenge.defaultProps = {
  thumbnail: null,
  questions: [],
};

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
