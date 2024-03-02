class PaymentService
  def initialize(adapter)
    @adapter = adapter
  end

  def charge(stripe_token, description, price)
    @adapter.charge(price, stripe_token, description)
  end
end
