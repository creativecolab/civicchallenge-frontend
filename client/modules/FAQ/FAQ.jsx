/* eslint-disable max-len */

import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Navbar from 'components/Navbar/Navbar';
import Footer from 'components/Footer/Footer';

import StandardSectionBox from 'components/StandardSectionBox/StandardSectionBox';
import globalStyles from 'main.scss';

import QuestionBox from './components/QuestionBox/QuestionBox';
import styles from './FAQ.scss';

/**
 * FAQ
 */

const FAQ_CONTENT = [
  {
    question: 'What is the civic challenge and how is it structured?',
    answer: 'D4SD’s civic challenge enables anyone to participate in the “design thinking” process. This year focuses on the complex challenges of mobility in San Diego. Anyone can register to participate in one or all of the four phases of the challenge:  1) Discover and discuss issues related to mobility. 2) Generate ideas for how to solve key problems. 3) Form a team and create a prototype that can be tested. 4) Build partnerships and implement the best solutions. Our goal is to get citizens to think creatively and come up with solutions for ways to improve mobility in San Diego. See the How it Works section for more detail.',
  },
  {
    question: 'What are the awards and prizes?',
    answer: 'Participants in the D4SD Civic Challenge will compete for cash prizes and will receive a number of cool benefits, including tickets to the Design Forward Summit.  The main awards will include the Best Overall Design Solution, the Best Prototype and Best Student Submission for each design brief, and the coveted People’s Choice Award.  See the Awards and Prizes section for more detail.',
  },
  {
    question: 'What are the requirements for submitting to the challenges?',
    answer: 'Entries are due at 11:59 PM (US-Pacific) on October 15th, 2017. Submit your proposal online and the full entry upload cannot be more than 25 megabytes; however, entries can point to websites, 3D interactive online models and YouTube videos showcasing your work. See the Submission page for more details!',
  },
  {
    question: 'Who can participate? Are there any eligibility requirements?',
    answer: 'No requirements to participate. Point to resources for novice designers. ! Activity on the discussion forums must adhere to community standards ! Official entries will pass through an initial screening.',
  },
  {
    question: 'What is the judging process and criteria?',
    answer: 'Each entry will go through three rounds of evaluation: Initial screening, assessment of impact, potential for success. At the Initial Screening, the D4SD team will determine how confident we are that your submission addresses (at minimum) each of the six questions outlined in the Entry Requirements details, before sending your submission to the next round. The Assessment of Impact will critically evaluate your answers to each of the six questions, trying to understand and challenge the logic behind your proposed solution. The top prototypes for each design brief will be forwarded to an expert panel to consider the Potential for Success and to determine how D4SD cash and in-kind support could support that success. All entries will receive feedback in proportion to the quality of your submission.',
  },
  {
    question: 'What are the benefits of participating in the D4SD design challenge?',
    answer: 'There are many possible ways that participating in a design challenge may benefit a person, and of course these reasons vary from individual. Here is a list of potential benefits of participation: Increased knowledge about how human centered design practices can be used to inspire change in your community. Increased familiarity with the civic issues facing our city, New connections and networks with other designers, Individual and team based rewards throughout the summer, Potential to get your solution supported and funded by one of our city’s lead tech accelerators.',
  },
  {
    question: 'How can I participate?',
    answer: 'Anyone can participate in the design challenges as much or as little as they would like to. Of course, the more you participate, the more you will get out of this experience. There are many ways to get involved and many activities that you can participate in! These activities are: Weekly discussion questions, Need finding and issue discovery, Brainstorming and ideation, Attending events (e.g. hackathons, fire-side chats with designers, design summit), Creating prototypes with a team, Leading a team, Providing feedback on prototypes, Receiving email updates.',
  },
  {
    question: 'How do I participate in the discussions about issues and potential solutions?',
    answer: 'Coming Soon',
  },
  {
    question: 'What are the expectations for community discussions?',
    answer: 'D4SD has set up a community discussion forum using Slack. All interactions and discussions are expected to be civil and respectful. We expect any arguments to be resolved by presenting facts or testimony. While we might have different opinions on how to improve mobility, we should all keep in mind the broader objective of helping improve San Diego.',
  },
  {
    question: 'How do I manage notifications in the Slack discussion forum?',
    answer: 'Coming Soon',
  },
  {
    question: 'How do I get rid of discussions that I do not want to be a part of?',
    answer: 'Click the gear icon near the top right of the screen to open the Channel Settings menu. Select Leave channel. Or use the /leave. You can leave any channel except #general. If you leave a private channel, you will lose access to the channel and its archives. To rejoin a private channel, someone in that channel must re-invite you.',
  },
  {
    question: 'How do I edit my profile in Slack?',
    answer: 'Coming Soon',
  },
  {
    question: 'What information on my profile is visible to others?',
    answer: 'Coming Soon',
  },
  {
    question: 'How do I get Slack on my phone?',
    answer: 'The Slack mobile app is available for download on iOS, Android and Windows Phone (beta). Go to the app store on your mobile device and download the Slack mobile app for free.',
  },
  {
    question: 'I forgot my password? What do I do?',
    answer: 'Slack\'s FAQ answers that question <a target="_blank" ref="nooponer noreferrer" href="https://get.slack.help/hc/en-us/articles/201909068-Manage-your-password">here</a>',
  },
  {
    question: 'I forgot my password? What do I do?',
    answer: 'Our (D4SD\'s) objective for your participation is that you contribute to a rich discussion about mobility challenges in San Diego, that leads to potential solutions, design considerations, and ways to evaluate a solutions success. Your thoughts and conversations with others\' through the D4SD Slack Team will help to identify these barriers and opportunities, but we ask that you raise your thoughts with civility and respect for others\' in the discussion. To help identify good ideas, please use the :bulb: reaction to mark contributions that you think are headed in the right direction. Moderation rules: As the intent of this discussion is to foster creative ideas, profanity and personal attacks against other participants will not be tolerated by the D4SD moderators. Please adhere to the following rules: 1. Respect for other participants 2. No profanity 3. Do not share illegal or illicit material To help identify trolling behavior, please message the D4SD Team @d4sd Identification policy: Following the recommendations of DeCindio et al., (2003, 2012), we ask that your online identity reflect your offline identity, by logging in with your first and last name, and adding information about your interest in mobility issues to your D4SD Slack Team profile. While you have provided your email address to log-in, to protect your privacy we will not share your email address beyond the D4SD Team. When you want to raise a question privately, please message the D4SD Team @d4sd and we will add your question to the discussion through a moderator post to the group. Thank you for your participation. If you have any questions or concerns, please contact one of the moderators @d4sd. Otherwise, we hope that you find these discussions useful and engaging, as we work together through some of San Diego\'s toughest challenges.',
  },
];

const sectionTitle = 'FAQs';
const description = '';

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
      <Navbar />

      <div className={globalStyles.pageWrapper}>
        <StandardSectionBox
          sectionTitle={sectionTitle}
          text={description}
        />
        {FAQ_CONTENT.map(({ question, answer }) => (
          <QuestionBox
            key={question}
            question={question}
            answer={answer}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}

FAQ.propTypes = propTypes;
FAQ.contextTypes = contextTypes;
FAQ.defaultProps = defaultProps;

export default FAQ;
