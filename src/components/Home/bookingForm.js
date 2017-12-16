import React, { Component } from 'react'

import moment from 'moment';

class BookingForm extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    let bookingStart = this.props.booking.start ? moment(this.props.booking.start).format("DD-MM-YYYY") : '';
    let bookingEnd   = this.props.booking.end ? moment(this.props.booking.end).format("DD-MM-YYYY") : '';
    return (
      <section>
        <h1>Booking Form</h1>
        <ul>
          <li>{`Booking Start: ${bookingStart}`}</li>
          <li>{`Booking End: ${bookingEnd}`}</li>
        </ul>
      </section>
    );
  }
}

export default BookingForm;
