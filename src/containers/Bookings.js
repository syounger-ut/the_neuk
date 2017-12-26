import React, { Component } from 'react';

import { connect } from 'react-redux';

// Components
import Booking from 'Booking/Booking';
import Events  from 'Booking/Events';

class Bookings extends Component {
  render() {
    const user = this.props.user;
    return (
      <section className="bookings">
        <h1>Events Container</h1>
        <Events/>
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

export default connect(mapStateToProps)(Bookings);
