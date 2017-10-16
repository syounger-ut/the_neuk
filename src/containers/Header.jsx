import React, { Component } from 'react'
import { Link }             from 'react-router-dom'

class Header extends React.Component {
  render() {
    return (
      <header>
        <nav>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/login'>Login</Link></li>
            <li><Link to='/pay'>Pay page</Link></li>
            <li><Link to='/bookings'>Bookings page</Link></li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
