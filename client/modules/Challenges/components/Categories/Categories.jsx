import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

import globalStyles from 'main.scss';

/**
 * Challenge
 */
function Challenge(props) {
  return (
    <div>
      <Link to={`/challenges/${props.id}`}>{props.name}</Link>
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
    <section className={globalStyles.textContainer}>
      <h3>{props.name}</h3>
      <p>{props.description}</p>
      {props.challenges.map(challenge =>
        <Challenge key={challenge.name} {...challenge} />
      )}
    </section>
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
    <div>
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
