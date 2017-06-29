import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';

import QuestionBox from './components/QuestionBox/QuestionBox';

import styles from './FAQ.scss';

/**
 * FAQ
 */

const propTypes = {};

const contextTypes = {
  router: PropTypes.object,
};

const defaultProps = {};

function FAQ() {
  return (
    <div className={styles.Faq}>
      <Helmet
        title="FAQ"
      />
      <Header
        backgroundImg={''}
        headerText={'FAQ'}
        subheaderText={''}
        showButton={false}
      />

      <section className={styles.content}>
        <div className={styles.boxRow}>
          <QuestionBox
            resourceName="The Process"
            resourceText="Lorem Khaled Ipsum is a major key to success. Wraith talk. Mogul talk. In life you have to take the trash out, if you have trash in your life."
            resourceLink=""
          />
          <QuestionBox
            resourceName="Challenge FAQ"
            resourceText="Lorem Khaled Ipsum is a major key to success. Wraith talk. Mogul talk. In life you have to take the trash out, if you have trash in your life."
            resourceLink="/faq"
          />
          <QuestionBox
            resourceName="Slack FAQ"
            resourceText="Lorem Khaled Ipsum is a major key to success. Wraith talk. Mogul talk. In life you have to take the trash out, if you have trash in your life."
            resourceLink=""
          />
        </div>
      </section>
      <Footer />
    </div>
  );
}

FAQ.propTypes = propTypes;
FAQ.contextTypes = contextTypes;
FAQ.defaultProps = defaultProps;

export default FAQ;
