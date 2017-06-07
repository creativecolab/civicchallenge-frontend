import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';

import styles from './Feedback.scss';

/**
 * Feedback
 */

const propTypes = {};

const contextTypes = {
  router: PropTypes.object,
};

const defaultProps = {};

function Feedback() {
  return (
    <section className={styles.feedback}>
      <Helmet
        title="Feedback"
      />
      <Header
        backgroundImg={''}
        headerText={'Feedback'}
        subheaderText={''}
        showButton={false}
      />

      <section className={styles.content}>
        <p>This is the Feedback page, content will be inserted here.</p>
      </section>

      <Footer />
    </section>
  );
}

Feedback.propTypes = propTypes;
Feedback.contextTypes = contextTypes;
Feedback.defaultProps = defaultProps;

export default Feedback;
