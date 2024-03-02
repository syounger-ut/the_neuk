FactoryBot.define do
  factory :booking do
    start_date { Date.new(2024, 0o2, 0o2) }
    end_date { Date.new(2024, 0o2, 0o7) }
    occupants { 123 }
    special_instructions { "We want a great stay" }
    booking_source { "website" }
    paid { true }
    association :user
  end
end