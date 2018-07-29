import React, { Component } from 'react';

// Components

class Bookings extends Component {
  render() {
    const user = this.props.user;
    const bookings = user.bookings;
    console.log(bookings)
    return (
      <div className='admin'>
        <h1>Bookings Component</h1>
      </div>
    );
  }
}

export default Bookings;
