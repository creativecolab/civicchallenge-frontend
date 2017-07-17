import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';

import Timeline from './components/Process/Process';

import styles from './HowItWorks.scss';


/**
 * HowItWorks
 */

const GET_INVOLVED = [
  'Go the the Register page to become a member of the D4SD Slack team!',
  'Read the design briefs under the Discover phase and participate in discussions about mobility problems in San Diego.',
  'Check out the brainstorming questions under the Ideate phase, generate clever solutions, and find teammates with similar ideas.',
  'Form a team and build a prototype together. Then enter a team submission by October 15th that will be showcased at the Design Forward event!',
  'Provide feedback and ratings on solutions submitted by other teams. Our panel of experts will choose winners for each design brief.',
  'Attend the Design Forward Summit on October 26-27 to pitch your solution and and compete for cash prizes and other awards.',
];


const propTypes = {};

const contextTypes = {
  router: PropTypes.object,
};

const defaultProps = {};

function HowItWorks() {
  return (
    <div className={styles.HowItWorks}>
      <Helmet
        title="HowItWorks"
      />
      <Header
        backgroundImg={''}
        headerText="How It Works"
        subheaderText={''}
        showButton={false}
      />
      <div className={styles.contentText}>
        <div id="theChallenge" className={styles.contentContainer}>
          <h2>The Challenge</h2>
          <p>The 2017 Civic Design Challenge is focused on shaping a San Diego in which
          everybody is able to move freely.</p>
          <p>D4SD has created an opportunity for residents to learn and practice human-centered
          design to solve civic challenges. This year focuses on how to improve mobility in San
          Diego, now and in the future. Mobility is a complex topic, with issues related to
          traffic/parking, accessibility/aging, autonomous vehicles, and public transit.
          Check out the design briefs, pick one or two that interest you, then jump into the
          discussion by signing up. We’re excited to see you there!</p>
          <p>The Design Challenges will officially kick-off in September with an in-person
          design sprint and culminate at the Design Forward Summit on Oct 26-27. At the
          summit, we will announce winners and give out prizes, including cash and support
          for potential startups.</p>
        </div>
        <div id="getStarted" className={styles.contentContainer}>
          <h2>Get Started</h2>
          <p>Ready to jump in and start participating in the biggest design challenge in San
          Diego?  Here’s how to get started today. See the “Design Process” section for more details.</p>
          <ol>
            {GET_INVOLVED.map(point =>
              <li key={point}>{point}</li>
            )}
          </ol>
          <div className={styles.sectionBtn}>
            <a className={styles.blueOutline} href="">LEARN MORE</a>
          </div>
        </div>
        <div id="prizesAwards" className={styles.contentContainer}>
          <h2>Prizes & Rewards</h2>
          <p>D4SD invites you get involved with the civic challenges. Feel good about contributing to the betterment of
          San Diego. Meet leaders in business, civics, and design. Find like-minded peers to join you on this challenge.
          Also, compete for these awesome prizes!</p>
          <div className={styles.list}>
            <h5>Best Overall Design Solution:</h5>
            <p>This prize goes the overall best submission and can be for any design brief.</p>
            <h5>Best Prototypes</h5>
            <p>The awards for best prototypes will go to the team with the best submission in each category of design brief.</p>
            <h5>Best Student Designs</h5>
            <p>The awards for best student prototype will be awarded to the best student teams in each category.
            For teams to qualify, each teammate must submit a valid student ID. Students teams are allowed to have
            one non-student mentor on their team.</p>
            <h5>People’s Choice Award</h5>
            <p>This award goes to the best overall solution as determined by votes on the D4SD website.</p>
          </div>
          <div className={styles.details}>
            <p>All valid submissions will receive free tickets to the Design Forward Summit and will have a chance to compete
            for the prizes. Note: student teams will be eligible for the Best Student Design categories, as well as the Best
              Prototype and Best Overall Design Solutions.</p>
            <p>All submissions will appear on the D4SD website and will receive recognition at the award ceremony in October.
            Every team that showcases their solution at the Summit will also get special gifts at the event.</p>
            <p>D4SD has also formed great partnerships in order to offer targeted resources (e.g., access to technologies,
              data, hackerspaces, tools, development kits, sensors and more).</p>
            <p>We will also be looking to match the leading prototypes with leading designers, venture capitalists and city
            officials to accelerate your solutions.</p>
          </div>
        </div>
        <div id="process" className={styles.contentContainer}>
          <h2>Process</h2>
          <p>D4SD has developed a series of public activities designed to inspire civic solutions to Mobility challenges in our city.
          It is not necessary to participate in every activity, D4SD is designed so that you can enter and add meaningfully at any point in the process.</p>
          <p>During the <b>Discover</b> phase, you can learn about the design briefs and discuss issues of mobility with fellow
          San Diegans. During the <b>Ideate phase</b>, with a focus on specific problems, you will generate innovative solutions
          and share your ideas with potential teammates.  In the <b>Prototype</b> phase, you can work with teammates to produce a
          rough “mockup” of your best ideas. This can be a physical model, an elaborate sketch, a click-through of a user interface,
          a 3D model, etc. — anything that makes your idea concrete and testable.  In the <b>Implement</b> phase, selected teams will
          have opportunities to partner with City of San Diego to move forward on their civic proposals or with SCALE to explore
          funding options for an early-stage startup.</p>
          <Timeline />
          <div className={styles.sectionBtn}>
            <a className={styles.blueOutline} href="">LEARN MORE</a>
          </div>
        </div>
        <div id="registerCallout" className={styles.contentContainer}>
          <h2>Ready to take on the challenge?</h2>
          <p>Ready to take on the challenge tagline goes here</p>
          <div className={styles.sectionBtn}>
            <a className={styles.salmon} href="">REGISTER TODAY</a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

HowItWorks.propTypes = propTypes;
HowItWorks.contextTypes = contextTypes;
HowItWorks.defaultProps = defaultProps;

export default HowItWorks;
