/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Navbar from 'components/Navbar/Navbar';
import Footer from 'components/Footer/Footer';
import StandardSectionBox from 'components/StandardSectionBox/StandardSectionBox';

import globalStyles from 'main.scss';

/* import GetInvolvedHeader from './components/GetInvolvedHeader/GetInvolvedHeader'; */
import GetInvolvedBox from './components/GetInvolvedBox/GetInvolvedBox';

/*import GetInvolvedCallout from './components/GetInvolvedCallout/GetInvolvedCallout';*/

import styles from './GetInvolved.scss';

/* icons */
import slack from './slack-icon.png';
/* import mentor from './mentor_icon.png'; */
import search from './search-icon.png';
import mail from './email-icon.png';
import submit from './submit-icon.png';
import login from './login-icon.png'
/* import test from './test_icon.png'; */
/**
 * Constants
 */

const sectionTitle = 'Ready to Get Involved?';
const description = 'Jump into the online discussion or read more details about the Design for San Diego Challenges on transportation and mobility.';

const BOX_TEXT = [
  {
    title: 'Create New Account',
    text: 'Join the community so we can keep you in the loop about current and future D4SD Challenges.',
    buttonText: 'Sign up',
    linkUrl: '/userlogin',
    rel: '',
    target: '',
    icon: login,
    boxColor: '#fff',
    textColor: '#212121',
    button: 'globalStyles.blueOutline',
  },
  {
    title: 'Discuss Mobility in Slack',
    text: 'Discussions focus on sharing everyday issues with transportation, discussing key policy decisions, and generating ideas for a weekly series of design sprints.',
    buttonText: 'Join the Discussion',
    linkUrl: 'https://join.slack.com/t/d4sd/shared_invite/MjExMjA5MDY0MjkzLTE0OTk3ODcxMjktMzIxYmRkMTJkMA',
    rel: 'noopener noreferrer',
    target: '_blank',
    icon: slack,
    boxColor: '#fff',
    textColor: '#212121',
    button: 'globalStyles.blueOutline',
  },
  // {
  //   title: 'Sign up for the Newsletter',
  //   text: 'Fill out this online form with your name and email address so we can keep you in the loop about current and future D4SD Challenges.',
  //   buttonText: 'Sign up for emails',
  //   linkUrl: 'http://eepurl.com/c2kFon',
  //   rel: 'noopener noreferrer',
  //   target: '_blank',
  //   icon: mail,
  //   boxColor: '#fff',
  //   textColor: '#212121',
  //   button: 'globalStyles.orangeOutline',
  // },
  {
    title: 'Explore the Challenge Briefs',
    text: 'Read the briefs to learn background information and to empathize with particular mobility challenges that San Diego residents face.',
    buttonText: 'View the Briefs',
    linkUrl: '/challenges',
    rel: '',
    target: '',
    icon: search,
    boxColor: '#fff',
    textColor: '#212121',
    button: 'globalStyles.blueOutline',
  },
  {
    title: 'Challenge Submission Closed',
    text: 'A total of 23 teams competed in the D4SD Challenge. Check out the finalists using the button below.',
    buttonText: 'Checkout the finalists',
    linkUrl: '/finalists',
    rel: '',
    target: '',
    icon: submit,
    boxColor: '#fff',
    textColor: '#212121',
    button: 'globalStyles.orangeOutline',
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
    <div className={styles.getInvolved}>
      <Helmet
        title="GetInvolved"
      />
      <Navbar />
      <div className={globalStyles.pageWrapper}>
        <div className={styles.gridStyle}>
          {/* BOX_TEXT.map(({ title, description, buttonText, icon }) => (
            <GetInvolvedBox
              title={title}
              text={description}
              buttonText={buttonText}
              icon={icon}
            />
          )) */}
        </div>
        <StandardSectionBox
          sectionTitle={sectionTitle}
          text={description}
        />
        <div className={styles.gridStyle}>
          {BOX_TEXT.map(({ title, text, buttonText, linkUrl, rel, target, icon, boxColor, textColor, button }) => (
            <GetInvolvedBox
              title={title}
              text={text}
              buttonText={buttonText}
              linkUrl={linkUrl}
              rel={rel}
              target={target}
              icon={icon}
              boxColor={boxColor}
              textColor={textColor}
              button={button}
            />
          ))}
          {/*<GetInvolvedCallout />*/}
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
