import * as React from 'react';
import { Link } from 'react-router-dom'

class Nav extends React.Component {
  render() {
    let user = this.props.user;
    let logout = this.props.logout;
    let loginButton;
    if (user && user.role === 'admin') {
      loginButton = (
        <li>
          <Link to='/user'>{user.email}</Link>
          <ul className='hidden'>
            <li><Link to='/admin'>Admin</Link></li>
            <li><Link to='/' onClick={logout}>Logout</Link></li>
          </ul>
        </li>
      )
    } else if (user) {
      loginButton = (
        <li>
          <Link to='/user'>{user.email}</Link>
          <ul className='hidden'>
            <li><Link to='/' onClick={logout}>Logout</Link></li>
          </ul>
        </li>
      )
    } else {
      loginButton = (
        <li><Link to='/authentication'>Login</Link></li>
      )
    }

    return (
      <nav>
        {/* THESE TWO BUTTONS ARE FOR MOBILE RESPONSIVE. NOT SET UP YET */}
        <label htmlFor='show-menu' className='show-menu'>Show Menu</label>
        <input type='checkbox' id='show-menu' role='button' />
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
