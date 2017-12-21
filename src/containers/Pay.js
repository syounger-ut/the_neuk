import React, { Component } from 'react';

import { connect } from 'react-redux';
// import * as bookingActions from 'bookingActions';

class Pay extends Component {
  render() {
    const booking = this.props.booking;
    const user    = this.props.user;

    console.log(this.props.booking)
    console.log(this.props.user)
    return (
      <section className="pay">
        <h1>Hello Pay component</h1>
        <h2>Booking</h2>
        <div>
          <p>Start Date</p>
          <p>{booking.start_date}</p>
        </div>
        <div>
          <p>End Date</p>
          <p>{booking.end_date}</p>
        </div>
        <div>
          <p>Occupants</p>
          <p>{booking.occupants}</p>
        </div>
        <div>
          <p>Special Instructions</p>
          <p>{booking.special_instructions}</p>
        </div>
      </section>
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
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Pay);
