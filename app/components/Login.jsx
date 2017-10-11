import React, { Component } from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {username: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleChange(event) {
    var target = event.target;
    var name   = target.name
    this.setState({
      [name]: event.target.value
    });
    console.log(this.props)
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }
  render() {
    return (
      <div>
        <h2>Login</h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            Username:
            <input
              type="text"
              name="username"
              value={this.state.value}
              onChange={this.handleChange}
              placeholder="Username" />
          </label>
          <label>
            Password:
            <input type="password"
              name="password"
              value={this.state.value}
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
