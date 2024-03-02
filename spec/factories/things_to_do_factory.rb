FactoryBot.define do
  factory :things_to_do do
    name { "Go to foo mountain" }
    description { "A big foo mountain to climb" }
    website_url { "https://example.com" }
  end
end