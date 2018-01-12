/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Navbar from 'components/Navbar/Navbar';
import Footer from 'components/Footer/Footer';
import StandardSectionBox from 'components/StandardSectionBox/StandardSectionBox';
import globalStyles from 'main.scss';
import FacebookLogin from './components/FacebookLogin/FacebookLogin'

import styles from './UserLogin.scss';

/**
 * Constants
 */
const sectionTitle = 'Login Page';
const description = 'User can log in with Facebook, Google, etc.';


/**
 * UserLogin
 */

const propTypes = {};

const contextTypes = {
  router: PropTypes.object,
};

const defaultProps = {};

function UserLogin(props) {
  return (
    <div className={styles.userlogin}>
      <Helmet
        title='UserLogin'
      />
      <Navbar />
      <div className={globalStyles.pageWrapper}>
        <StandardSectionBox
          sectionTitle={sectionTitle}
          text={description}
        />
        <FacebookLogin auth={props.route.auth}/>
      </div>
      <Footer />
    </div>
  );
}

UserLogin.propTypes = propTypes;
UserLogin.contextTypes = contextTypes;
UserLogin.defaultProps = defaultProps;

export default UserLogin;
