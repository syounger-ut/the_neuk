class PayController < ApplicationController
  def create
    Stripe::Charge.create(
      amount: 500,
      currency: "gbp",
      source: params[:pay][:id], # obtained with Stripe.js
      description: "Test payment"
    )
    # payment_details = { amount: params[:amount], source: params[:stripeToken, description: params[:description]] }
    # Stripe.charge(payment_details)
  end
end
