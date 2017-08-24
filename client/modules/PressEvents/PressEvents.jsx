import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Navbar from 'components/Navbar/Navbar';
import Footer from 'components/Footer/Footer';
import StandardSectionBox from 'components/StandardSectionBox/StandardSectionBox';

import globalStyles from 'main.scss';

import styles from './PressEvents.scss';

/**
 * Constants
 */

const sectionTitle = 'Press & Events';

/**
 * PressEvents
 */

const propTypes = {};

const contextTypes = {
  router: PropTypes.object,
};

const defaultProps = {};

function PressEvents() {
  return (
    <div className={styles.pressEvents}>
      <Helmet
        title="Press & Events"
      />
      <Navbar />
      <div className={globalStyles.pageWrapper}>
        <StandardSectionBox
          sectionTitle={sectionTitle}
          text=""
        />
      </div>
      <Footer />
    </div>
  );
}

PressEvents.propTypes = propTypes;
PressEvents.contextTypes = contextTypes;
PressEvents.defaultProps = defaultProps;

export default PressEvents;
