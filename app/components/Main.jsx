import React, { Component } from 'react';
import axios from 'axios';

import Login         from 'Login';
import UserGreeting  from 'UserGreeting';
import GuestGreeting from 'GuestGreeting';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      full_name:    '',
      email:        '',
      phone_number: '',
      bookings:     [],
      token:        localStorage.getItem('auth_token'),
      isLoggedIn:   false
    };
    this.handleUserLogin = this.handleUserLogin.bind(this);
    this.authenticateUserToken.bind(this).call();
    this.handleLoginClick = this.handleLoginClick.bind(this);
  }

  authenticateUserToken() {
    var self = this;
    axios({
      method: 'get',
      url: 'http://localhost:3000/api/users/me',
      headers: { 'Authorization': this.state.token }
    }).then(function(response) {
      var user = response.data;
      self.setState({
        full_name:    user.email,
        email:        user.full_name,
        phone_number: user.phone_number,
        bookings:     user.bookings,
        isLoggedIn:   true
      })
    }).catch(function(error) {
      console.log(error.response);
    });
  }

  handleLoginClick() {
    console.log("HERE");
  }

  handleUserLogin(response) {
    localStorage.setItem('auth_token', response.token);
    this.setState({
      full_name:    response.user.email,
      email:        response.user.full_name,
      phone_number: response.user.phone_number,
      bookings:     response.user.bookings,
      isLoggedIn:   true
    })
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    return (
      <div>
        <h1>Main</h1>
        <LoginButton loggedIn={isLoggedIn} handleLoginClick={this.handleLoginClick} />
        <Login loginUser={this.handleUserLogin} />
      </div>
    );
  }
}

function LoginButton(props) {

  var loggedIn = props.loggedIn;
  var button = null;
  if(loggedIn) {
    button = <button onClick={props.handleLoginClick}>LoggedIn</button>
  } else {
    button = <button onClick={props.handleLoginClick}>NotLoggedIn</button>
  }
  return button
}

export default Main;
