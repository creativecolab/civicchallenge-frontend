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

import GetInvolvedCallout from './components/GetInvolvedCallout/GetInvolvedCallout';

import styles from './GetInvolved.scss';

/* icons */
import slack from './slack_icon.png';
/* import mentor from './mentor_icon.png'; */
import search from './search_icon.png';
import mail from './email-icon.png';
import submit from './submit-icon.png';
/* import test from './test_icon.png'; */

/**
 * Constants
 */

const sectionTitle = 'Ready to get Involved?';
const description = 'Jump in now to the online discussion or read more details about the four mobility challenges.  Check back later for more activities!';

const BOX_TEXT = [
  {
    title: 'Explore the Challenge Briefs',
    text: 'Read the briefs to learn background information and to empathize with particular mobility challenges that San Diego residents face. Each brief includes links to discussions in Slack. Join the discussions that interest you and get to know other innovators!',
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
    title: 'Sign up for the Newsletter',
    text: 'Fill out this simple online form with your Name and email address so we can keep you in the loop about the D4SD Mobility Challenges.',
    buttonText: 'Sign up for emails',
    linkUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSe-DzyjLGgLHdXkc8Fj7yGJrxm-PJ2Gr_LABKGeQDH699O6Hw/viewform',
    rel: 'noopener noreferrer',
    target: '_blank',
    icon: mail,
    boxColor: '#fff',
    textColor: '#212121',
    button: 'globalStyles.orangeOutline',
  },
  {
    title: 'Discuss Mobility in Slack',
    text: 'D4SD will be hosting discussions about mobility topics on the communication platform, Slack. Discussions focus on sharing everyday issues with transportation, discussing key policy decisions, and generating ideas for a weekly series of design sprints.',
    buttonText: 'Coming Soon',
    linkUrl: '',
    rel: '',
    target: '',
    icon: slack,
    boxColor: '#fff',
    textColor: '#212121',
    button: 'globalStyles.blueOutline',
  },
  {
    title: 'Prototype submissions are due October 16th',
    text: 'Check back here in September to get all the details about contest rules and submission guidelines.',
    buttonText: 'Coming soon',
    linkUrl: '',
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
      {<div className={globalStyles.contentWrapper}>
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
      </div>}
      <div className={globalStyles.contentWrapper}>
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
          <GetInvolvedCallout />
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
