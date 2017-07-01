import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';

import styles from './DesignBrief.scss';

/**
 * DesignBrief
 */

const propTypes = {};

const contextTypes = {
  router: PropTypes.object,
};

const defaultProps = {};

function DesignBrief() {
  return (
    <div className={styles.DesignBrief}>
      <Helmet
        title="Design Brief"
      />
      <Header
        backgroundImg={''}
        headerText={'Design Brief'}
        subheaderText={''}
        showButton={false}
      />
      <section className={styles.contentContainer}>
        <section className={styles.dbHeader}>
          <div className={styles.dbHeaderText}>
            <h6>Design Brief</h6>
            <h1>Design Brief Title</h1>
            <p>The first of the month is coming, we have to get money, we have no choice.
            It cost money to eat and they don’t want you to eat. They key is to have every
            key, the key to open every door. You see the hedges, how I got it shaped up
            It’s important to shape up your hedges, it’s like getting a haircut, stay fresh.
            Look at the sunset, life is amazing, life is beautiful, life is what you make
            it. Bless up. I told you all this before, when you have a swimming pool, do
            not use chlorine, use salt water, the healing, salt water is the healing. The
            ladies always say Khaled you smell good, I use no cologne. Cocoa butter is the key.</p>
          </div>
          <div className={styles.dbHeaderImg} />
        </section>

        <section className={styles.dbNavBar}>
          <h4>Overview</h4>
          <h4>Discussion</h4>
          <h4>Resources</h4>
        </section>
      </section>
      <hr />
      <section id="overview" className={styles.contentContainer}>
        <div className={styles.overview}>
          <div className={styles.overviewText}>
            <h2>The Brief</h2>
            <p>To succeed you must believe. When you believe, you will succeed. Bless up.
            Congratulations, you played yourself. You smart, you loyal, you a genius. They
            never said winning was easy. Some people can’t handle success, I can. Lion!
            The key is to enjoy life, because they don’t want you to enjoy life. I promise
            you, they don’t want you to jetski, they don’t want you to smile. You see the
            hedges, how I got it shaped up? It’s important to shape up your hedges, it’s like
            getting a haircut, stay fresh. Learning is cool, but knowing is better, and I know
            the key to success.</p>
          </div>
          <div className={styles.overviewSideBar}>
            <div className={styles.currentPhase}>
              <h2>Current Phase</h2>
              <div className={styles.timeLine} />
              <span>Phase 1: </span>
              <span>Ideation</span>
            </div>
            <div className={styles.currGoingOn}>
              <h2>What&#39;s Going On Now</h2>
              <ul>
                <li>Point 1</li>
                <li>Point 2</li>
                <li>Pointe 3</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section id="discussion" className={styles.contentContainer}>
        <div className={styles.discussion}>
          <div className={styles.discussionBox}>
            <div className={styles.discussionQBar}>
              <div className={styles.discussionQBarText}>
                <h3>Discussion Topic</h3>
                <h5>CURRENT</h5>
              </div>
              <div className={styles.discussionBtn}>
                <button>+</button>
              </div>
            </div>
            <div id="discussionAnswer" className={styles.discussionAnswerBox}>
              <div className={styles.discussionContent}>
                <div className={styles.discussionQuestion}>
                  <h4>Discussion Question</h4>
                  <p>To succeed you must believe. When you believe, you will succeed. Bless up.
                  Congratulations, you played yourself. You smart, you loyal, you a genius. They
                  never said winning was easy. Some people can’t handle success, I can. Lion!
                  The key is to enjoy life, because they don’t want you to enjoy life. I promise
                  you, they don’t want you to jetski, they don’t want you to smile. You see the
                  hedges, how I got it shaped up? It’s important to shape up your hedges, it’s like
                  getting a haircut, stay fresh. Learning is cool, but knowing is better, and I know
                  the key to success.</p>
                </div>
                <div className={styles.discussionSlack}>
                  <div className={styles.discussionHighlights}>
                    <h4>Highlights from Slack</h4>
                    <ul>
                      <li>Point 1</li>
                      <li>Point 2</li>
                      <li>Pointe 3</li>
                    </ul>
                  </div>
                  <div className={styles.discussionExcerpts}>
                    <h4>Selected Messages from Slack</h4>
                    <div className={styles.discussionSlackMsgs} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="resources" className={styles.contentContainer}>
        <div className={styles.resources}>
          <h3>Resources</h3>
          <div className={styles.resourcesContainer}>
            <div className={styles.resourcesBox}>
              <div className={styles.resourceImg} />
              <div className={styles.resourceText}>
                <h6>Title of Resource</h6>
                <p>To succeed you must believe. When you believe, you will succeed. Bless up.
                Congratulations, you played yourself. You smart, you loyal, you a genius. They
                never said winning was easy. Some people can’t handle success, I can. Lion!
                The key is to enjoy life, because they don’t want you to enjoy life.</p>
                <a href="">Link to Resource</a>
              </div>
            </div>
            <hr />
            <div className={styles.resourcesBox}>
              <div className={styles.resourceImg} />
              <div className={styles.resourceText}>
                <h6>Title of Resource</h6>
                <p>To succeed you must believe. When you believe, you will succeed. Bless up.
                Congratulations, you played yourself. You smart, you loyal, you a genius. They
                never said winning was easy. Some people can’t handle success, I can. Lion!
                The key is to enjoy life, because they don’t want you to enjoy life.</p>
                <a href="">Link to Resource</a>
              </div>
            </div>
            <hr />
          </div>
        </div>
      </section>
      <Footer />

    </div>
  );
}

DesignBrief.propTypes = propTypes;
DesignBrief.contextTypes = contextTypes;
DesignBrief.defaultProps = defaultProps;

export default DesignBrief;
