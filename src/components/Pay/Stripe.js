import React, {Component} from 'react';
import {StripeProvider} from 'react-stripe-elements';

// Components
import MyStoreCheckout from 'Pay/Stripe/MyStoreCheckout';

class Stripe extends Component {
  render() {
    return (
      <StripeProvider apiKey="pk_test_hzMZJGOvNikFW1uWIlD91Zkt">
        <MyStoreCheckout/>
      </StripeProvider>
    );
  }
}

export default Stripe;
