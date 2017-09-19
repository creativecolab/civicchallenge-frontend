/* eslint-disable max-len, react/no-danger */

import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Navbar from 'components/Navbar/Navbar';
import Footer from 'components/Footer/Footer';
import StandardSectionBox from 'components/StandardSectionBox/StandardSectionBox';

import globalStyles from 'main.scss';
import styles from './About.scss';

import team from './team.png';

import scaleSDLogo from './scale-sd-logo.png';
import designLabLogo from './design-lab-logo.png';
import designForwardLogo from './design-forward-logo.png';
import sdLogo from './city-of-sd-logo.png';
/**
 * About
 */

const ABOUT = [
  {
    sectionTitle: 'About D4SD',
    text: 'Design for San Diego (D4SD) is a combined effort to solve complex city problems through design thinking and crowdsourcing, led by the <a href="http://designlab.ucsd.edu/" rel="noopener noreferrer" target="_blank">UC San Diego Design Lab</a>—with support from the <a href="https://www.nsf.gov/" rel="noopener noreferrer" target="_blank">National Science Foundation</a>, <a href="http://www.designforwardsd.com/" rel="noopener noreferrer" target="_blank">Design Forward Alliance</a> and <a href="http://www.scalesd.com/" rel="noopener noreferrer" target="_blank">SCALE SD</a>. The D4SD processes for discovery, ideation, prototyping and for implementing solutions through structured feedback was inspired by human-centered design research and crowdsourcing systems. Through this open civics approach, we hope to create opportunities for government, academia, and industry to collaboratively design innovative civic solutions.',
  },
];

const TEAM_INTRO = 'D4SD comprises an interdisciplinary group of designers, researchers, and developers led by UC San Diego professor, <a href="http://spdow.ucsd.edu/" rel="noopener noreferrer" target="_blank">Steven Dow</a>. By combining our team’s diverse talents in computer science, cognitive science, and interaction design, we have worked tirelessly to create a website and discussion platform, to provide educational resources on design and technology, and to partner with <a href="http://www.scalesd.com/" rel="noopener noreferrer" target="_blank">SCALE SD</a> and the <a href="http://www.designforwardsd.com/" rel="noopener noreferrer" target="_blank">Design Forward Alliance</a> to host a series of exciting events.';

const TEAM_TEXT = [
  {
    paragraphHeader: 'Our Mission',
    paragraphText: [
      'D4SD strives to create a platform that demonstrates the value of human-centered design and produces solutions that could incubate into companies or longer-term projects that foster economic activity in the City of San Diego and beyond.',
      'Behind the scenes, the D4SD team conducts research on design process. Our team investigates how best to obtain design feedback from many stakeholders, how to asks crowds to generate novels ideas, and how to improve online forums for civic discussions.',
      'All of us have the common goal of making this first ever city-wide design challenge a raving success for both the city and our research, but most of all for the citizens of San Diego!',
    ],
  },
  {
    paragraphHeader: 'Who We Are',
    paragraphText: [
      'Summer 2017 team:  Alejandro Panduro, Allison Endo, Brandon Hong, Brian McInnis, Gabriel Amoako, Joseph Le, Lauren Liu, Michael James, Michelle Ng, Nancy Zhang, Nanna Inie, Narges Mahyar, Reggie Wu, Sanika Moharana, Shawn Kang, and Yujin Cho.',
      'Spring 2017 team:  Alejandro Panduro, Ariel Weingarten, Alvin Ho, Anna Le, Catherine Kim, Chris Lim, Cody Pham, David Luu, Diana Nguyen, Donna Yee, Eric Richards, Eric Tseng, Gobind Sethi, Grant Chinn, Joanne Cho, Joseph Le, Karen Ma, Karthik Komatinei, Lauren Gong, Lauren Liu, Mai Eguchi, Nancy Zheng, Narges Mahyar, Qinzhuo Gong, Sanika Moharana, Tara Nejad, and Susan Lee.',
      'Special thanks Michele Morris and Don Norman in the <a href="http://designlab.ucsd.edu/" rel="noopener noreferrer" target="_blank">UC San Diego\'s Design Lab</a>, and to our partners at <a href="http://www.designforwardsd.com/" rel="noopener noreferrer" target="_blank">Design Forward Alliance</a> (Scott Robinson, James White, and Bobby Buchanan), <a href="http://www.scalesd.com/" rel="noopener noreferrer" target="_blank">SCALE SD</a> (Daniel Obodovski, Greg Hoover, Marc Bielas, Morgan Brass and Sarah Hernholm), and Charles Chamberlayne, Inga Kiderra, and Tiffany Fox for their PR expertise.',
      'D4SD also wants to acknowledge the early need finding efforts by UC San Diego undergraduates in DSGN100 who surveyed residents, attended local meetups with city and community leaders, and conducted targeted interviews. Their efforts led to important insights that helped us understand the city’s unique mobility needs.',
    ],
  },
  {
    paragraphHeader: 'Questions?',
    paragraphText: [
      'Reach out to us at <a href="mailto:team@d4sd.org">team@d4sd.org</a> to give us feedback on the site or to share ideas or problems related to mobility in San Diego.',
    ],
  },
];

const CREDITS = [
  {
    name: 'vxla',
    photoUsed: 'Landing header',
    profileLink: 'https://www.flickr.com/photos/vxla/8726075399',
    websiteName: 'Flickr',
  },
  {
    name: 'Steven Vance',
    photoUsed: 'Challenge Brief Fatal 15',
    profileLink: 'https://www.flickr.com/photos/jamesbondsv/',
    websiteName: 'Flickr',
  },
];

const PARTNERS = [
  {
    href: 'https://www.sandiego.gov/',
    img: designLabLogo,
    alt: 'City of San Diego',
  },
  {
    href: 'http://designlab.ucsd.edu/',
    img: sdLogo,
    alt: 'UC San Diego Design Lab',
  },
  {
    href: 'http://designforwardsd.com/',
    img: designForwardLogo,
    alt: 'Design Forward Alliance',
  },
  {
    href: 'http://www.scalesd.com/',
    img: scaleSDLogo,
    alt: 'Scale SD',
  },
];


const propTypes = {};

const contextTypes = {
  router: PropTypes.object,
};

const defaultProps = {};

function About() {
  return (
    <section className={styles.about}>
      <Helmet
        title="About"
      />
      <Navbar />
      <div className={globalStyles.pageWrapper}>
        {ABOUT.map(({ sectionTitle, text }) => (
          <StandardSectionBox
            sectionTitle={sectionTitle}
            text={text}
          />
        ))}
        <div className={styles.partnersWrapper}>
          <div className={styles.partners}>
            {PARTNERS.map(({ href, img, alt }) => (
              <a key={alt} href={href} target="_blank" rel="noopener noreferrer">
                <img className={styles.sponsorImage} src={img} alt={alt} />
              </a>
            ))}
          </div>
        </div>
        <div className={styles.teamWrapper}>
          <h2 className={globalStyles.grey}>Our Team</h2>
          <div className={styles.fullWidthImg}>
            <img src={team} alt="team" />
          </div>
          <div className={styles.section}>
            <p
              dangerouslySetInnerHTML={{
                __html: TEAM_INTRO,
              }}
            />
            {TEAM_TEXT.map(({ paragraphHeader, paragraphText }) => (
              <div className={styles.teamText}>
                <h3>{paragraphHeader}</h3>
                {paragraphText.map(newParagraph =>
                  <p key={newParagraph}>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: newParagraph,
                      }}
                    />
                  </p>
                  )}
              </div>
            ))}
          </div>
        </div>
        <div className={styles.ackWrapper}>
          <h2 className={globalStyles.grey}>Acknowledgements</h2>
          {CREDITS.map(({ name, photoUsed, profileLink, websiteName }) => (
            <div className={styles.creditsWrapper}>
              <span>{photoUsed} image by <a href={profileLink}>{name}</a> on {websiteName}.</span>
              <br />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </section>
  );
}

About.propTypes = propTypes;
About.contextTypes = contextTypes;
About.defaultProps = defaultProps;

export default About;
