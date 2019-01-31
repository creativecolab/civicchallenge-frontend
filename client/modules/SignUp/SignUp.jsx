/* eslint-disable max-len */

import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Navbar from 'components/Navbar/Navbar';
import SignUpForm from 'components/SignUp/SignUp';

import Footer from 'components/Footer/Footer';

import styles from './SignUp.scss';


/**
 * Login
 */

const propTypes = {};

const contextTypes = {
  router: PropTypes.object,
};

const defaultProps = {};

class SignUp extends React.Component {
  state = { users: [] }


  render() {
    return (
      <div className={styles.landing}>
        <Helmet
          title="Home"
        />
        <Navbar />
        <SignUpForm />
        <Footer />
      </div>
    );
  }
}


SignUp.propTypes = propTypes;
SignUp.contextTypes = contextTypes;
SignUp.defaultProps = defaultProps;

export default SignUp;
