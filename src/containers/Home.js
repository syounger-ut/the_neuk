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
