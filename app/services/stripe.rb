class Stripe

  def self.charge(args)
    Stripe::Charge.create(
      :amount => args[:amount],
      :currency => "gbp",
      :source => args[:stripeToken], # obtained with Stripe.js
      :description => args[:description]
    )
  end

end
