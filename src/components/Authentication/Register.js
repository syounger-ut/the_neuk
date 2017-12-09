import React, { Component } from 'react';

import * as authenticationActions from 'authenticationActions';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      first_name: '',
      last_name: '',
      email: '',
      phone_number: '',
      password: ''
    };
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
    this.props.register(this.state);
  }

  render() {
    const {username, first_name, last_name, email, phone_number, password} = this.state;

    return (
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
    )
  }
}

export default Register;
