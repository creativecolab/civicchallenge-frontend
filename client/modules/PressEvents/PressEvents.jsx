import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import classNames from 'util/classNames';

import globalStyles from 'main.scss';

import Navbar from 'components/Navbar/Navbar';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';

import EventBox from './components/EventBox/EventBox';

import styles from './PressEvents.scss';

/**
 * Constants
 */

const sectionTitle = 'Events';


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
    <section className={classNames([styles.pressEvents, globalStyles.contentWrapper])}>
      <Helmet
        title="Press & Events"
      />
      <Navbar />
      <Header
        backgroundImg=""
        headerText={sectionTitle}
        subheaderText=""
        showButton={false}
      />
      <EventBox />
      <Footer />
    </section>
  );
}

PressEvents.propTypes = propTypes;
PressEvents.contextTypes = contextTypes;
PressEvents.defaultProps = defaultProps;

export default PressEvents;
