import React, { Component } from 'react';
import {StripeProvider} from 'react-stripe-elements';

import { connect } from 'react-redux';
// import * as bookingActions from 'bookingActions';

// Components
import MyStoreCheckout from 'Pay/MyStoreCheckout';

class Pay extends Component {
  render() {
    const booking = this.props.booking;
    const user    = this.props.user;

    return (
      <section className="pay">
        <h1>Hello Pay component</h1>
        <h2>Booking</h2>
        <div>
          <p>Start Date</p>
          <p>{booking.start_date}</p>
        </div>
        <div>
          <p>End Date</p>
          <p>{booking.end_date}</p>
        </div>
        <div>
          <p>Occupants</p>
          <p>{booking.occupants}</p>
        </div>
        <div>
          <p>Special Instructions</p>
          <p>{booking.special_instructions}</p>
        </div>

        <form action="/your-server-side-code" method="POST">
          <script
            src="https://checkout.stripe.com/checkout.js" className="stripe-button"
            data-key="pk_test_hzMZJGOvNikFW1uWIlD91Zkt"
            data-amount="999"
            data-name="the_neuk"
            data-description="Widget"
            data-image="https://stripe.com/img/documentation/checkout/marketplace.png"
            data-locale="auto"
            data-currency="gbp">
          </script>
        </form>
        <StripeProvider apiKey="pk_test_hzMZJGOvNikFW1uWIlD91Zkt">
          <MyStoreCheckout/>
        </StripeProvider>
      </section>
    );
  }
}

// Maps state from store to props
const mapStateToProps = (state, ownProps) => {
  return {
    booking: state.booking,
    user: state.user
  }
};

// Maps actions to props
const mapDispatchToProps = (dispatch) => {
  return {
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Pay);
