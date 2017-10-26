import React, { Component } from 'react';
import { withRouter }       from 'react-router-dom';

import axios from 'axios';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      first_name: '',
      last_name: '',
      email: '',
      phone_number: '',
      password: '',
      loginForm: true
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.formSwitch   = this.formSwitch.bind(this);
  }

  handleChange(event) {
    var target = event.target;
    var name   = target.name;
    this.setState({
      [name]: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    var self = this;
    axios({
      method: 'post',
      url: 'http://localhost:3000/api/login',
      data: {
        email:    this.state.username,
        password: this.state.password
      }
    }).then(function(response) {
      self.props.handleUserLogin("login", response.data);
    }).catch(function(error) {
      console.log(error.response);
    });

  }

  formSwitch(selectedForm) {
    var loginForm = this.state.loginForm;
    if(selectedForm === 'register') {
      this.setState({
        loginForm: false
      });
    } else {
      this.setState({
        loginForm: true
      })
    }
  }

  render() {
    const username     = this.state.username;
    const first_name   = this.state.first_name;
    const last_name    = this.state.last_name;
    const email        = this.state.email;
    const phone_number = this.state.phone_number;
    const password     = this.state.password;

    const loginForm    = this.formSwitch.bind(this, 'login');
    const registerForm = this.formSwitch.bind(this, 'register');

    var form;
    var loginTitle;
    if(this.state.loginForm) {
      loginTitle = ( <h2>Login</h2> );
      form = (
        <form className="loginForm" onSubmit={this.handleSubmit}>
          <label htmlFor="username">Email:</label>
          <div className="input">
            <input
              type="text"
              name="username"
              value={username}
              onChange={this.handleChange}
              placeholder="Username" />
          </div>
          <label htmlFor="password">Password:</label>
          <div className="input">
            <input type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
              placeholder="Password" />
          </div>
          <input className="button" type="submit" value="Submit"/>
        </form>
      );
    } else {
      loginTitle = ( <h2>Register</h2> );
      form = (
        <form className="registerForm" onSubmit={this.handleSubmit}>
          <label htmlFor="first_name">First Name:</label>
          <div className="input">
            <input
              type="text"
              name="first_name"
              value={first_name}
              onChange={this.handleChange}
              placeholder="First Name" />
          </div>
          <label htmlFor="last_name">Last Name:</label>
          <div className="input">
            <input
              type="text"
              name="last_name"
              value={last_name}
              onChange={this.handleChange}
              placeholder="Last Name" />
          </div>
          <label htmlFor="email">Email:</label>
          <div className="input">
            <input
              type="text"
              name="email"
              value={email}
              onChange={this.handleChange}
              placeholder="Email" />
          </div>
          <label htmlFor="phone_number">Phone Number:</label>
          <div className="input">
            <input
              type="text"
              name="phone_number"
              value={phone_number}
              onChange={this.handleChange}
              placeholder="Phone Number" />
          </div>
          <label htmlFor="password">Password:</label>
          <div className="input">
            <input type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
              placeholder="Password" />
          </div>
          <input className="button" type="submit" value="Submit"/>
        </form>
      );
    }

    return (
      <div className="login">
        {loginTitle}
        <ul>
          <li onClick={loginForm}>Login</li>
          <li onClick={registerForm}>Register</li>
        </ul>
        {form}
      </div>
    );
  }
}

export default withRouter(Login);
