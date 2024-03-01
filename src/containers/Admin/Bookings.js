import React, { Component } from 'react';
import { Route, redirect }  from 'react-router-dom'

import { connect }       from 'react-redux';
import * as adminActions from 'adminActions';

// Components
import AdminBookings from 'Admin/Bookings/Bookings';
import AdminBooking from 'Admin/Bookings/Booking';
import AdminNewBooking from 'Admin/Bookings/New';

class Bookings extends Component {
  constructor(props) {
    super(props);
    this.updateBooking = this.updateBooking.bind(this);
    this.submitBooking = this.submitBooking.bind(this);
  }

  componentWillMount() {
    this.props.getBookings();
    this.props.getUsers();
  }

  updateBooking(booking) {
    this.props.updateBooking(booking).then(result => {
      redirect("/admin/bookings")
    }).catch(error => {
      console.log(error)
    })
  }

  submitBooking(booking) {
    this.props.submitBooking(booking).then(result => {
      redirect("/admin/bookings")
    }).catch(error => {
      console.log(error)
    })
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
    const users = this.props.users;
    const match  = this.props.match;

    let upcomingBookings;
    let pastBookings;

    if (bookings) {
      upcomingBookings = this.sortBookings(bookings, ">");
      pastBookings = this.sortBookings(bookings, "<");
    }

    return (
      <div>
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
            updateBooking={this.updateBooking}
          />}/>
        <Route
          path={`${match.path}/new`}
          render={
            (props) => <AdminNewBooking {...props}
            submitBooking={this.submitBooking}
            users={users}
          />}/>
      </div>
    );
  }
}

// Maps state from store to props
const mapStateToProps = (state, ownProps) => {
  return {
    bookings: state.bookings,
    users: state.users
  }
};

// Maps actions to props
const mapDispatchToProps = (dispatch) => {
  return {
    getBookings: () => dispatch(adminActions.getBookings()),
    updateBooking: (booking) => dispatch(adminActions.updateBooking(booking)),
    submitBooking: (booking) => dispatch(adminActions.submitBooking(booking)),
    getUsers: () => dispatch(adminActions.getUsers())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Bookings);
