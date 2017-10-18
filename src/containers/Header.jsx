import React, { Component } from 'react'
import { Link, withRouter }             from 'react-router-dom'

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
  }

  logout() {
    this.props.handleUserLogin("logout");
  }

  render() {
    const user     = this.props.user;
    const loggedIn = this.props.loggedIn;
    const logout   = this.logout;

    var loginButton;
    var logoutButton;
    if(loggedIn) {
      loginButton  = <Link to='/user'>{user.email}</Link>;
      logoutButton = <li><a href='/' onClick={logout}>Logout</a></li>;
    } else {
      loginButton = <Link to='/login'>Login</Link>;
    }

    return (
      <header>
        <nav>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/pay'>Pay page</Link></li>
            <li><Link to='/bookings'>Bookings page</Link></li>
            <ul className="loginButton">
              <li>{loginButton}</li>
              {logoutButton}
            </ul>
          </ul>
        </nav>
      </header>
    );
  }
}

export default withRouter(Header);
