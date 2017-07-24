import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';

import globalStyles from 'main.scss';

import styles from './GetInvolvedBox.scss';

/**
 * GetInvolvedBox
 */

const propTypes = {};

const contextTypes = {
  router: PropTypes.object,
};

const defaultProps = {};

function GetInvolvedBox() {
  return (
    <div className={styles.getInvolvedBox}>
      <p>hello</p>
    </div>
  );
}

GetInvolvedBox.propTypes = propTypes;
GetInvolvedBox.contextTypes = contextTypes;
GetInvolvedBox.defaultProps = defaultProps;

export default GetInvolvedBox;
