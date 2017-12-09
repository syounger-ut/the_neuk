import React, { Component } from 'react';
import { withRouter }       from 'react-router-dom'

// Redux
import { connect } from 'react-redux';
import * as authenticationActions from 'authenticationActions';

// Components
import Header      from 'Header';
import Main        from 'Main';

class App extends Component {

  componentWillMount() {
    const token = localStorage.getItem('auth_token');
    if(token) {
      this.props.authenticateToken();
    }
  }

  render() {
    return (
      <div>
        <Header />
        <Main />
      </div>
    );
  }
}

// Maps state from store to props
const mapStateToProps = (state, ownProps) => {
  return {
    loggedIn: state.loggedIn
  }
};

// Maps actions to props
const mapDispatchToProps = (dispatch) => {
  return {
    authenticateToken: () => dispatch(authenticationActions.authenticateToken())
  }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
