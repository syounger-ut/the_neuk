import React, {Component} from 'react';
import {StripeProvider} from 'react-stripe-elements';

// Components
import MyStoreCheckout from 'Pay/Stripe/MyStoreCheckout';

class Stripe extends Component {
  render() {
    const booking = this.props.booking;
    const user    = this.props.user
    return (
      <div>
        <h2>Stripe Component</h2>
        <br/>
        <StripeProvider apiKey="pk_test_hzMZJGOvNikFW1uWIlD91Zkt">
          <MyStoreCheckout booking={booking} user={user}/>
        </StripeProvider>
      </div>
    );
  }
}

export default Stripe;
