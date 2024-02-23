import React, { Component } from 'react'

import { connect } from 'react-redux';
import * as bookingActions from 'liveBookingActions';
import * as locationActions from 'locationActions';

// Components
import Calendar    from 'Home/Calendar'
import BookingForm from 'Home/BookingForm'
import ImageSlider from 'Home/ImageSlider'

class Home extends Component {
  constructor(props) {
    super(props);
    this.setBooking = this.setBooking.bind(this);
  }

  componentWillMount() {
    this.props.getLocations();
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
    const locations    = this.props.locations;

    return (
      <div className="home">
        <div className="home-image">
          <h1>The Neuk</h1>
        </div>
        <div className="home-description">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>

        <ImageSlider locations={locations} />

        <div className="home-booking-title">
          <h2>Place your booking</h2>
        </div>
        <div className="home-booking-form">
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
      </div>
    );
  }
}

// Maps state from store to props
const mapStateToProps = (state, ownProps) => {
  return {
    booking: state.liveBooking,
    locations: state.locations
  }
};

// Maps actions to props
const mapDispatchToProps = (dispatch) => {
  return {
    bookingStart: date => dispatch(bookingActions.setBookingStart(date)),
    bookingEnd:   date => dispatch(bookingActions.setBookingEnd(date)),
    setBooking: booking => dispatch(bookingActions.setBooking(booking)),
    getLocations: () => dispatch(locationActions.getLocations())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
