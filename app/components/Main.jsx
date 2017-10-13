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
    this.handleUserLogin = this.handleUserLogin.bind(this)
    this.authenticateUserToken.bind(this).call();
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

    let greeting = null;
    if(isLoggedIn) {
      greeting = <UserGreeting/>
    } else {
      greeting = <GuestGreeting/>
    }
    return (
      <div>
        <h1>Main</h1>
        {greeting}
        <Login loginUser={this.handleUserLogin} />
      </div>
    );
  }
}

export default Main;
