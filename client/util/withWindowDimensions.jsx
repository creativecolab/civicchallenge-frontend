import React from 'react';

function getDisplayName(component) {
  return component.displayName || component.name || 'Component';
}

export default function withWindowDimensions(ComposedComponent) {
  return class WindowDimensionsHOC extends React.PureComponent {
    static displayName = `withWindowDimensions(${getDisplayName(ComposedComponent)})`

    constructor(props) {
      super(props);

      this.state = {
        windowWidth: (process.env.BROWSER && window.innerWidth) || 0,
        windowHeight: (process.env.BROWSER && window.innerHeight) || 0,
      };

      this._onWindowResize = this.onWindowResize.bind(this);
    }

    componentDidMount() {
      this._onWindowResize();
      window.addEventListener('resize', this._onWindowResize);
    }

    componentWillUnmount() {
      window.removeEventListener('resize', this._onWindowResize);
    }

    onWindowResize() {
      this.setState({
        windowWidth: window.innerWidth,
        windowHeight: window.innerHeight,
      });
    }

    render() {
      const { windowWidth, windowHeight } = this.state;

      return (
        <ComposedComponent
          windowWidth={windowWidth}
          windowHeight={windowHeight}
          {...this.props}
        />
      );
    }
  };
}
