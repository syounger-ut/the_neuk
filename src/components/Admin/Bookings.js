import React, { Component } from 'react';

class Bookings extends Component {
  render() {
    const bookings = this.props.user;
    console.log(bookings);
    return (
      <h1>Bookings Component</h1>
    );
  }
}

export default Bookings;
