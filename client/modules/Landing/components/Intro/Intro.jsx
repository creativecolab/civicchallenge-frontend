import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

import styles from './Intro.scss';

/**
 * Intro
 */

class Intro extends Component {
  constructor(props) {
    super(props);
    this.state = { isMounted: false };
  }

  componentDidMount() {
    this.setState({ isMounted: true });
  }

  render() {
    return (
      <div className={styles.intro}>
        <h3>Who We Are</h3>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Nam eos, excepturi alias vitae iusto illo fugit voluptatibus,
          at magni hic repudiandae esse ad, inventore rerum sed porro? Libero, quam, officia.
        </p>
        <Link to="/team">The team</Link>
      </div>
    );
  }
}

Intro.propTypes = {};

Intro.contextTypes = {
  router: PropTypes.object,
};

export default Intro;
