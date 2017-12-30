import React, { Component } from 'react'
import { Link }             from 'react-router-dom'

class Nav extends Component {
  render() {
    let user = this.props.user;
    let logout = this.props.logout
    let loginButton;
    if (user) {
      loginButton = (
        <ul className="loginButton">
          <li><Link to='/user'>{user.email}</Link></li>
          <li><a href='/' onClick={logout}>Logout</a></li>
        </ul>
      )
    } else {
      loginButton = (
        <ul className="loginButton">
          <li><Link to='/authentication'>Login</Link></li>
        </ul>
      )
    }

    return (
      <nav>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about'>About</Link></li>
          <li><Link to='/bookings'>Bookings page</Link></li>
          {loginButton}
        </ul>
      </nav>
    );
  }
}

export default Nav;
