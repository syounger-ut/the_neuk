import React, { Component } from 'react';
import { withRouter }             from 'react-router-dom'

import theNeukApi from 'theNeukApi';

import { connect }      from 'react-redux'
import * as userActions from '../actions/userActions';

// Components
import Header      from 'Header';
import Main        from 'Main';
import ErrorModal  from 'ErrorModal';
import UpdateModal from 'UpdateModal';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount(){
    this.authenticateUserToken.bind(this).call();
  }

  authenticateUserToken() {
    let token = localStorage.getItem('auth_token');
    let self  = this;

    if(token) {
      theNeukApi.authenticateToken(token).then(function(user) {
        self.props.setUser(user);
      });
    }
  }

  render() {
    // const { errorMessage, updateMessage } = this.state;

    // function renderError() {
    //   if(typeof errorMessage === "string") {
    //     return (
    //       <ErrorModal message={errorMessage}/>
    //     );
    //   }
    // }
    //
    // function renderUpdate() {
    //   if(typeof updateMessage === "string") {
    //     return (
    //       <UpdateModal message={updateMessage}/>
    //     );
    //   }
    // }

    return (
      <div>
        <Header />
        <Main />
        {/* {renderError()}
        {renderUpdate()} */}
      </div>
    );
  }
}

// Maps state from store to props
const mapStateToProps = (state, ownProps) => {
  return {
    // You can now say this.props.user
    user: state.user
  }
};

// Maps actions to props
const mapDispatchToProps = (dispatch) => {
  return {
    // You can now say this.props.setUser
    setUser: user => dispatch(userActions.setUser(user))
  }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
