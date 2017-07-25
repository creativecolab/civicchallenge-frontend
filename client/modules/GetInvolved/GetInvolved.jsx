/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Navbar from 'components/Navbar/Navbar';
import Footer from 'components/Footer/Footer';

import globalStyles from 'main.scss';

import GetInvolvedHeader from './components/GetInvolvedHeader/GetInvolvedHeader';
import GetInvolvedBox from './components/GetInvolvedBox/GetInvolvedBox';

import styles from './GetInvolved.scss';

/* icons */
import slack from './slack-icon.svg';
import mentor from './mentor_icon.png';
import search from './search_icon.png';
import test from './test_icon.png';

/**
 * Constants
 */

const BOX_TEXT = [
  {
    title: 'Join a Slack Discussion',
    description: ' Nunc eleifend tempus ligula, eget ullamcorper tellus faucibus at. Suspendisse ultricies sapien in nibh volutpat, et iaculis neque sodales. Duis hendrerit tellus vitae lacus accumsan vestibulum. Nulla at accumsan leo. Donec malesuada aliquet luctus. Vivamus suscipit et tortor non tempor.',
    buttonText: 'Join Slack Discussion',
    icon: slack,
  },
  {
    title: 'Become a Mentor',
    description: ' Nunc eleifend tempus ligula, eget ullamcorper tellus faucibus at. Suspendisse ultricies sapien in nibh volutpat, et iaculis neque sodales. Duis hendrerit tellus vitae lacus accumsan vestibulum. Nulla at accumsan leo. Donec malesuada aliquet luctus. Vivamus suscipit et tortor non tempor.',
    buttonText: 'Sign Up',
    icon: mentor,
  },
  {
    title: 'Participate in User Testing',
    description: ' Nunc eleifend tempus ligula, eget ullamcorper tellus faucibus at. Suspendisse ultricies sapien in nibh volutpat, et iaculis neque sodales. Duis hendrerit tellus vitae lacus accumsan vestibulum. Nulla at accumsan leo. Donec malesuada aliquet luctus. Vivamus suscipit et tortor non tempor.',
    buttonText: 'Sign Up',
    icon: test,
  },
  {
    title: 'Find a Team',
    description: ' Nunc eleifend tempus ligula, eget ullamcorper tellus faucibus at. Suspendisse ultricies sapien in nibh volutpat, et iaculis neque sodales. Duis hendrerit tellus vitae lacus accumsan vestibulum. Nulla at accumsan leo. Donec malesuada aliquet luctus. Vivamus suscipit et tortor non tempor.',
    buttonText: 'Join D4SD Slack',
    icon: search,
  },
];

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
      <Navbar />
      <div className={globalStyles.contentWrapperGridGI}>
        <div className={globalStyles.placeholderWrapper}>
          <GetInvolvedHeader />
        </div>
      </div>
      <div className={globalStyles.contentWrapperGridGI}>
        <div className={styles.gridStyle}>
          {BOX_TEXT.map(({ title, description, buttonText, icon }) => (
            <GetInvolvedBox
              title={title}
              text={description}
              buttonText={buttonText}
              icon={icon}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

GetInvolved.propTypes = propTypes;
GetInvolved.contextTypes = contextTypes;
GetInvolved.defaultProps = defaultProps;

export default GetInvolved;
