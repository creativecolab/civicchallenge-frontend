/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Navbar from 'components/Navbar/Navbar';
import Footer from 'components/Footer/Footer';
import StandardSectionBox from 'components/StandardSectionBox/StandardSectionBox';

import globalStyles from 'main.scss';

import loading from './loading.svg';

/**
 * Constants
 */

const sectionTitle = 'Loading...';
const description = 'Please wait while you are being redirected.';

/**
 * Callback
 */

const propTypes = {};

const contextTypes = {
  router: PropTypes.object,
};

const defaultProps = {};

const handleAuthentication = (auth, {location}) => {
   if (/access_token|id_token|error/.test(location.hash)) {
    auth.handleAuthentication();
  }
}

function Callback(props) {
  handleAuthentication(props.route.auth, props);
  const style = {
    position: 'absolute',
    display: 'flex',
    justifyContent: 'center',
    height: '100vh',
    width: '100vw',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'white',
  };

  return (
    <div style={style} >
      <img src={loading} alt="loading" />
    </div>
  );
}


Callback.propTypes = propTypes;
Callback.contextTypes = contextTypes;
Callback.defaultProps = defaultProps;

export default Callback;

