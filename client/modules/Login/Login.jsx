/* eslint-disable max-len */

import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Navbar from 'components/Navbar/Navbar';
import LoginForm from 'components/Login/Login';

import Footer from 'components/Footer/Footer';

import styles from './Login.scss';


/**
 * Login
 */

const propTypes = {};

const contextTypes = {
  router: PropTypes.object,
};

const defaultProps = {};

class Login extends React.Component {
  state = { users: [] }


  render() {
    return (
      <div className={styles.landing}>
        <Helmet
          title="Home"
        />
        <Navbar />
        <LoginForm />
        <Footer />
      </div>
    );
  }
}


Login.propTypes = propTypes;
Login.contextTypes = contextTypes;
Login.defaultProps = defaultProps;

export default Login;
