describe ThingsToDoSerializer do
  let(:things_to_do) { build(:things_to_do) }
  let(:serializer) { described_class.new(things_to_do) }
  let(:serialization) { ActiveModelSerializers::Adapter.create(serializer).to_json }
  let(:subject) { JSON.parse(serialization) }

  it 'should have the expected attributes' do
    expect(subject.keys).to contain_exactly("name", "description", "website_url", "image")
  end
end
