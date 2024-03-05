import * as React from 'react';

import { connect } from 'react-redux';

// Components
import Stripe from '../components/Pay/Stripe';
import BookingView from '../components/Pay/BookingView';

type Props = {
  booking: {
    start_date: string;
    end_date: string;
    occupants: string;
    special_instructions: string;
    price: string;
  };
  user: {
    id: string;
    email: string;
  };
};

class Pay extends React.Component<Props> {
  render() {
    const booking = this.props.booking;
    const user = this.props.user;

    return (
      <section className="pay">
        <BookingView booking={booking} />
        <Stripe booking={booking} user={user} />
      </section>
    );
  }
}

// Maps state from store to props
const mapStateToProps = (state, ownProps) => {
  return {
    booking: state.liveBooking,
    user: state.user
  }
};

// Maps actions to props
const mapDispatchToProps = (dispatch) => {
  return {
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Pay);
