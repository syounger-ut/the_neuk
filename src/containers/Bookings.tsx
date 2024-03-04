import * as React from 'react';

import { connect } from 'react-redux';
import * as eventActions from '../actions/eventActions';

// Components
import Booking from '../components/Booking/Booking';
import Events from '../components/Booking/Events';

type Props = {
  findEvents: () => void;
  currentUser: {
    bookings: {
      id: number,
      start_date: string,
      end_date: string,
      occupants: number,
      special_instructions: string,
      price: number
    }[];
  };
  events: {
    name: string;
    images: { url: string }[];
    descriptions: { description: string }[];
    schedules: {
      start_ts: number;
      end_ts: number;
      ticket_summary: string;
      place: {
        name: string;
        address: string;
        town: string;
        post_code: string;
      }
    }[];
    website: string;
  }[];
}

type State = {

}

class Bookings extends React.Component<Props, State> {

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
