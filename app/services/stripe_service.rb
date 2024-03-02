class StripeService

  def self.charge(stripe_token, description, price)
    Stripe::Charge.create(
      :amount => price,
      :currency => "gbp",
      :source => stripe_token, # obtained with Stripe.js
      :description => description
    )
  end

end
