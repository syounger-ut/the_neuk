describe ThingsToDo do
  describe "#image" do
    describe "when image is nil" do
      it "should create a record" do
        expect { create(:things_to_do, image: nil) }.to change(ThingsToDo, :count).by(1)
      end
    end

    describe "when an image is present" do
      it "should create a record" do
        expect { create(:things_to_do, image: build(:image)) }.to change(ThingsToDo, :count).by(1)
      end
    end
  end
end