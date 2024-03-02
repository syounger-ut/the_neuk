describe UserSerializer do
  let(:user) { build(:user) }
  let(:serializer) { described_class.new(user) }
  let(:serialization) { ActiveModelSerializers::Adapter.create(serializer).to_json }
  let(:subject) { JSON.parse(serialization) }

  it 'should have the expected attributes' do
    expect(subject.keys).to contain_exactly("id", "full_name", "first_name", "last_name", "email", "phone_number", "role", "bookings")
  end
end
