import React, { Component } from 'react'

import { connect } from 'react-redux';
import * as bookingActions from 'bookingActions';

// Components
import Calendar    from 'Home/Calendar'
import BookingForm from 'Home/BookingForm'

class Home extends Component {
  render() {
    const bookingStart = this.props.bookingStart;
    const bookingEnd   = this.props.bookingEnd;
    const booking      = this.props.booking

    return (
      <div>
        <h1>Home Component</h1>
        <Calendar booking={booking} bookingStart={bookingStart} bookingEnd={bookingEnd}/>
        <BookingForm booking={booking}/>
      </div>
    );
  }
}

// Maps state from store to props
const mapStateToProps = (state, ownProps) => {
  return {
    booking: state.booking,
  }
};

// Maps actions to props
const mapDispatchToProps = (dispatch) => {
  return {
    bookingStart: date => dispatch(bookingActions.setBookingStart(date)),
    bookingEnd:   date => dispatch(bookingActions.setBookingEnd(date))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
