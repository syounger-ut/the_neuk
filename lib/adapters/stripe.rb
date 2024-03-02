module Adapters
  class Stripe
    def charge(price, stripe_token, description)
      Stripe::Charge.create(
        amount: price,
        currency: "gbp",
        source: stripe_token, # obtained with Stripe.js
        description: description
      )
    end
  end
end