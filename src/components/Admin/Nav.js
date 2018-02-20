import React, { Component } from 'react'
import { Link }             from 'react-router-dom'

class AdminNav extends Component {
  render() {
    return (
      <nav className='admin-nav'>
        <ul>
          <li><Link to='/admin'>Home</Link></li>
          <li><Link to='/admin/bookings'>Bookings</Link></li>
          <li><Link to='/admin/images'>Images</Link></li>
        </ul>
      </nav>
    );
  }
}

export default AdminNav;
