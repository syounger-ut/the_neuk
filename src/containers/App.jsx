import React, { Component } from 'react';
import { withRouter }       from 'react-router-dom';

import theNeukApi from 'theNeukApi';

// Components
import Header     from 'Header';
import Main       from 'Main';
import ErrorModal from 'ErrorModal';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        id:      '',
        full_name:    '',
        email:        '',
        phone_number: '',
        bookings:     [],
      },
      loggedIn: false
    };
    this.handleUserLogin = this.handleUserLogin.bind(this);
    this.updateUser      = this.updateUser.bind(this);
  }

  componentDidMount(){
    this.authenticateUserToken.bind(this).call();
  }

  updateUser(user) {
    this.setState({
      full_name:    user.first_name,
      email:        user.email,
      phone_number: user.phone_number,
    });

    var updatedUser = this.state.user;
    var token       = localStorage.getItem('auth_token');

    theNeukApi.updateUser(updatedUser, token).then(function(user) {
      console.log(user);
    });
  }

  authenticateUserToken() {
    var token = localStorage.getItem('auth_token');
    var self  = this;
    if(token) {
      theNeukApi.authenticateToken(token).then(function(user) {
        self.setState({
          user: {
            id:           user.id,
            full_name:    user.full_name,
            email:        user.email,
            phone_number: user.phone_number,
            bookings:     user.bookings,
          },
          loggedIn:   true
        });
      }).catch(function(error) {
        localStorage.removeItem('auth_token');
        self.setState({
          errorMessage: error.message
        });
        self.props.history.push("/login");
      });
    }
  }

  handleUserLogin(action, response = null) {
    if (action === "login") {
      localStorage.setItem('auth_token', response.token);
      this.setState({
        user: {
          full_name:    response.user.full_name,
          email:        response.user.email,
          phone_number: response.user.phone_number,
          bookings:     response.user.bookings,
        },
        loggedIn:   true,
        errorMessage: ''
      });
      this.props.history.push("/");
    } else {
      localStorage.removeItem('auth_token');
      this.setState({
        user: {
          full_name:    '',
          email:        '',
          phone_number: '',
          bookings:     '',
        },
        loggedIn: false
      });
      this.props.history.push("/");
    }
  }

  render() {
    const { user, loggedIn, errorMessage } = this.state;

    function renderError() {
      if(typeof errorMessage === "string") {
        return (
          <ErrorModal message={errorMessage}/>
        );
      }
    }

    return (
      <div>
        <Header user={user} loggedIn={loggedIn} handleUserLogin={this.handleUserLogin}/>
        {renderError()}
        <Main handleUserLogin={this.handleUserLogin} user={user} updateUser={this.updateUser}/>
      </div>
    );
  }
}

export default withRouter(App);
