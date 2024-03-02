describe User do
  let(:user) { create(:user) }

  describe "#role" do
    %w[guest family admin].each do |role|
      describe "When the role is valid #{role}" do
        it "should create a user" do
          expect { create(:user, role: role) }.to change(User, :count).by(1)
        end
      end
    end

    describe("when the role is not valid") do
      it "should raise an exception" do
        expect { create(:user, role: "not-valid") }.to raise_error(ArgumentError)
      end
    end
  end

  describe "#first_name" do
    describe "when the first_name is not provided" do
      it "should raise an exception" do
        expect { create(:user, first_name: nil) }.to raise_error(ActiveRecord::RecordInvalid)
      end
    end

    describe "when the first_name is provided" do
      it "should create a user" do
        expect { create(:user, first_name: "foo") }.to change(User, :count).by(1)
      end

      describe "when the name contains a capital" do
        it "should convert the name to lowercase" do
          expect(create(:user, first_name: "SomethingWithCapitals").first_name).to eq "somethingwithcapitals"
        end
      end
    end
  end

  describe "#last_name" do
    describe "when the last_name is not provided" do
      it "should raise an exception" do
        expect { create(:user, last_name: nil) }.to raise_error(ActiveRecord::RecordInvalid)
      end
    end

    describe "when the last_name is provided" do
      it "should create a user" do
        expect { create(:user, last_name: "foo") }.to change(User, :count).by(1)
      end

      describe "when the name contains a capital" do
        it "should convert the name to lowercase" do
          expect(create(:user, last_name: "SomethingWithCapitals").last_name).to eq "somethingwithcapitals"
        end
      end
    end
  end

  describe "#phone_number" do
    describe "when the phone_number is not provided" do
      it "should raise an exception" do
        expect { create(:user, phone_number: nil) }.to raise_error(ActiveRecord::RecordInvalid)
      end
    end

    describe "when the phone_number is provided" do
      it "should create a user" do
        expect { create(:user, phone_number: "foo") }.to change(User, :count).by(1)
      end
    end
  end

  describe "#password" do
    describe "when the password is not provided" do
      it "should raise an exception" do
        expect { create(:user, password: nil) }.to raise_error(ActiveRecord::RecordInvalid)
      end
    end

    describe "when the password is provided" do
      it "should create a user" do
        expect { create(:user, password: "foo") }.to change(User, :count).by(1)
      end
    end
  end

  describe "#email" do
    describe "when the email is not provided" do
      it "should raise an exception" do
        expect { create(:user, email: nil) }.to raise_error(ActiveRecord::RecordInvalid)
      end
    end

    describe "when the email is provided" do
      describe "when the email is unique" do
        it "should create a user" do
          expect { create(:user, email: "unique@email.com") }.to change(User, :count).by(1)
        end

        describe "when the name contains a capital" do
          it "should convert the string to lowercase" do
            expect(create(:user, email: "Foo@Bar.Com").email).to eq "foo@bar.com"
          end
        end
      end

      describe "when the email is not unique" do
        it "should raise an exception" do
          expect { create(:user, email: user.email) }.to raise_error(ActiveRecord::RecordInvalid)
        end
      end
    end
  end
end
