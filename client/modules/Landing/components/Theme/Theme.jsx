import React, { Component, PropTypes } from 'react';

import styles from './Theme.scss';

/**
 * Challenge Box
 */

const ChallengeBox = (props) => {
  return (
    <div className={styles.challenge}>
      <div>{props.name}</div>
    </div>
  );
};

ChallengeBox.propTypes = {
  name: PropTypes.string.isRequired,
};

/**
 * Theme
 */

const CHALLENGES = [
  {
    name: 'Identify',
  },
  {
    name: 'Ideate',
  },
  {
    name: 'Prototype',
  },
  {
    name: 'Implement',
  },
];

class Theme extends Component {
  constructor(props) {
    super(props);
    this.state = { isMounted: false };
  }

  componentDidMount() {
    this.setState({ isMounted: true });
  }

  render() {
    return (
      <div className={styles.theme}>
        <h3>Mobility</h3>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Nam eos, excepturi alias vitae iusto illo fugit voluptatibus,
          at magni hic repudiandae esse ad, inventore rerum sed porro? Libero, quam, officia.
        </p>
        <div className={styles.challengesContainer}>
          <div className={styles.challenges}>
            {CHALLENGES.map(challenge =>
              <ChallengeBox
                key={challenge.name}
                {...challenge}
              />
            )}
          </div>
        </div>
      </div>
    );
  }
}

Theme.propTypes = {};

Theme.contextTypes = {
  router: PropTypes.object,
};

export default Theme;
