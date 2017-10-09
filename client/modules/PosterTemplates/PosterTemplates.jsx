/* eslint-disable max-len, react/no-danger */

import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Navbar from 'components/Navbar/Navbar';
import Footer from 'components/Footer/Footer';

import StandardSectionBox from 'components/StandardSectionBox/StandardSectionBox';
import globalStyles from 'main.scss';

import styles from './PosterTemplates.scss';

import posterTemplate from './D4SD-poster-template.png';
import posterExample from './D4SD-poster-example.png';

/**
 * PosterTemplates
 */

const sectionTitle = 'Poster Template and Example';
const description = '<p>Create a poster with a size of <b>40” tall by 30” wide in full color</b> and adopt a design language that best represents the team\'s identity/concept. The poster should introduce the specific challenge your team chooses as a focus, highlight insights from user research, and introduce your novel idea for how to solve the challenge.</p><p>D4SD will pay to print and display your poster at the Design Forward Community mixer. Your poster must include the D4SD partner banner at the very bottom as shown in these examples. Templates for Powerpoint, Photoshop, Illustrator are available <a href="https://drive.google.com/drive/folders/0B0hGIWeXKALjQzhzdFZveXdZYzQ?usp=sharing" target="_blank" ref="noreferrer nooponer">here</a> for download.</p>';

const CONTENT = [
  {
    paragraph: [
      'Here’s what make a good poster:',
    ],
    bullets: [
      'Clearly introduces the challenge, user research insights, and proposed solutions',
      'Follows effective visual design principles (i.e., makes use of hierarchy, images, and a grid)',
      'Represents the brand identity of the team in a visually appealing way.',
      'Demonstrates the rigor of your human-centered design process (i.e., include user research data such as quotes, storyboards, and other process materials.)',
    ],
  },
  {
    paragraph: [
      'D4SD will cover the cost of printing posters for all valid submissions under the following conditions:',
    ],
    bullets: [
      'The entry must be complete and valid as determined by the D4SD organizing team.',
      'The poster must follow the guidelines and use the poster template specified here.',
      'At least one team member must be able to present your poster at the Design Forward Community Mixer on Oct 25 from 6-9pm.',
      'If your team is selected as a finalist, at least one team member must be available for the Design Forward Summit on Oct 26th from 7am-7pm.',
    ],
  },
];

const propTypes = {};

const contextTypes = {
  router: PropTypes.object,
};

const defaultProps = {};

function PosterTemplates() {
  return (
    <section className={styles.posterTemplates}>
      <Helmet
        title="Poster Template"
      />
      <Navbar />

      <div className={globalStyles.pageWrapper}>
        <StandardSectionBox
          sectionTitle={sectionTitle}
          text={description}
        />

        <div className={globalStyles.contentContainer}>
          <div className={styles.posters}>
            <img src={posterTemplate} alt="poster template" />
            <img src={posterExample} alt="poster exmaple" />
          </div>
        </div>

        <div className={globalStyles.contentContainer}>
          <div className={styles.posterParagraphs}>
            {CONTENT.map(({ paragraph, bullets }) => (
              <div className={styles.paragraphWrapper}>
                <p>{paragraph}</p>
                <ul>
                  {bullets.map(bullet => (
                    <li key={bullet}><span>{bullet}</span></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

      </div>

      <Footer />
    </section>
  );
}

PosterTemplates.propTypes = propTypes;
PosterTemplates.contextTypes = contextTypes;
PosterTemplates.defaultProps = defaultProps;

export default PosterTemplates;
