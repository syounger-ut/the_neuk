import React, { Component } from 'react';
import { Route, Link }      from 'react-router-dom'

import { connect }       from 'react-redux';
import * as adminActions from 'adminActions';

// Components
import AdminBookings from 'Admin/Bookings/Bookings';

class Bookings extends Component {
  render() {
    const user = this.props.currentUser;
    return (
      <div className='images'>
        <AdminBookings user={user}/>
        <h2>Booking HERE</h2>
      </div>
    );
  }
}

// Maps state from store to props
const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.currentUser
  }
};

// Maps actions to props
const mapDispatchToProps = (dispatch) => {
  return {}
};

export default connect(mapStateToProps, mapDispatchToProps)(Bookings);
