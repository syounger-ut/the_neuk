import React, { Component } from 'react';

import { connect }          from 'react-redux'
import * as userActions     from '../actions/userActions';

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
    this.props.loginUser(this.state);
  }

  render() {
    let username = this.state.username;
    let password = this.state.password;

    return (
      <div className="login">
        <ul>
          <li>Login</li>
          <li>Register</li>
        </ul>
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
      </div>
    );
  };
}

// Maps state from store to props
const mapStateToProps = (state, ownProps) => {
  return {
    // You can now say this.props.loginDetails
    user: state.user
  }
};

// Maps actions to props
const mapDispatchToProps = (dispatch) => {
  return {
    // You can now say this.props.loginUser
    loginUser: user => dispatch(userActions.loginUser(user))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
