import React, { Component } from 'react'

import { connect } from 'react-redux';
import * as bookingActions from 'bookingActions';

// Components
import Calendar    from 'Home/Calendar'
import BookingForm from 'Home/BookingForm'

class Home extends Component {
  constructor(props) {
    super(props);
    this.setBooking = this.setBooking.bind(this);
  }

  setBooking(booking) {
    this.props.setBooking(booking)
    // Redirect to the pay page
    this.props.history.push("/pay")
  }

  render() {
    const bookingStart = this.props.bookingStart;
    const bookingEnd   = this.props.bookingEnd;
    const booking      = this.props.booking;
    const user         = this.props.user;
    const setBooking   = this.setBooking;

    return (
      <div className="home">
        <div className="home-image">
          <h1>The Neuk</h1>
        </div>
        <div className="home-description">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <Calendar
          className="calendar"
          booking={booking}
          bookingStart={bookingStart}
          bookingEnd={bookingEnd}/>
        <BookingForm
          className="bookingForm"
          booking={booking}
          user={user}
          setBooking={setBooking}/>
      </div>
    );
  }
}

// Maps state from store to props
const mapStateToProps = (state, ownProps) => {
  return {
    booking: state.booking
  }
};

// Maps actions to props
const mapDispatchToProps = (dispatch) => {
  return {
    bookingStart: date => dispatch(bookingActions.setBookingStart(date)),
    bookingEnd:   date => dispatch(bookingActions.setBookingEnd(date)),
    setBooking: booking => dispatch(bookingActions.setBooking(booking))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
