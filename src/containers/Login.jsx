import React, { Component } from 'react';
import axios from 'axios';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
      self.props.handleUserLogin(response.data);
    }).catch(function(error) {
      console.log(error.response);
    });

  }
  render() {
    const username = this.state.username;
    const password = this.state.password;
    return (
      <div className="login">
        <h2>Login</h2>
        <form className="loginForm" onSubmit={this.handleSubmit}>
            <label htmlFor="username">Username:</label>
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
      </div>
    );
  }
}

export default Login;
