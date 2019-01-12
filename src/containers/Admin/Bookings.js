import React, { Component } from 'react';
import { Route, Link }      from 'react-router-dom'

import { connect }       from 'react-redux';
import * as adminActions from 'adminActions';

// Components
import AdminBookings from 'Admin/Bookings/Bookings';

class Bookings extends Component {
  componentWillMount() {
    this.props.getBookings();
  }

  sortBookings(bookings, direction) {
    let currentTime = new Date(Date.now());

    const filtered = Object.values(bookings)
      .filter(booking => {
        let bookingDate = new Date(booking.start_date);
        if (direction === ">") {
          return bookingDate > currentTime;
        } else {
          return bookingDate < currentTime;
        }
      })
      .reduce((obj, booking) => {

        // Sort the bookings by the original order
        let bookingId = Object.entries(bookings).find(([id, bking]) => {
          return bking.id === booking.id
        })
        obj[bookingId[0]] = booking;
        return obj;
      }, {});

      return filtered
  }

  render() {
    const bookings = this.props.bookings;
    let upcomingBookings;
    let pastBookings;

    if (bookings) {
      upcomingBookings = this.sortBookings(bookings, ">");
      pastBookings = this.sortBookings(bookings, "<");
    }

    return (
      <div className='images'>
        <AdminBookings
          upcomingBookings={upcomingBookings}
          pastBookings={pastBookings}/>
      </div>
    );
  }
}

// Maps state from store to props
const mapStateToProps = (state, ownProps) => {
  return {
    bookings: state.bookings
  }
};

// Maps actions to props
const mapDispatchToProps = (dispatch) => {
  return {
    getBookings: () => dispatch(adminActions.getBookings())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Bookings);
