describe Location do
  describe "#name" do
    describe "when the name is not present" do
      it "should raise an exception" do
        expect { create(:location, name: nil) }.to raise_error(ActiveRecord::RecordInvalid)
      end
    end

    describe "when the name is present" do
      it "should create a location" do
        expect { create(:location, name: "FooMountain") }.to change(Location, :count).by(1)
      end
    end
  end

  describe "#images" do
    describe "when images are nil" do
      it "should raise an error" do
        expect { create(:location, images: nil) }.to raise_error(NoMethodError)
      end
    end

    describe "when images are an empty array" do
      it "should create a location" do
        expect { create(:location, images: []) }.to change(Location, :count).by(1)
      end
    end
  end
end