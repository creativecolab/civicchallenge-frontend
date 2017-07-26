/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Navbar from 'components/Navbar/Navbar';
import Footer from 'components/Footer/Footer';
import StandardSectionBox from 'components/StandardSectionBox/StandardSectionBox';

import globalStyles from 'main.scss';

/* import GetInvolvedHeader from './components/GetInvolvedHeader/GetInvolvedHeader'; */
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

const sectionTitle = 'Ready to get Involved?';
const description = 'There are multiple ways you can get involved in the D4SD Mobility Challenge. Checkout how you can make an impact below! Details about how all the activities are building up to final submission, deadline in October, learn more about submitting by downloading the full-rules and guidelines below.';

const BOX_TEXT = [
  {
    title: 'Join a Slack Discussion',
    text: ' Nunc eleifend tempus ligula, eget ullamcorper tellus faucibus at. Suspendisse ultricies sapien in nibh volutpat, et iaculis neque sodales. Duis hendrerit tellus vitae lacus accumsan vestibulum. Nulla at accumsan leo. Donec malesuada aliquet luctus. Vivamus suscipit et tortor non tempor.',
    buttonText: 'Join Slack Discussion',
    icon: slack,
  },
  {
    title: 'Learn More',
    text: ' Nunc eleifend tempus ligula, eget ullamcorper tellus faucibus at. Suspendisse ultricies sapien in nibh volutpat, et iaculis neque sodales. Duis hendrerit tellus vitae lacus accumsan vestibulum. Nulla at accumsan leo. Donec malesuada aliquet luctus. Vivamus suscipit et tortor non tempor.',
    buttonText: 'Join Slack Discussion',
    icon: slack,
  },
  {
    title: 'Become a Mentor',
    text: ' Nunc eleifend tempus ligula, eget ullamcorper tellus faucibus at. Suspendisse ultricies sapien in nibh volutpat, et iaculis neque sodales. Duis hendrerit tellus vitae lacus accumsan vestibulum. Nulla at accumsan leo. Donec malesuada aliquet luctus. Vivamus suscipit et tortor non tempor.',
    buttonText: 'Sign Up',
    icon: mentor,
  },
  {
    title: 'Participate in User Testing',
    text: ' Nunc eleifend tempus ligula, eget ullamcorper tellus faucibus at. Suspendisse ultricies sapien in nibh volutpat, et iaculis neque sodales. Duis hendrerit tellus vitae lacus accumsan vestibulum. Nulla at accumsan leo. Donec malesuada aliquet luctus. Vivamus suscipit et tortor non tempor.',
    buttonText: 'Sign Up',
    icon: test,
  },
  {
    title: 'Find a Team',
    text: ' Nunc eleifend tempus ligula, eget ullamcorper tellus faucibus at. Suspendisse ultricies sapien in nibh volutpat, et iaculis neque sodales. Duis hendrerit tellus vitae lacus accumsan vestibulum. Nulla at accumsan leo. Donec malesuada aliquet luctus. Vivamus suscipit et tortor non tempor.',
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
      {/* <div className={globalStyles.contentWrapper}>
        <div className={globalStyles.placeholderWrapper}>
          <GetInvolvedHeader />
        </div>
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
      </div>*/}
      <div className={globalStyles.contentWrapper}>
        <StandardSectionBox
          sectionTitle={sectionTitle}
          text={description}
        />
        <div className={styles.gridStyle}>
          {BOX_TEXT.map(({ title, text, buttonText, icon }) => (
            <GetInvolvedBox
              title={title}
              text={text}
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
