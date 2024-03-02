describe LocationSerializer do
  let(:location) { build(:location) }
  let(:serializer) { described_class.new(location) }
  let(:serialization) { ActiveModelSerializers::Adapter.create(serializer).to_json }
  let(:subject) { JSON.parse(serialization) }

  it "should have the expected attributes" do
    expect(subject.keys).to contain_exactly("name", "description", "images")
  end
end
