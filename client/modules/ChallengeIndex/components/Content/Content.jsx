import React from 'react';
import PropTypes from 'prop-types';

// import globalStyles from 'main.scss';
import styles from './Content.scss';

/**
 * Info
 */

const propTypes = {
  componentRef: PropTypes.func.isRequired,
};

const contextTypes = {
  router: PropTypes.object,
};

const defaultProps = {};

function Content(props) {
  return (
    <section id={styles.contentText} ref={props.componentRef}>
      <div className={styles.titleText}>
        <p>D4SD is collaborating with the Design Forward Alliance to host a 2017 large-scale human-centered
      design challenge around the complex civic issue of Mobility. People need to move around a city.
      Whether for work or play—and by car, bike, train, bus, boat, or foot— mobility significant affects the
      daily lives of millions. San Diego is culturally and economically diverse, as well as geographical
      dispersed, which makes it a ripe topic for exploring issues around transportation. The mobility
      challenges below investigate concerns currently facing San Diegans, as well as take a look to future
      transportation systems.
        </p>
      </div>

      <div className={styles.indexGrid}>
        <div className={styles.indexTitle}>
          <h3>MICROCHALLENGE TITLE</h3>
        </div>

        <div className={styles.indexRow}>
          <div className={styles.indexPic}>
            <p>IMG goes here</p>
          </div>
          <div className={styles.indexContent}>
            <div className={styles.indexTimeline}>
              <p>TIMELINE GOES HERE</p>
            </div>
            <h4>Title of the Challenge</h4>
            <p>San Diego is culturally and economically diverse, as well as geographical
          dispersed, which makes it a ripe topic for exploring issues around transportation. The mobility
          challenges below.
            </p>
            <h5>Questions:</h5>
            <ul>
              <li>1. Question 1</li>
              <li>2. Question 2</li>
              <li>3. Question 3</li>
            </ul>
            <button> Learn More </button>
          </div>
        </div>

        <div className={styles.indexRow}>
          <div className={styles.indexPic}>
            <p>IMG goes here</p>
          </div>
          <div className={styles.indexContent}>
            <div className={styles.indexTimeline}>
              <p>TIMELINE GOES HERE</p>
            </div>
            <h4>Title of the Challenge</h4>
            <p>San Diego is culturally and economically diverse, as well as geographical
            dispersed, which makes it a ripe topic for exploring issues around transportation. The mobility
            challenges below.
            </p>
            <h5>Questions:</h5>
            <ul>
              <li>1. Question 1</li>
              <li>2. Question 2</li>
              <li>3. Question 3</li>
            </ul>
            <button> Learn More </button>
          </div>
        </div>
      </div>
    </section>
  );
}

Content.propTypes = propTypes;
Content.contextTypes = contextTypes;
Content.defaultProps = defaultProps;

export default Content;
