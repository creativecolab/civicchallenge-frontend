import React from 'react';
import PropTypes from 'prop-types';

import globalStyles from 'main.scss';

/* import styles from './StandardSectionBox.scss'; */

/**
 * StandardSectionBox
 */

const propTypes = {
  sectionTitle: PropTypes.string,
  text: PropTypes.string.isRequired,
};

const contextTypes = {
  router: PropTypes.object,
};

const defaultProps = {
  sectionTitle: '',
};

function StandardSectionBox({ sectionTitle, text }) {
  return (
    <div className={globalStyles.contentContainer}>
      {sectionTitle && <h2>{sectionTitle}</h2>}
      <p>{text}</p>
    </div>
  );
}

StandardSectionBox.propTypes = propTypes;
StandardSectionBox.contextTypes = contextTypes;
StandardSectionBox.defaultProps = defaultProps;

export default StandardSectionBox;
