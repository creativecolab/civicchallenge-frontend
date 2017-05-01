import React from 'react';
import PropTypes from 'prop-types';

import styles from './LazyImage.scss';

/**
 * LazyImage
 */

class LazyImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMounted: false,
      loaded: false,
    };
  }

  componentDidMount() {
    this.setState({ isMounted: true });

    const img = new Image();
    img.onload = () => {
      this.setState({ loaded: true });
    };
    img.src = this.props.src;
  }

  render() {
    const { loaded } = this.state;
    const { src, alt } = this.props;

    if (loaded) {
      return <img src={loaded ? src : ''} alt={alt} className={styles.image} ref={(el) => { this.img = el; }} />;
    }

    return null;
  }
}

LazyImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

LazyImage.contextTypes = {
};

export default LazyImage;
