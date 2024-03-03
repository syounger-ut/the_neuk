import * as React from 'react';
import { Link } from 'react-router-dom';

import * as authenticationActions from 'authenticationActions';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    let key = event.target.name;
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
      <form onSubmit={this.handleSubmit}>
        <label>
          Email:
          <span><input
            type="email"
            name="username"
            onChange={this.handleChange}
            value={username}
            placeholder="Username" /></span>
        </label>
        <label>
          Password:
          <span><input
            type="password"
            name="password"
            onChange={this.handleChange}
            value={password}
            placeholder="Password" /></span>
        </label>
        <input className="button" type="submit" value="Submit" />
      </form>
    );
  };
}

export default Login;
