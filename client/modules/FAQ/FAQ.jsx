import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Header from 'components/HeaderNoBanner/HeaderNoBanner';
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

      <div className={styles.faqHeader}>
        <h1>FAQ</h1>
      </div>

      <section className={styles.content}>
        <div className={styles.boxRow}>
          <QuestionBox
            resourceName="The Process"
            resourceText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas mattis posuere purus nec fringilla. Nullam a gravida quam."
            resourceLink=""
          />
          <QuestionBox
            resourceName="The Process"
            resourceText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas mattis posuere purus nec fringilla. Nullam a gravida quam."
            resourceLink=""
          />
          <QuestionBox
            resourceName="The Process"
            resourceText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas mattis posuere purus nec fringilla. Nullam a gravida quam."
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
