import * as React from 'react';
import { Elements } from 'react-stripe-elements';

import CheckoutForm from 'Pay/Stripe/CheckoutForm';

class MyStoreCheckout extends React.Component {
  render() {
    const booking = this.props.booking;
    const user = this.props.user;
    return (
      <Elements>
        <CheckoutForm booking={booking} user={user} />
      </Elements>
    );
  }
}

export default MyStoreCheckout;
