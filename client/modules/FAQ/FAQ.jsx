/* eslint-disable max-len */

import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Navbar from 'components/Navbar/Navbar';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';

// import globalStyles from 'main.scss';

import QuestionBox from './components/QuestionBox/QuestionBox';
import styles from './FAQ.scss';


import headerImg from './headerImg.jpg';
/**
 * FAQ
 */

/* url variables
const designLabLink = 'http://designlab.ucsd.edu/';
const scaleLink = 'http://www.scalesd.com/';
const dfLink = 'http://designforwardsd.com/';
<a href="" target="_blank" rel="noopener noreferrer"><a href="" target="_blank" rel="noopener noreferrer">Downtown Works</a></a>

const rel = 'noopener noreferrer';
*/

const FAQ_CONTENT = [
  {
    question: 'What is D4SD?',
    answer: 'Design for San Diego (D4SD) is a civic design challenge initiated by the <a href="http://designlab.ucsd.edu/" target="_blank" rel="noopener noreferrer">UC San Diego Design Lab</a> in partnership with the City of San Diego, <a href="http://designforwardsd.com/" target="_blank" rel="noopener noreferrer">Design Forward Alliance</a>, and <a href="http://www.scalesd.com/" target="_blank" rel="noopener noreferrer">SCALE SD</a>.<br><br>This year’s challenge focuses on urban mobility. We all have places to go and people to see. So, whether you’re traveling by car, bike, train, bus, boat or foot for work or play, mobility significantly affects millions of citizens every day.<br><br>This year’s challenge focuses on four topics:<br><ul><li>Enhancing the commuter experience</li><li>Promoting walkable and bikeable communities</li><li>Improving accessibility</li><li>Preparing for our city’s future with autonomous vehicles</li></ul>Learn more about these four topics under “Challenge Briefs” on the <a href="https://d4sd.org/challenges/" target="_blank" rel="noopener noreferrer">D4SD.org website</a>.  You can also join the D4SD Slack discussion forum (a free online messaging and collaboration software) to learn and share information about mobility problems in the San Diego region.',
  },
  {
    question: 'What is unique about the D4SD Civic Design Challenge?',
    answer: 'As an initiative of the <a href="http://designlab.ucsd.edu/" target="_blank" rel="noopener noreferrer">UC San Diego Design Lab</a>, we have created a process that uses concepts from human-centered design and crowdsourcing to help innovators collectively solve local civic issues. Further, by partnering with the City of San Diego and regional entities like SCALE SD and the Design Forward Alliance, D4SD to support community integration for both the process and the potential solutions.<br><br> You will have an opportunity to chat online through our Slack forum (a free online messaging and collaboration software) as well as through a series of in-person events to help you connect with other innovators and access design practitioners, who can mentor you through your efforts.<br><br>Here’s how our four-stage process works:<ol><li><b>Discover:</b> Learn about the local civic issues through the D4SD.org website, through the Slack discussion forum, and through user research. Your goal here is to become an expert on a specific mobility challenge facing people in the San Diego region. Teach others about what you discover.</li><li><b>Ideate:</b> Pick a specific mobility problem and generate many creative solutions to address the issue. Join us for group brainstorming at the Sept 22nd Design Sprint and Hackathon, or jump on the Slack discussion forum.  The goal here is not to just run with your first idea. Come up with lots of ideas, merge them with others, and choose a concept that will be novel, feasible, and impactful.</li><li><b>Prototype:</b> Now that you and your team have an idea, it is time to build a mockup of your concept.  A prototype can be anything that makes your idea concrete and testable, such as a click-through demo, a 3D model, a service-design blueprint, an algorithm, a physical mockup, a video demo, etc. Your goal here is to create a prototype that will help you communicate your vision and test assumptions about your solution. Prototypes are due no later than Oct 22 at 11:59PM PDT through the D4SD website.</li><li><b>Implement:</b> Teams with the best prototypes will be selected as finalists and will have unique opportunities to pitch their concept to startup accelerators and the City of San Diego. We would love for your best solutions to make it in the real-world!</li></ol>Furthermore, the D4SD civic design challenge has partnered with <a href="http://www.scalesd.com/" target="_blank" rel="noopener noreferrer">SCALE SD</a> and the <a href="http://designforwardsd.com/" target="_blank" rel="noopener noreferrer">Design Forward Alliance</a> to host a series of <a href="https://d4sd.org/events/" target="_blank" rel="noopener noreferrer">in-person events</a> to help you connect with other innovators. Our goal is to motivate and support citizens in learning how to use human-centered design to truly understand the topic and then creatively come up with solutions that improve mobility in San Diego.',
  },
  {
    question: 'Why should I participate in D4SD?',
    answer: 'Join D4SD for this unique opportunity to collaborate and compete with other city innovators to help solve transportation-related issues facing San Diego and cities around the world. The best solutions will earn cash prizes and private one-on-one meetings with city leaders and startup investors.<br><br>Benefits include:<ul><li>Solve real problems and inspire change in your community!</li><li>Learn human-centered design practices from professional designers and educators in the <a href="http://designlab.ucsd.edu/" target="_blank" rel="noopener noreferrer">UC San Diego Design Lab</a>.</li><li>Work with real data and collaborate with <a href="https://data.sandiego.gov/" target="_blank" rel="noopener noreferrer">City of San Diego\'s data portal and award-winning Performance and Analytics Department</a>.</li><li>Make new connections through networking opportunities with designers, engineers, data scientists, civic leaders, entrepreneurs, and other innovators.</li><li>Attend community events:<ul><li>All team members who present a valid submission will get a free ticket to the <a href="http://designforwardsd.com/" target="_blank" rel="noopener noreferrer">Design Forward</a> community mixer on Oct 25th from 6-9pm (a $50 value)</li><li>Finalists receive a free ticket to the <a href="http://designforwardsd.com/" target="_blank" rel="noopener noreferrer">Design Forward Summit</a> on Oct 26th (a $150 value)</li></ul><li>Win prizes:<ul><li>All teams will receive special gifts for participating.</li><li>Teams selected as finalists will be eligible to win cash prizes during the awards ceremony on Oct 26th.</li><li>Top teams will get an opportunity to have their solutions supported and funded by the <a href="http://www.scalesd.com/" target="_blank" rel="noopener noreferrer">SCALE SD</a> startup accelerator.</li></ul></li></ul>',
  },
  {
    question: 'What are the basic requirements for participating in the challenge?',
    answer: 'To participate in the 2017 civic design challenge, you or your team must register through the D4SD website by Oct 10th.  You can edit your submission throughout October. The final deadline for entries is Oct 22nd at 11:59pm PDT.<br><br>A valid submission includes a written summary of a specific problem you aim to solve, a written summary of your solution, a link to a prototype of your solution, and a visual poster (40” tall by 30” wide in full color) that can be printed and displayed at the Oct 25th <a href="http://designforwardsd.com/" target="_blank" rel="noopener noreferrer">Design Forward</a> community event.<br><br>You do NOT need to participate in the Oct 25th event in order to be eligible for the competition. You do NOT need to be an expert. You do NOT need to be from the San Diego region. We welcome good ideas from anyone and anywhere in the world.<br><br>However, if your solution is selected as a finalist (on Oct 25), at least one team member must appear at the <a href="http://designforwardsd.com/" target="_blank" rel="noopener noreferrer">Design Forward Summit</a> on Oct 26 in order to present the poster (7am-5pm) and to be part of the Awards Ceremony (5pm-7pm).',
  },
  {
    question: 'Can I submit multiple solutions or work on multiple teams?',
    answer: 'No. Participants can only submit one entry to the challenge, either as an individual or as a team. Teams can have up to five team members.',
  },
  {
    question: 'Who owns the solutions?',
    answer: 'Individuals or teams will retain all intellectual property rights on solutions submitted to the D4SD Civic Design Challenge. As an initiative from the <a href="http://designlab.ucsd.edu/" target="_blank" rel="noopener noreferrer">UC San Diego Design Lab</a>, D4SD is a non-profit dedicated to demonstrating the value of human-centered design and incubating great ideas into companies or longer-term projects that foster economic activity in the City of San Diego and beyond.',
  },
  {
    question: 'When and where are the in-person events for the 2017 Civic Design Challenge?',
    answer: 'Through our partnerships with <a href="http://www.scalesd.com/" target="_blank" rel="noopener noreferrer">SCALE SD</a> and the <a href="http://designforwardsd.com/" target="_blank" rel="noopener noreferrer">Design Forward Summit</a>, we have put together an exciting program of in-person events for networking and showcasing your talents.<br><br>Sept 21-23<br><b>D4SD Kick-off Design Sprint and Hackathon</b><br>Hosted by <a href="http://www.scalesd.com/" target="_blank" rel="noopener noreferrer">SCALE SD</a> at <a href="http://downtownworks.com/" target="_blank" rel="noopener noreferrer">Downtown Works</a><ul><li>Thursday, September 21, 2017: 10am - 1pm<br><b><a href="https://www.eventbrite.com/e/kickoff-for-the-2017-d4sd-civic-design-challenge-tickets-37543424393/" target="_blank" rel="noopener noreferrer">Kick-Off & Information Session</a></b><br>Introduction by Mayor Faulconer, Chancellor Khosla & Don Norman</li><li>Friday, September 22, 2017:  5:30pm - all night<br><b><a href="https://www.eventbrite.com/e/2017-d4sd-civic-design-challenge-tickets-37553137445/" target="_blank" rel="noopener noreferrer">D4SD Challenge: Design Sprint & Hackathon - Day 1</a></b><br>Learn about the challenges, brainstorm, form teams, & build prototypes</li><li>Saturday, September 23, 2017:  all day - 9pm<br><b><a href="https://www.eventbrite.com/e/2017-d4sd-civic-design-challenge-tickets-37553137445/" target="_blank" rel="noopener noreferrer">D4SD Challenge: Design Sprint & Hackathon - Day 2</a></b><br>Present prototypes, win prizes & party</li></ul>Oct 25-26<br><b>D4SD Challenge Judging and Prize Ceremony</b><br>Hosted by <a href="http://designforwardsd.com/" target="_blank" rel="noopener noreferrer">Design Forward Summit</a> at Broadway Pier & Liberty Station<ul><li>Sunday Oct 22, 2017: 11:59pm<br><b><a href="https://d4sd.org/getinvolved/" target="_blank" rel="noopener noreferrer">D4SD Challenge Deadline</a></b><br>All entries must be submitted on D4SD.org</li><li>Wednesday, Oct 25, 2017:  6pm-9pm<br><b><a href="http://www.designforwardsd.com/" target="_blank" rel="noopener noreferrer">D4SD Challenge: Team Showcase and People’s Choice Award</a></b><br>Teams invited to present posters at <a href="http://designforwardsd.com/" target="_blank" rel="noopener noreferrer">Design Forward</a> community mixer (<a href="https://www.portofsandiego.org/the-port-pavilion-on-broadway-pier.html/" target="_blank" rel="noopener noreferrer">Broadway Pier</a>)</li><li>Thursday, Oct 26, 2017:  7am-7pm<br><b><a href="http://designforwardsd.com/" target="_blank" rel="noopener noreferrer">D4SD Challenge:  Finalist Showcase and Awards Ceremony</a></b><br>Finalists posters and award ceremony at <a href="http://designforwardsd.com/" target="_blank" rel="noopener noreferrer">Design Forward Summit</a> (<a href="http://libertystation.com/" target="_blank" rel="noopener noreferrer">Liberty Station</a>)</li></ul>',
  },
  {
    question: 'Do I need to attend the in-person events to enter the challenge?',
    answer: 'You do not need to attend any of the in-person events in order to submit a solution through the D4SD website. All valid entries will be judged through an online judgment process.<br><br>Finalists will be announced at the <a href="http://designforwardsd.com/" target="_blank" rel="noopener noreferrer">Design Forward</a> community mixer on Oct 25th 6-9pm at <a href="https://www.portofsandiego.org/the-port-pavilion-on-broadway-pier.html/" target="_blank" rel="noopener noreferrer">Broadway Pier</a> in San Diego (<a href="https://www.google.com/maps/place/1000+N+Harbor+Dr,+San+Diego,+CA+92101/@32.7163863,-117.1756931,17z/data=!3m1!4b1!4m5!3m4!1s0x80d954ab4dd6a349:0x26798b9b14d0c140!8m2!3d32.7163863!4d-117.1735044/" target="_blank" rel="noopener noreferrer">1000 N Harbor Dr, San Diego, CA 92101</a>). All team members who present a valid submission will get a free ticket. In case you cannot make it to the event, we will also contact the finalists through email.<br><br>If you team is selected as a finalist, we request at least one team member appear at the <a href="http://designforwardsd.com/" target="_blank" rel="noopener noreferrer">Design Forward Summit</a> main event on Oct 26th at <a href="http://libertystation.com/" target="_blank" rel="noopener noreferrer">Liberty Station</a> (<a href="https://www.google.com/maps/place/2640+Historic+Decatur+Rd,+San+Diego,+CA+92106/@32.7377119,-117.2159466,17z/data=!3m1!4b1!4m5!3m4!1s0x80deab043d0c80a1:0xa203f5de95283371!8m2!3d32.7377119!4d-117.2137579/" target="_blank" rel="noopener noreferrer">2640 Historic Decatur Rd, San Diego, CA</a>) to present their poster starting at 7am and to verbally pitch their solution on stage at the Awards Ceremony that same evening (5-7pm).  Teams selected as finalists will get free limited-access tickets for the summit (a $150 value).',
  },
  {
    question: 'What criteria will be used to judge submissions? How will judging work?',
    answer: 'To enter the D4SD Civic Design Challenge, teams must produce the following deliverables by Oct 22 at 11:59PM PDT: write a problem statement and solution statement, submit a prototype, and create a poster that summarizes everything.<br><br>In general, solutions to the D4SD Civic Design Challenge will be assessed based on three key criteria:<ol><li>Novelty/creativity (How unique is the solution compared to other available solutions?)</li><li>Feasibility (How likely can this solution be implemented? Will it work in the real world?)</li><li>Potential impact (How will the solution affect people? Does it have any downsides?)</li></ol>Each deliverable will also be part of the overall judgement process:<ul><li>Problem statement:<ul><li>Identities and clearly articulates a real-world problem.</li><li>Provides evidence of problem (statistics pulled from cited sources, interview quotes with affected parties, etc.).</li><li>Explains how solving the problem will affect people</li></ul></li><li>Solution statement:<ul><li>Explains concept clearly and concisely.</li><li>Describes how the solution is novel/creative.</li><li>Indicates how the solution would be practical and feasible to implement.</li><li>Predicts the potential impact on both primary and secondary stakeholders.</li></ul></li><li>Prototype:<ul><li>Provides a simple demonstration of the proposed solution.</li><li>Explains clearly how the solution works.Documents the overall process of creating the prototype and shows the iterative effort put into creating a minimal viable prototype.</li></ul></li><li>Poster (40” tall by 30” wide in full color):<ul><li>Offers a visually appealing representation of the problem and proposed solution.</li><li>Follows effective visual design principles</li><li>Represents the brand identity of the team.</li></ul></li></ul>The judging process has two rounds:<ol><li>In round one, a panel of experts in human-centered design will assess the deliverables according to the criteria listed above. This judging process will happen online immediately after the <b>Oct 22 11:59pm PDT deadline</b>.  Finalists will be announced on October 25th at the <a href="http://designforwardsd.com/" target="_blank" rel="noopener noreferrer">Design Forward</a> community mixer at Broadway Pier (6-9pm).</li><li>In round two, three distinguished jurors will assess the finalists during the poster session at the <a href="http://designforwardsd.com/" target="_blank" rel="noopener noreferrer">Design Forward Summit</a> on Oct 26th. Teams must have at least one team member present throughout the day (7am-7pm) to interact with the jurors.  Finalist teams will also deliver a two-minute verbal pitch that evening during the D4SD Awards Ceremony.</li></ol>',
  },
  {
    question: 'What are the rules and resources for teams?',
    answer: 'You do not need to work as part of a team. Individuals can create submissions on their own. If you do have a team, it can have at most five team members.<br><br>Each team can request a private Slack channel on the D4SD discussion forum by sending an email to team@d4sd.org with the subject line “Slack team” with the team name, as well as the names and email addresses for each team member.<br><br>To officially enter the challenge, each individual or team must create an entry on the D4SD website by October 10.',
  },
  {
    question: 'How can I find team members?',
    answer: 'While you do not need a team to enter the competition, a team can help you build your good idea into a great solution.  An effective team is one that has a mix of diverse talents all striving towards a common goal.<br><br>The best way to find team members is to <a href="https://www.eventbrite.com/e/2017-d4sd-civic-design-challenge-tickets-37553137445/" target="_blank" rel="noopener noreferrer">attend the D4SD Challenge Design Sprint and Hackathon on Sept 22nd starting at 5:30pm</a>, hosted by <a href="http://www.scalesd.com/" target="_blank" rel="noopener noreferrer">SCALE SD</a> at <a href="http://downtownworks.com/" target="_blank" rel="noopener noreferrer">Downtown Works</a>.  We will be brainstorming and forming teams through a series of fun in-person activities.<br><br>If you cannot attend this event, you can join our D4SD slack channel to discuss solutions with other challenge participants. You are free to communicate directly with other participants about forming a team around your favorite ideas.',
  },
  {
    question: 'How do I register my team for the challenge?',
    answer: 'From the Get Involved page on the D4SD website, click on “Register your Team”. Here you will enter the HeroX submission process.  Click on …',
  },
  {
    question: 'Do I need to print my team’s poster? If so, when?',
    answer: 'Yes, if you plan to present your poster at the DF community mixer. If selected as a finalist, yes, we also would like to see your poster at the summit. Teams are responsible for printing their own posters.',
  },
  {
    question: 'How can I discuss the challenges with other people in the city?',
    answer: 'We created a dedicated Slack forum for you to discuss the challenge briefs with other innovators in the city.  Simply click here and follow the instructions to sign up. Slack is a free online messaging and collaboration software. When you receive the confirmation email, click on the link to join the D4SD slack forum.<br><br>After you join Slack, if you need help, you can click the “D4SD Helper Bot” to be invited to specific discussions, or send a chat to the “D4SD Team”.<br><br>All discussions on the D4SD Slack forum, must adhere to the <a href="/codeofconduct">D4SD Code of Conduct</a>.',
  },
  {
    question: 'If I still have questions, who can I contact for more information?',
    answer: 'Contact the D4SD team at <a href=“mailto:team@d4sd.org”> team@d4sd.org</a> for questions about the Civic Design Challenge or if you are having technical difficulties with the D4SD Slack discussion forum.',
  },
];

const sectionTitle = 'Frequently Asked Questions';
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
      <Header
        backgroundImg={headerImg}
        headerText={sectionTitle}
        subheaderText={description}
        showButton={false}
      />
      {/* <div className={globalStyles.pageWrapper}> */}
      <div className={styles.pageWrapper}>
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
