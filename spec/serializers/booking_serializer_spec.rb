describe BookingSerializer do
  let(:booking) { build(:booking) }
  let(:serializer) { described_class.new(booking) }
  let(:serialization) { ActiveModelSerializers::Adapter.create(serializer).to_json }
  let(:subject) { JSON.parse(serialization) }

  it 'should have the expected attributes' do
    expect(subject.keys).to contain_exactly("id", "end_date", "start_date", "occupants", "special_instructions", "user")
  end
end
