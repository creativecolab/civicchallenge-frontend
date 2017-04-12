import React, { Component, PropTypes } from 'react';

// import classNames from 'util/classNames';

import styles from './LazyImage.scss';

/**
 * LazyImage
 */

class LazyImage extends Component {
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
    const { className, src, alt } = this.props;

    return (
      <div className={className}>
        {loaded &&
          <img
            src={loaded ? src : ''}
            alt={alt}
            className={styles.image}
            ref={(el) => { this.img = el; }}
          />
        }
        {!loaded &&
          <div className={styles.loadingSpinner}>
            <div className={styles.spinner} />
          </div>
        }
      </div>
    );
  }
}

LazyImage.propTypes = {
  className: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

LazyImage.contextTypes = {
};

export default LazyImage;
