import React, { Component } from 'react'
import axios from 'axios'

// Components
import Header from 'Header'
import Main   from 'Main'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        full_name:    '',
        email:        '',
        phone_number: '',
        bookings:     [],
      },
      token:        localStorage.getItem('auth_token'),
      loggedIn:   false
    };
    this.handleUserLogin = this.handleUserLogin.bind(this);
    this.updateUser      = this.updateUser.bind(this);
  }

  componentDidMount(){
    this.authenticateUserToken.bind(this).call();
  }

  updateUser(user) {
    console.log(user);
    this.setState({
      full_name: user.first_name,
      email: user.email,
      phone_number: user.phone_number,
    });
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
        user: {
          full_name:    user.full_name,
          email:        user.email,
          phone_number: user.phone_number,
          bookings:     user.bookings,
        },
        loggedIn:   true
      })
    }).catch(function(error) {
      console.log(error.response);
    });
  }

  handleUserLogin(response) {
    localStorage.setItem('auth_token', response.token);
    this.setState({
      user: {
        full_name:    response.user.full_name,
        email:        response.user.email,
        phone_number: response.user.phone_number,
        bookings:     response.user.bookings,
      },
      loggedIn:   true
    })
  }

  render() {
    const user     = this.state.user;
    const loggedIn = this.state.loggedIn;
    return (
      <div>
        <Header user={user} loggedIn={loggedIn}/>
        <Main handleUserLogin={this.handleUserLogin} user={user} updateUser={this.updateUser}/>
      </div>
    );
  }
}

export default App
