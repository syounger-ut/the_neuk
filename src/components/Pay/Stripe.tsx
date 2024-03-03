import * as React from 'react';
import { StripeProvider } from 'react-stripe-elements';

// Components
import MyStoreCheckout from 'Pay/Stripe/MyStoreCheckout';

class Stripe extends React.Component {
  render() {
    const booking = this.props.booking;
    const user = this.props.user
    return (
      <StripeProvider apiKey="pk_test_hzMZJGOvNikFW1uWIlD91Zkt">
        <MyStoreCheckout booking={booking} user={user} />
      </StripeProvider>
    );
  }
}

export default Stripe;
