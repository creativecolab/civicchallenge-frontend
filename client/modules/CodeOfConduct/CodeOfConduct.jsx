/* eslint-disable max-len, react/no-danger */

import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Navbar from 'components/Navbar/Navbar';
import Footer from 'components/Footer/Footer';

import StandardSectionBox from 'components/StandardSectionBox/StandardSectionBox';
import globalStyles from 'main.scss';

import styles from './CodeOfConduct.scss';

/**
 * CodeOfConduct
 */

const CONDUCT_DETAILS = [
  {
    ruleCategory: 'Moderation Rules',
    ruleDetails: [
      'As the intent of this discussion is to foster creative ideas, profanity and personal attacks against other participants will not be tolerated by the D4SD moderators. Please adhere to the following rules:',
      '<ol><li>Respect for other participants</li><li>No profanity</li><li>Do not share illegal or illicit material</li><li>Talk through different perspectives and disagreements</li></ol>',
    ],
  },
  {
    ruleCategory: 'Report Bad Behavior',
    ruleDetails: [
      'To help identify trolling behavior, please send an email to <a href="mailto:team@d4sd.org" className={globalStyles.styledLink}>team@d4sd.org</a> with the Slack Alias (e.g., @d4sd) of the offending participant so that we can investigate the situation.',
    ],
  },
  {
    ruleCategory: 'Talk Through Disagreements',
    ruleDetails: [
      'When you see a message to the <a href="https://join.slack.com/t/d4sd/shared_invite/MjExMjA5MDY0MjkzLTE0OTk3ODcxMjktMzIxYmRkMTJkMA/" target="_blank" rel="noopener noreferrer">D4SD Slack Team</a> discussion that introduces a view that is different, or in disagreement with your perspective, talk about it. Rather than staying silent, engage with the other participant by replying to their message. We recognize that it can be hard to engage with perspectives that are different or in disagreement with your own, so here are a few tips:',
      '<ul><li><p><i>First ask for more information:</i>  Before responding with a message stating your perspective, try to get more information about where the other person’s perspective comes from. For example, write a reply to the other person that restates their perspective (this demonstrates to them that you understand what they are saying), and then ask them to expand on the aspects of their perspective that you disagree with.</p></li><li><p><i>Share a story:</i>  Personal experience helps to contextualize your perspective about a civic issue in the context of everyday life. When confronted with a perspective that is different from yours, think about what experiences or events led you to form your perspective. Share this story with the group, (e.g., where were you, what were you doing, how does the experience relate to your perspective of the civic issue). Encourage the other person to share their own story.</p></li><li><p><i>Where do we agree?</i>  While you might disagree with another person, you likely agree about many other elements of the mobility problem. For example, you might have a different perspective about where a trolley station should be located, but might agree that a trolley station is needed. Make a game out of finding where you agree and disagree!</p></li></ul>',
    ],
  },
  {
    ruleCategory: 'Identification policy',
    ruleDetails: [
      'We ask that your online identity reflect your offline identity. Please log-in with your first and last name, and add information about your interest in mobility issues to your <a href="https://join.slack.com/t/d4sd/shared_invite/MjExMjA5MDY0MjkzLTE0OTk3ODcxMjktMzIxYmRkMTJkMA/" target="_blank" rel="noopener noreferrer">D4SD Slack Team</a> profile. While you have provided your email address to log-in, we will help to protect your privacy by not sharing your email address beyond the D4SD Team.',
    ],
  },
  {
    ruleCategory: 'Contact',
    ruleDetails: [
      'When you want to raise a question privately, please message the D4SD Team @d4sd or email <a href="mailto:team@d4sd.org" className={globalStyles.styledLink}>team@d4sd.org</a> and we will add your question to the discussion through a moderator post to the group. Otherwise, we hope that you find these discussions useful and engaging, as we work together through some of San Diego\'s toughest challenges.',
    ],
  },
];

const sectionTitle = 'Code of Conduct for the 2017 D4SD Challenges';
const description = 'Our (D4SD\'s) objective for your participation as part of the <a href="https://join.slack.com/t/d4sd/shared_invite/MjExMjA5MDY0MjkzLTE0OTk3ODcxMjktMzIxYmRkMTJkMA/" target="_blank" rel="noopener noreferrer">D4SD Slack Team</a> and throughout the Civic Design Challenge, is that you contribute to a rich discussion that leads to design considerations, insights, and ways to evaluate potential solutions. We hope that through conversation with other San Diegans, your thoughts will help to spark new ideas to improve mobility in our city.';

const thankYouStatement = 'Thank you for your participation.';

const propTypes = {};

const contextTypes = {
  router: PropTypes.object,
};

const defaultProps = {};

function CodeOfConduct() {
  return (
    <section className={styles.codeOfConduct}>
      <Helmet
        title="Code Of Conduct"
      />
      <Navbar />

      <div className={globalStyles.pageWrapper}>
        <StandardSectionBox
          sectionTitle={sectionTitle}
          text={description}
        />

        <div className={globalStyles.contentContainer}>
          {CONDUCT_DETAILS.map(({ ruleCategory, ruleDetails }) => (
            <div className={styles.details}>
              <h2>{ruleCategory}</h2>
              {ruleDetails.map(paragraphText =>
                <p
                  key={paragraphText}
                  dangerouslySetInnerHTML={{
                    __html: paragraphText,
                  }}
                />
              )}
            </div>
          ))}
          <p>{thankYouStatement}</p>
        </div>

      </div>

      <Footer />
    </section>
  );
}

CodeOfConduct.propTypes = propTypes;
CodeOfConduct.contextTypes = contextTypes;
CodeOfConduct.defaultProps = defaultProps;

export default CodeOfConduct;
