describe Booking do
  let(:booking) { create(:booking) }

  describe "#booking_source" do
    %w[website air_bnb].each do |source|
      describe "when the source is valid #{source}" do
        it "should create a booking" do
          expect { create(:booking, booking_source: source) }.to change(Booking, :count).by(1)
        end
      end
    end

    describe "when the source is not valid" do
      it "should raise an exception" do
        expect { create(:booking, booking_source: "some-invalid-source") }.to raise_error(ArgumentError)
      end
    end
  end

  describe "#start_date" do
    describe "when the start_date is present" do
      it "should create a booking" do
        expect { create(:booking, start_date: Date.new(2024, 0o2, 0o2)) }.to change(Booking, :count).by(1)
      end
    end

    describe "when the start_date is not present" do
      it "should raise an exception" do
        expect { create(:booking, start_date: nil) }.to raise_error(ActiveRecord::RecordInvalid)
      end
    end
  end

  describe "#end_date" do
    describe "when the end_date is present" do
      it "should create a booking" do
        expect { create(:booking, end_date: Date.new(2024, 0o2, 0o2)) }.to change(Booking, :count).by(1)
      end
    end

    describe "when the end_date is not present" do
      it "should raise an exception" do
        expect { create(:booking, end_date: nil) }.to raise_error(ActiveRecord::RecordInvalid)
      end
    end
  end

  describe "#occupants" do
    describe "when the occupants is present" do
      it "should create a booking" do
        expect { create(:booking, occupants: 123) }.to change(Booking, :count).by(1)
      end
    end

    describe "when the occupants is not present" do
      it "should raise an exception" do
        expect { create(:booking, occupants: nil) }.to raise_error(ActiveRecord::RecordInvalid)
      end
    end
  end

  describe "#user" do
    describe "when the user is present" do
      it "should create a booking" do
        expect { create(:booking, user: create(:user)) }.to change(Booking, :count).by(1)
      end
    end

    describe "when the user is not present" do
      it "should raise an exception" do
        expect { create(:booking, user: nil) }.to raise_error(ActiveRecord::RecordInvalid)
      end
    end
  end
end
