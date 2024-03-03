import * as React from 'react';

import { connect } from 'react-redux';
import * as eventActions from 'eventActions';

// Components
import Booking from 'Booking/Booking';
import Events from 'Booking/Events';

class Bookings extends React.Component {

  componentDidMount() {
    this.props.findEvents();
  }

  render() {
    const user = this.props.currentUser;
    const events = this.props.events;
    return (
      <section className="bookings">
        <h1>Events Container</h1>
        <Events events={events} />
        <h1>Bookings</h1>
        <Booking user={user} />
      </section>
    );
  }
}

// Maps state from store to props
const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.currentUser,
    events: state.events
  }
};

// Maps actions to props
const mapDispatchToProps = (dispatch) => {
  return {
    findEvents: () => dispatch(eventActions.findEvents()),
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(Bookings);
