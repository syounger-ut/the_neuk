import React, { Component } from 'react'
import { Link }             from 'react-router-dom'

import { connect }      from 'react-redux'
import * as userActions from '../actions/userActions';

class Header extends Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
  }

  logout() {
    let logoutOption = true;
    this.props.logoutUser(logoutOption);
  }

  render() {
    let loginButton;
    if (this.props.user) {
      loginButton = (
        <ul className="loginButton">
          <li><Link to='/user'>{this.props.user.email}</Link></li>
          <li><a href='/' onClick={this.logout}>Logout</a></li>
        </ul>
      )
    } else {
      loginButton = (
        <ul className="loginButton">
          <li><Link to='/login'>Login</Link></li>
        </ul>
      )
    }

    return (
      <header>
        <nav>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/pay'>Pay page</Link></li>
            <li><Link to='/bookings'>Bookings page</Link></li>
            {loginButton}
          </ul>
        </nav>
      </header>
    );
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
    // You can now say this.props.logoutUser
    logoutUser: logoutOption => dispatch(userActions.logoutUser(logoutOption))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
