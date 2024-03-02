describe PaymentService do
  describe ".charge" do
    let(:mock_token) { "stripe_token" }
    let(:mock_description) { "description" }
    let(:mock_price) { 1234 }
    let(:adapter) { double("adapter") }

    let(:subject) { PaymentService.new(adapter) }

    it "delegates to the Stripe adapter" do
      allow(Adapters::Stripe).to receive(:new).and_return(adapter)
      expect(adapter).to receive(:charge).with(mock_price, mock_token, mock_description)
      subject.charge(mock_token, mock_description, mock_price)
    end
  end
end
