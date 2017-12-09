import React, { Component } from 'react';

import { connect } from 'react-redux'
import * as authenticationActions from 'authenticationActions';

// Components
import Login from 'Authentication/login';

class Authentication extends Component {
  componentWillReceiveProps(nextProps) {
    // Redirect to home if login succeeds
    if(nextProps.loggedIn) {
      this.props.history.push("/")
    }
  }

  render() {
    const login    = this.props.login;
    const loggedIn = this.props.loggedIn;
    return (
      <Login login={login}/>
    );
  };
}

// Maps state from store to props
const mapStateToProps = (state, ownProps) => {
  return {
    loggedIn: state.loggedIn,
  }
};

// Maps actions to props
const mapDispatchToProps = (dispatch) => {
  return {
    login: loginDetails => dispatch(authenticationActions.login(loginDetails))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Authentication);
