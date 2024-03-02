describe ImageSerializer do
  let(:image) { build(:image) }
  let(:serializer) { described_class.new(image) }
  let(:serialization) { ActiveModelSerializers::Adapter.create(serializer).to_json }
  let(:subject) { JSON.parse(serialization) }

  it 'should have the expected attributes' do
    expect(subject.keys).to contain_exactly("id", "name", "description", "thumb_photo_url", "square_photo_url", "medium_photo_url", "original_photo_url")
  end
end
