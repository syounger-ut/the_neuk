import React, { Component } from 'react';
import { Route }            from 'react-router-dom'

import { connect }       from 'react-redux';
import * as adminActions from 'adminActions';

// Components
import AdminBookings from 'Admin/Bookings/Bookings';
import AdminBooking from 'Admin/Bookings/Booking';

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
    const match  = this.props.match;

    let upcomingBookings;
    let pastBookings;

    if (bookings) {
      upcomingBookings = this.sortBookings(bookings, ">");
      pastBookings = this.sortBookings(bookings, "<");
    }

    return (
      <div className='admin-bookings'>
        <Route
          exact path={`${match.path}`}
          render={(props) => <AdminBookings {...props}
          upcomingBookings={upcomingBookings}
          pastBookings={pastBookings}
          />}/>
        <Route
          path={`${match.path}/:id(\\d+)`} // (\\d+) ensures the id is an integer & prevents clash with /new
          render={
            (props) => <AdminBooking {...props}
            bookings={bookings}
            />}/>
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
