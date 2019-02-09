import React, { Component } from 'react';
import { Link }             from 'react-router-dom'

// Components

class AdminBookings extends Component {
  render() {
    const upcomingBookingsProp = this.props.upcomingBookings;
    const pastBookingsProp = this.props.pastBookings;

    let upcomingBookings;
    let pastBookings;

    if(upcomingBookingsProp) {
      upcomingBookings = Object.keys(upcomingBookingsProp).map((key, index) => {
        let booking = upcomingBookingsProp[key];
        return (
          <tr key={booking.id} className="booking">
            <td>{booking.start_date}</td>
            <td>{booking.end_date}</td>
            <td>{booking.occupants}</td>
            <td>{booking.special_instructions}</td>
            <td>"price here"</td>
            <td>
              <Link to={`/admin/bookings/${booking.id}`}>Edit</Link>
            </td>
          </tr>
        )
      })
    }

    if(pastBookingsProp) {
      pastBookings = Object.keys(pastBookingsProp).map((key, index) => {
        let booking = pastBookingsProp[key];
        return (
          <tr key={booking.id} className="booking">
            <td>{booking.start_date}</td>
            <td>{booking.end_date}</td>
            <td>{booking.occupants}</td>
            <td>{booking.special_instructions}</td>
            <td>"price here"</td>
            <td>
              <Link to={`/admin/bookings/${booking.id}`}>Edit</Link>
            </td>
          </tr>
        )
      })
    }

    return (
      <div className="admin-bookings">
        <h2>Upcoming Bookings</h2>
        <table>
          <thead>
            <tr>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Occupants</th>
              <th>Special Instructions</th>
              <th>Price</th>
              <th>Update Booking</th>
            </tr>
          </thead>
          <tbody>
            {upcomingBookings}
          </tbody>
        </table>

        <h2>Past Bookings</h2>

        <table>
          <thead>
            <tr>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Occupants</th>
              <th>Special Instructions</th>
              <th>Price</th>
              <th>Update Booking</th>
            </tr>
          </thead>
          <tbody>
            {pastBookings}
          </tbody>
        </table>
      </div>
    );
  }
}

export default AdminBookings;
