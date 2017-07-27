/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Navbar from 'components/Navbar/Navbar';
import Footer from 'components/Footer/Footer';
import StandardSectionBox from 'components/StandardSectionBox/StandardSectionBox';

import globalStyles from 'main.scss';

/* import GetInvolvedHeader from './components/GetInvolvedHeader/GetInvolvedHeader'; */
/* import GetInvolvedBox from './components/GetInvolvedBox/GetInvolvedBox'; */

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

/*const BOX_TEXT = [
  {
    title: 'Explore the Challenge Briefs',
    text: 'Take an in-depth look at the challenge briefs that we assembled based on early user research with San Diego residents. Read the briefs to learn background information, empathize with the range of challenges, and join discussions in Slack about the topics that interest you. Get to know people and form a team with other innovators!',
    buttonText: 'View the Briefs',
    icon: search,
    boxColor: '#fff',
    textColor: '#212121',
    button: 'globalStyles.blueOutline'
  },
  {
    title: 'Sign up for the Newsletter',
    text: 'Fill out this simple online form with your Name and email address so we can keep you in the loop about the D4SD Mobility Challenges.',
    buttonText: 'Sign up for emails',
    icon: mail,
    boxColor: '#4496FF',
    textColor: '#fff',
    button: 'globalStyles.orangeOutline'
  },
  {
    title: 'Discuss Mobility in Slack',
    text: 'D4SD is currently hosting discussions about mobility topics on the communication platform Slack. Discussions focus on sharing everyday issues with transportation, discussing key policy decisions, and generating ideas for a weekly series of design sprints. Click below to join the D4SD Slack team and get started in the 2017 Mobility Challenges!',
    buttonText: 'Join D4SD Slack',
    icon: slack,
    boxColor: '#fff',
    textColor: '#212121',
    button: 'globalStyles.blueOutline'
  },
  {
    title: 'Prototype submissions are due October 16th',
    text: 'Check back here in September to get all the details about contest rules and submission guidelines.',
    buttonText: 'Submissions Rules & Guidelines PDF (Coming Soon)',
    icon: submit,
    boxColor: '#4496FF',
    textColor: '#fff',
    button: 'globalStyles.orangeOutline'
  }
];*/

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
        <div className={globalStyles.placeholderWrapper}>
          <GetInvolvedHeader />
        </div>
        <div className={styles.gridStyle}>
          {/*BOX_TEXT.map(({ title, description, buttonText, icon }) => (
            <GetInvolvedBox
              title={title}
              text={description}
              buttonText={buttonText}
              icon={icon}
            />
          ))*/}
        </div>
      </div>}
      <div className={globalStyles.contentWrapper}>
        <StandardSectionBox
          sectionTitle={sectionTitle}
          text={description}
        />
        <div className={styles.gridStyle}>
          <section className={globalStyles.sectionWrapper}>
            <div className={styles.getInvolvedBox}>
              <div className={styles.boxWrapper}>
                <div className={styles.boxContent}>
                  <img src={search} alt="Explore the Challenge Briefs" />
                  <h2>Explore the Challenge Briefs</h2>
                  <p>Take an in-depth look at the challenge briefs that we assembled based on early user research with San Diego residents. Read the briefs to learn background information, empathize with the range of challenges, and join discussions in Slack about the topics that interest you. Get to know people and form a team with other innovators!</p>
                  <div className={globalStyles.sectionBtn}>
                    <a className={globalStyles.orangeOutline} href="">View the Briefs</a>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className={globalStyles.sectionWrapperBlue}>
            <div className={styles.getInvolvedBox}>
              <div className={styles.boxWrapper}>
                <div className={styles.boxContent}>
                  <img src={mail} alt="Sign up for the Newsletter" />
                  <h2 className={globalStyles.white}>Sign up for the Newsletter</h2>
                  <p className={globalStyles.white}>Fill out this simple online form with your Name and email address so we can keep you in the loop about the D4SD Mobility Challenges.</p>
                  <div className={globalStyles.sectionBtn}>
                    <a className={globalStyles.whiteOutline} href="">Sign up for emails</a>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className={globalStyles.sectionWrapper}>
            <div className={styles.getInvolvedBox}>
              <div className={styles.boxWrapper}>
                <div className={styles.boxContent}>
                  <img src={slack} alt="Discuss Mobility in Slack" />
                  <h2>Discuss Mobility in Slack</h2>
                  <p>D4SD is currently hosting discussions about mobility topics on the communication platform Slack. Discussions focus on sharing everyday issues with transportation, discussing key policy decisions, and generating ideas for a weekly series of design sprints. Click below to join the D4SD Slack team and get started in the 2017 Mobility Challenges!</p>
                  <div className={globalStyles.sectionBtn}>
                    <a className={globalStyles.orangeOutline} href="">Join D4SD Slack</a>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className={globalStyles.sectionWrapperBlue}>
            <div className={styles.getInvolvedBox}>
              <div className={styles.boxWrapper}>
                <div className={styles.boxContent}>
                  <img src={submit} alt="Prototype submissions are due October 16th" />
                  <h2 className={globalStyles.white}>Prototype submissions are due October 16th</h2>
                  <p className={globalStyles.white}>Check back here in September to get all the details about contest rules and submission guidelines.</p>
                  <div className={globalStyles.sectionBtn}>
                    <a className={globalStyles.whiteOutline} href="">Submissions Rules & Guidelines PDF (Coming Soon)</a>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/*{BOX_TEXT.map(({ title, text, buttonText, icon, boxColor, textColor, button }) => (
            <GetInvolvedBox
              title={title}
              text={text}
              buttonText={buttonText}
              icon={icon}
              boxColor={boxColor}
              textColor={textColor}
              button={button}
            />
          ))}*/}
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
