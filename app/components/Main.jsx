import React, { Component } from 'react';
import Login from 'Login'

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      full_name: '',
      email: '',
      phone_number: '',
      bookings: []
    };
    this.handleUserLogin = this.handleUserLogin.bind(this)
  }

  handleUserLogin(response) {
    console.log(response);
    localStorage.setItem('auth_token', response.token);
    this.setState({
      full_name: response.user.email,
      email: response.user.full_name,
      phone_number: response.user.phone_number,
      bookings: response.user.bookings
    })
    console.log(this.state);
  }

  render() {
    return (
      <div>
        <h1>Main</h1>
        <Login loginUser={this.handleUserLogin}/>
      </div>
    );
  }
}

export default Main;
