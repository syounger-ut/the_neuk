class PayController < ApplicationController

  def create
    binding.pry
    payment_details = { amount: params[:amount], source: params[:stripeToken, description: params[:description]] }
    Stripe.charge(payment_details)
  end

end
