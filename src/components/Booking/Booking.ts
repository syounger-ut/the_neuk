import React, {Component} from 'react';

class Booking extends Component {
  render() {
    const user = this.props.user;

    let bookings;
    if(user) {
      bookings = user.bookings.map(booking => {
        return (
          <li key={booking.id} className="booking">
            <p>Start Date</p>
            <p>{booking.start_date}</p>
            <p>End Date</p>
            <p>{booking.end_date}</p>
            <p>Occupants</p>
            <p>{booking.occupants}</p>
            <p>Special Instructions</p>
            <p>{booking.special_instructions}</p>
            <p>Price</p>
            {/* <p>{booking.price.toLocaleString()}</p> */}
          </li>
        )
      })
    }

    return (
      <div className="bookings">
        <ul>{bookings}</ul>
      </div>
    );
  }
};

export default Booking;
