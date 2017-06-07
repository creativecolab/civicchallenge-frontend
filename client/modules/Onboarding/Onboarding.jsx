import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';

import styles from './Onboarding.scss';

/**
 * Placeholder
 */

const propTypes = {};

const contextTypes = {
  router: PropTypes.object,
};

const defaultProps = {};

function Onboarding() {
  return (
    <div className={styles.onboarding}>
      <Helmet
        title="Onboarding"
      />
      <Header
        backgroundImg={''}
        headerText={'Get Involved'}
        subheaderText={''}
        showButton={false}
      />

      <section className={styles.getinvolvedcontent}>
        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis metus porta erat tempor dignissim.
        Etiam finibus, nibh at dictum commodo, diam mi rutrum nisi, et fringilla neque odio ut turpis. Vestibulum ante ipsum
        primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nunc at vehicula turpis, non fringilla mi. Ut consequat
        sollicitudin purus. Vestibulum sodales nisi odio, ut pretium neque tristique cursus. Suspendisse eget magna ante. Cras quis
        vestibulum ipsum. Nulla placerat eros scelerisque, volutpat quam sed, elementum lacus. Sed varius est magna,
        eu hendrerit urna consequat ut. Integer at ex id tellus suscipit ultrices.</p>
        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis metus porta erat tempor dignissim.
        Etiam finibus, nibh at dictum commodo, diam mi rutrum nisi, et fringilla neque odio ut turpis. Vestibulum ante
        ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nunc at vehicula turpis, non fringilla mi.
        Ut consequat sollicitudin purus. Vestibulum sodales nisi odio, ut pretium neque tristique cursus. Suspendisse ege
        magna ante. Cras quis vestibulum ipsum. Nulla placerat eros scelerisque, volutpat quam sed, elementum lacus. Sed
        varius est magna, eu hendrerit urna consequat ut. Integer at ex id tellus suscipit ultrices.</p>
        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis metus porta erat tempor dignissim.
        Etiam finibus, nibh at dictum commodo, diam mi rutrum nisi, et fringilla neque odio ut turpis. Vestibulum ante ipsum
        rimis in faucibus orci luctus et ultrices posuere cubilia Curae; Nunc at vehicula turpis, non fringilla mi. Ut consequ
        t sollicitudin purus. Vestibulum sodales nisi odio, ut pretium neque tristique cursus. Suspendisse eget magna ante. Cras
        quis vestibulum ipsum. Nulla placerat eros scelerisque, volutpat quam sed, elementum lacus. Sed varius est magna, eu hend
        rerit urna consequat ut. Integer at ex id tellus suscipit ultrices.</p>
      </section>
      <Footer />
    </div>
  );
}

Onboarding.propTypes = propTypes;
Onboarding.contextTypes = contextTypes;
Onboarding.defaultProps = defaultProps;

export default Onboarding;
