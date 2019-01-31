/* eslint-disable max-len */

import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Navbar from 'components/Navbar/Navbar';

import Footer from 'components/Footer/Footer';

import styles from './Activation.scss';

/**
 * Login
 */

const propTypes = {
  params: PropTypes.object.isRequired,
};

const contextTypes = {
  router: PropTypes.object,
};

const defaultProps = {};

class Activation extends React.Component {
  state = { messages: [] }

  componentDidMount() {
    fetch(`../api/activate/${this.props.params.id}`)
      .then(res => res.json())
      .then(messages => this.setState({ messages }));
  }

  render() {
    return (
      <div className={styles.landing}>
        <Helmet
          title="Home"
        />
        <Navbar />
        <h1>Users</h1>
        {this.state.messages.map(message =>
          <div>{message.message}</div>
        )}
        <Footer />
      </div>
    );
  }
}


Activation.propTypes = propTypes;
Activation.contextTypes = contextTypes;
Activation.defaultProps = defaultProps;

export default Activation;
