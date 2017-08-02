/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
/* import classNames from 'util/classNames'; */

import Navbar from 'components/Navbar/Navbar';
import Footer from 'components/Footer/Footer';
import StandardSectionBox from 'components/StandardSectionBox/StandardSectionBox';

import globalStyles from 'main.scss';

import styles from './DesignTools.scss';
import ToolBox from './components/ToolBox/ToolBox';

/**
 * Constants
 */

const sectionTitle = 'Design Tools & Tips';
const description = 'Learn about design. Some intro text about what people should be able to find here.';


/**
 * Resources
 */

const propTypes = {};

const contextTypes = {
  router: PropTypes.object,
};

const defaultProps = {};

function DesignTools() {
  return (
    <div className={styles.resources}>
      <Helmet
        title="DesignTools"
      />
      <Navbar />

      <div className={globalStyles.pageWrapper}>
        <StandardSectionBox
          sectionTitle={sectionTitle}
          text={description}
        />
        <div className={globalStyles.gridStyle}>
          <ToolBox />
        </div>
      </div>
      <Footer />
    </div>
  );
}

DesignTools.propTypes = propTypes;
DesignTools.contextTypes = contextTypes;
DesignTools.defaultProps = defaultProps;

export default DesignTools;
