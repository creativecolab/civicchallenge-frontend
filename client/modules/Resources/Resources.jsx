/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Navbar from 'components/Navbar/Navbar';
import Footer from 'components/Footer/Footer';
import StandardSectionBox from 'components/StandardSectionBox/StandardSectionBox';

import globalStyles from 'main.scss';

import ResourceBox from './components/ResourceBox/ResourceBox';

import styles from './Resources.scss';

/* icons */
import toolsIcon from './icon-tools.png';
import latestIcon from './icon-latest.png';
import faqIcon from './icon-faq.png';
import networkIcon from './icon-resources.png';
import techIcon from './icon-tech.png';
import resourceIcon from './icon-resource.png';

/**
 * Constants
 */

const sectionTitle = 'Resources';
const description = 'There are multiple ways you can get involved in the D4SD Mobility Challenge. Check out how you can make an impact below! Curabitur lobortis id lorem id bibendum. Ut id consectetur magna. Quisque volutpat augue enim, pulvinar lobortis nibh lacinia at.';

const RESOURCE_CONTENT = [
  {
    title: 'Design Tools & Tips',
    text: 'Maecenas mattis posuere purus nec fringilla. Nullam a gravida quam lorem ipsum dolor lorem ipsum dolor',
    icon: toolsIcon,
  },
  {
    title: 'Latest in Mobility',
    text: 'Maecenas mattis posuere purus nec fringilla. Nullam a gravida quam lorem ipsum dolor lorem ipsum dolor',
    icon: latestIcon,
  },
  {
    title: 'FAQs',
    text: 'Maecenas mattis posuere purus nec fringilla. Nullam a gravida quam lorem ipsum dolor lorem ipsum dolor',
    icon: faqIcon,
  },
  {
    title: 'Resource',
    text: 'Maecenas mattis posuere purus nec fringilla. Nullam a gravida quam lorem ipsum dolor lorem ipsum dolor',
    icon: networkIcon,
  },
  {
    title: 'Technology',
    text: 'Maecenas mattis posuere purus nec fringilla. Nullam a gravida quam lorem ipsum dolor lorem ipsum dolor',
    icon: techIcon,
  },
  {
    title: 'Resource',
    text: 'Maecenas mattis posuere purus nec fringilla. Nullam a gravida quam lorem ipsum dolor lorem ipsum dolor',
    icon: resourceIcon,
  },
];

/**
 * Resources
 */

const propTypes = {};

const contextTypes = {
  router: PropTypes.object,
};

const defaultProps = {};

function Resources() {
  return (
    <div className={styles.resources}>
      <Helmet
        title="Resources"
      />
      <Navbar />

      <div className={globalStyles.contentWrapper}>
        <StandardSectionBox
          sectionTitle={sectionTitle}
          text={description}
        />
        <div className={globalStyles.gridStyle}>
          {RESOURCE_CONTENT.map(({ title, text, icon }) => (
            <ResourceBox
              title={title}
              text={text}
              icon={icon}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

Resources.propTypes = propTypes;
Resources.contextTypes = contextTypes;
Resources.defaultProps = defaultProps;

export default Resources;
