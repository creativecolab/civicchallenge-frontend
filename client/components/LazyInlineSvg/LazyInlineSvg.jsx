/* eslint-disable max-len, react/no-danger */

import React from 'react';
import PropTypes from 'prop-types';
import fetch from 'isomorphic-fetch';

/**
 * Helpers (Thanks https://github.com/matthewwithanm/react-inlinesvg/blob/master/src/index.js)
 */

const uniquifyIDs = (() => {
  const mkAttributePattern = attr => `(?:(?:\\s|\\:)${attr})`;

  const idPattern = new RegExp(`(?:(${(mkAttributePattern('id'))})="([^"]+)")|(?:(${(mkAttributePattern('href'))}|${(mkAttributePattern('role'))}|${(mkAttributePattern('arcrole'))})="\\#([^"]+)")|(?:="url\\(\\#([^\\)]+)\\)")`, 'g');

  return (svgText, svgID) => {
    const uniquifyID = id => `${id}___${svgID}`;

    return svgText.replace(idPattern, (m, p1, p2, p3, p4, p5) => {
      if (p2) {
        return `${p1}="${(uniquifyID(p2))}"`;
      } else if (p4) {
        return `${p3}="#${(uniquifyID(p4))}"`;
      } else if (p5) {
        return `="url(#${(uniquifyID(p5))})"`;
      }
      return null;
    });
  };
})();

const getHash = (str) => {
  let chr;
  let hash = 0;
  let i;
  let j;
  let ref;

  if (!str) {
    return hash;
  }

  for (i = 0, j = 0, ref = str.length; ref >= 0 ? j < ref : j > ref; i = ref >= 0 ? j += 1 : j -= 1) {
    chr = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + chr; // eslint-disable-line no-bitwise
    hash &= hash; // eslint-disable-line no-bitwise
  }

  return hash;
};


/**
 * LazyInlineSvg
 */

const propTypes = {
  wrapperClassName: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
};

const contextTypes = {};

const defaultProps = {};

class LazyInlineSvg extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
    };
  }

  componentDidMount() {
    const { src } = this.props;

    fetch(src, { method: 'GET' })
      .then(response => response.text().then((text) => {
        this.setState({
          loaded: true,
          svgText: text,
        });
      }));
  }

  processSVG(svgText) {
    return uniquifyIDs(svgText, getHash(this.props.src));
  }

  render() {
    const { wrapperClassName } = this.props;
    const { loaded, svgText } = this.state;

    if (loaded) {
      const innerHtml = {
        __html: this.processSVG(svgText),
      };

      return (
        <div
          className={wrapperClassName}
          dangerouslySetInnerHTML={innerHtml}
        />
      );
    }

    return null;
  }
}

LazyInlineSvg.propTypes = propTypes;
LazyInlineSvg.contextTypes = contextTypes;
LazyInlineSvg.defaultProps = defaultProps;

export default LazyInlineSvg;
