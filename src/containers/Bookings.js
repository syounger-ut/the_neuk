import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as eventActions from 'eventActions';

// Components
import Booking from 'Booking/Booking';
import Events  from 'Booking/Events';

class Bookings extends Component {

  componentWillReceiveProps(nextProps) {
    const user = nextProps.user;
    if(user) {
      const booking = user.bookings[0];
      this.props.findEvents(booking.start_date, booking.end_date)
    }
  }

  render() {
    const user   = this.props.user;
    const events = this.props.events;
    return (
      <section className="bookings">
        <h1>Events Container</h1>
        <Events events={events}/>
        <h1>Bookings</h1>
        <Booking user={user}/>
      </section>
    );
  }
}

// Maps state from store to props
const mapStateToProps = (state, ownProps) => {
  return {
    user: state.user,
    events: state.events
  }
};

// Maps actions to props
const mapDispatchToProps = (dispatch) => {
  return {
    findEvents: (start, end) => dispatch(eventActions.findEvents(start, end)),
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(Bookings);
