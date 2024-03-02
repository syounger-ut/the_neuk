FactoryBot.define do
  factory :user do
    first_name { "John" }
    last_name { "Doe" }
    email { "foo@bar.com" }
    phone_number { "01234567890" }
    password { "password" }
    role { "admin" }
  end
end