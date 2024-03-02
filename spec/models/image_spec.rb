describe Image do
  it "should create an image" do
    expect { create(:image) }.to change(Image, :count).by(1)
  end
end
