import * as React from 'react';
import { StripeProvider } from 'react-stripe-elements';

// Components
import MyStoreCheckout from '../Pay/Stripe/MyStoreCheckout';

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
}

class Stripe extends React.Component<Props> {
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
