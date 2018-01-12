// @flow
import React from 'react';
import PropTypes from 'prop-types';
// import styles from './FacebookLogin.scss';

const propTypes = {
  auth: PropTypes.object.isRequired,
};

const contextTypes = {
  router: PropTypes.object,
};

const defaultProps = {};

class FacebookLogin extends React.Component {
  // componentWillMount() {
  //   console.log(localStorage);
  //   isAuthenticated = this.props.auth.isAuthenticated;
  // }

  login() {
    this.props.auth.login();
  }

  logout() {
    this.props.auth.logout();
  }

  render() {
    const { isAuthenticated } = this.props.auth;
    return (
      <div>
        {
          isAuthenticated() && (
            <h4>
              You are logged in! Please{' '}
              <button
                onClick={this.logout.bind(this)}
              >
                Log Out
              </button>
              {' '} to continue.
            </h4>
          )
        }
        {
          !isAuthenticated() && (
            <h4>
              You are not logged in! Please{' '}
              <button
                onClick={this.login.bind(this)}
              >
                Log In
              </button>
              {' '}to continue.
            </h4>
          )
        }
      </div>
    );
  }
}

FacebookLogin.propTypes = propTypes;
FacebookLogin.contextTypes = contextTypes;
FacebookLogin.defaultProps = defaultProps;

export default FacebookLogin;
