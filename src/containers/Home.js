import React, { Component } from 'react'

import { connect } from 'react-redux';
import * as bookingActions from 'bookingActions';

// Components
import Calendar    from 'Home/Calendar'
import BookingForm from 'Home/BookingForm'

class Home extends Component {
  render() {
    const bookingStart  = this.props.bookingStart;
    const bookingEnd    = this.props.bookingEnd;
    const booking       = this.props.booking;
    const user          = this.props.user;
    const submitBooking = this.props.submitBooking;

    return (
      <div className="home">
        <Calendar
          className="calendar"
          booking={booking}
          bookingStart={bookingStart}
          bookingEnd={bookingEnd}/>
        <BookingForm
          className="bookingForm"
          booking={booking}
          user={user}
          submitBooking={submitBooking}/>
      </div>
    );
  }
}

// Maps state from store to props
const mapStateToProps = (state, ownProps) => {
  return {
    booking: state.booking,
    user: state.user
  }
};

// Maps actions to props
const mapDispatchToProps = (dispatch) => {
  return {
    bookingStart: date => dispatch(bookingActions.setBookingStart(date)),
    bookingEnd:   date => dispatch(bookingActions.setBookingEnd(date)),
    submitBooking: booking => dispatch(bookingActions.submitBooking(booking))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
