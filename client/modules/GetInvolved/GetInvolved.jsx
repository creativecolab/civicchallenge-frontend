import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';

import globalStyles from 'main.scss';

import GetInvolvedHeader from './components/GetInvolvedHeader/GetInvolvedHeader';

import styles from './GetInvolved.scss';

/**
 * GetInvolved
 */

const propTypes = {};

const contextTypes = {
  router: PropTypes.object,
};

const defaultProps = {};

function GetInvolved() {
  return (
    <div className={styles.GetInvolved}>
      <Helmet
        title="GetInvolved"
      />
      <Header
        backgroundImg={''}
        headerText={'Get Involved'}
        subheaderText={''}
        showButton={false}
      />
      <div className={globalStyles.contentWrapper}>
        <div className={globalStyles.placeholderWrapper}>
          <GetInvolvedHeader />
        </div>
      </div>
      <div className={globalStyles.placeholderFooter}>
        <Footer />
      </div>
    </div>
  );
}

GetInvolved.propTypes = propTypes;
GetInvolved.contextTypes = contextTypes;
GetInvolved.defaultProps = defaultProps;

export default GetInvolved;
