import React, { Component } from 'react'
import { Link }             from 'react-router-dom'

class Nav extends Component {
  render() {
    let user = this.props.user;
    let logout = this.props.logout
    let loginButton;
    if (user && user.role === 'admin') {
      loginButton = (
        <li>
          <Link to='/user'>{user.email}</Link>
          <ul className="hidden">
            <li><a href='/' onClick={logout}>Admin</a></li>
            <li><a href='/' onClick={logout}>Logout</a></li>
          </ul>
        </li>
      )
    } else if(user) {
      loginButton = (
        <ul className="hidden">
          <li><Link to='/user'>{user.email}</Link></li>
          <li><a href='/' onClick={logout}>Logout</a></li>
        </ul>
      )
    } else {
      loginButton = (
        <ul className="hidden">
          <li><Link to='/authentication'>Login</Link></li>
        </ul>
      )
    }

    return (
      <nav>
        {/* THESE TWO BUTTONS ARE FOR MOBILE RESPONSIVE. NOT SET UP YET */}
        <label for="show-menu" class="show-menu">Show Menu</label>
        <input type="checkbox" id="show-menu" role="button"/>
        <ul>
          {loginButton}
          <li><Link to='/bookings'>Bookings page</Link></li>
          <li><Link to='/about'>About</Link></li>
          <li><Link to='/'>Home</Link></li>
        </ul>
      </nav>
    );
  }
}

export default Nav;
