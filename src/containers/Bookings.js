import React, { Component } from 'react';

import { connect } from 'react-redux';

// Components
import Booking from 'Booking/Booking';

class Bookings extends Component {
  render() {
    const user = this.props.user;
    return (
      <section className="bookings">
        <h1>Bookings</h1>
        <Booking user={user}/>
      </section>
    );
  }
}

// Maps state from store to props
const mapStateToProps = (state, ownProps) => {
  return {
    user: state.user
  }
};

// Maps actions to props
// const mapDispatchToProps = (dispatch) => {
//   return {
//     bookingStart: date => dispatch(bookingActions.setBookingStart(date)),
//     bookingEnd:   date => dispatch(bookingActions.setBookingEnd(date)),
//     setBooking: booking => dispatch(bookingActions.setBooking(booking))
//   }
// };

export default connect(mapStateToProps)(Bookings);
// export default connect(mapStateToProps, mapDispatchToProps)(Bookings);
