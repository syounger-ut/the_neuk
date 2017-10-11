import React, { Component } from 'react';

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
    var token = "TOKEN"
    this.props.authToken(token)
  }

  handleSubmit(event) {
    event.preventDefault();
  }
  render() {
    const username = this.state.username;
    const password = this.state.password;
    return (
      <div>
        <h2>Login</h2>
        {/* <form onSubmit={this.props.authToken}> */}
        <form onSubmit={this.handleSubmit}>
          <label>
            Username:
            <input
              type="text"
              name="username"
              value={username}
              onChange={this.handleChange}
              placeholder="Username" />
          </label>
          <label>
            Password:
            <input type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
              placeholder="Password" />
          </label>
          <input type="submit" value="Submit"/>
        </form>
      </div>
    );
  }
}

export default Login;
