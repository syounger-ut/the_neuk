import React, { Component } from 'react'
import axios from 'axios'

// Components
import Header from 'Header'
import Main   from 'Main'

class App extends React.Component {
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
    return (
      <div>
        <Header/>
        <Main handleUserLogin={this.handleUserLogin}/>
      </div>
    );
  }
}

export default App
