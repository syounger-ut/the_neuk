import React, { Component } from 'react';
import { Link }             from 'react-router-dom';

import * as authenticationActions from 'authenticationActions';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event){
    let key   = event.target.name;
    let value = event.target.value;
    this.setState({
      [key]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.login(this.state);
  }

  render() {
    let username = this.state.username;
    let password = this.state.password;

    return (
      <form className="loginForm" onSubmit={this.handleSubmit}>
        <label htmlFor="username">Email:</label>
        <div className="input">
          <input
            type="text"
            name="username"
            onChange={this.handleChange}
            value={username}
            placeholder="Username" />
        </div>
        <label htmlFor="password">Password:</label>
        <div className="input">
          <input type="password"
            name="password"
            onChange={this.handleChange}
            value={password}
            placeholder="Password" />
        </div>
        <input className="button" type="submit" value="Submit"/>
      </form>
    );
  };
}

export default Login;
