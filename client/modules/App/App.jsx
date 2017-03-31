import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';

/**
 * App
 */

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { isMounted: false };
  }

  componentDidMount() {
    this.setState({ isMounted: true });
  }

  render() {
    return (
      <div>
        <Helmet
          titleTemplate="%s - Design San Diego"
          meta={[
            { charset: 'utf-8' },
            {
              name: 'viewport',
              content: 'width=device-width, initial-scale=1',
            },
            {
              'http-equiv': 'x-ua-compatible',
              content: 'ie=edge',
            },
          ]}
        />
        {this.props.children}
      </div>
    );
  }
}

function mapStateToProps() {
  return {};
}

App.propTypes = {
  children: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

App.contextTypes = {
  router: PropTypes.object,
};

export default connect(mapStateToProps)(App);
