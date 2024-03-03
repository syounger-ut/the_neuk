import * as React from 'react';

import { connect } from 'react-redux';

// Components
import Stripe from 'Pay/Stripe';
import BookingView from 'Pay/BookingView';

class Pay extends React.Component {
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
