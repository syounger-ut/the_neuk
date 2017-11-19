import React from 'react';

import { connect }      from 'react-redux'
import * as userActions from '../actions/userActions';

class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name:   '',
      last_name:    '',
      email:        '',
      phone_number: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
    if(this.props.user) {
      let user = this.props.user;
      this.updateUserState(user);
    }
  }

  componentWillReceiveProps(nextProps) {
    let user = nextProps.user;
    this.updateUserState(user);
  }

  updateUserState(user) {
    this.setState({
      first_name:   user.first_name,
      last_name:    user.last_name,
      email:        user.email,
      phone_number: user.phone_number
    })
  }

  handleChange(event) {
    var target = event.target;
    var name   = target.name;
    this.setState({
      [name]: target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    let token = localStorage.getItem('auth_token');
    this.props.updateUser(this.state, token);
  }

  render() {
    let { first_name, last_name, email, phone_number } = this.state;

    return (
      <form className="loginForm" onSubmit={this.handleSubmit}>
          <label htmlFor="first_name">First Name:</label>
          <div className="input">
            <input
              name="first_name"
              value={first_name}
              onChange={this.handleChange}
              placeholder="First Name" />
          </div>
          <label htmlFor="last_name">Last Name:</label>
          <div className="input">
            <input
              name="last_name"
              value={last_name}
              onChange={this.handleChange}
              placeholder="Last Name" />
          </div>
          <label htmlFor="email">Email:</label>
          <div className="input">
            <input
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
              placeholder="Email" />
          </div>
          <label htmlFor="phone_number">Phone Number:</label>
          <div className="input">
            <input
              name="phone_number"
              value={phone_number}
              onChange={this.handleChange}
              placeholder="Phone Number" />
          </div>
        <input className="button" type="submit" value="Submit"/>
      </form>
    )
  }
}

// Maps state from store to props
const mapStateToProps = (state, ownProps) => {
  return {
    // You can now say this.props.user
    user: state.user
  }
};

// Maps actions to props
const mapDispatchToProps = (dispatch) => {
  return {
    // You can now say this.props.updateUser
    updateUser: (user, token) => dispatch(userActions.updateUser(user, token))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(User);
