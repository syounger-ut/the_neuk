import React, {Component} from 'react';
import {injectStripe} from 'react-stripe-elements';

import theNeukApi from 'theNeukApi';

// import AddressSection from './AddressSection';
import CardSection from 'Pay/Stripe/CardSection';

class CheckoutForm extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event) {
    // We don't want to let default form submission happen here, which would refresh the page.
    event.preventDefault();
    // Within the context of `Elements`, this call to createToken knows which Element to
    // tokenize, since there's only one in this group.
    this.props.stripe.createToken({name: 'Jenny Rosen'}).then(({token}) => {
      console.log('Received Stripe token:', token);
      theNeukApi.pay(token.id, booking).then(response => {
        console.log(response);
      })
    });

    // However, this line of code will do the same thing:
    // this.props.stripe.createToken({type: 'card', name: 'Jenny Rosen'});
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className='stripe-form'>
        {/* <AddressSection /> */}
        <CardSection />
        <button className="button">Confirm order</button>
      </form>
    );
  }
}

export default injectStripe(CheckoutForm);
