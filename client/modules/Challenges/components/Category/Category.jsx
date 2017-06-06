import React from 'react';
import PropTypes from 'prop-types';

import classNames from 'util/classNames';

import globalStyles from 'main.scss';
import styles from './Category.scss';

/**
 * Challenge
 */
function Challenge(props) {
  return (
    <li>
      {props.name}
    </li>
  );
}

Challenge.propTypes = {
  name: PropTypes.string.isRequired,
};

Challenge.defaultProps = {};


/**
 * Category
 */

const propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  challenges: PropTypes.array.isRequired,
};

const contextTypes = {
  router: PropTypes.object,
};

const defaultProps = {};

function Category(props) {
  return (
    <section className={classNames([styles.category, globalStyles.textContainer])}>
      <h3>{props.name}</h3>
      <p>{props.description}</p>
      <ul>
        {props.challenges.map(challenge =>
          <Challenge key={challenge.name} {...challenge} />
        )}
      </ul>
    </section>
  );
}

Category.propTypes = propTypes;
Category.contextTypes = contextTypes;
Category.defaultProps = defaultProps;

export default Category;
