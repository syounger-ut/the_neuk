import * as React from 'react';
import { Elements } from 'react-stripe-elements';

import CheckoutForm from '../../Pay/Stripe/CheckoutForm';

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

class MyStoreCheckout extends React.Component<Props> {
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
