source "https://rubygems.org"

gem "rails", "~> 7.1", ">= 7.1.3.2"
gem "pg", "~> 1.5", ">= 1.5.6"
gem "puma", "~> 3.0"
gem "rack-cors"
# Use Redis adapter to run Action Cable in production
# gem 'redis', '~> 3.0'

# Authentication
gem "bcrypt", "~> 3.1", ">= 3.1.11"
gem "jwt"
gem "active_model_serializers", "~> 0.10.2"

# Payment
gem "stripe", "~> 3.9", ">= 3.9.1"

# Third party
gem "httparty", "~> 0.15.6"
gem "aws-sdk", "~> 2.3" # required for paperclip

# Engines
gem "admin", path: "engines/admin"

group :development, :test do
  gem 'byebug', platform: :mri
  gem 'rspec-rails', '~> 6.1.1'
  gem 'pry'
  gem 'dotenv-rails'
  gem 'standard'
end

group :development do
  gem "listen", "~> 3.9"
  gem "spring"
  gem "spring-watcher-listen", "~> 2.0.0"
end

group :test do
  gem 'factory_bot_rails', '~> 6.4', '>= 6.4.3'
  gem 'database_cleaner', '~> 2.0', '>= 2.0.2'
  gem 'simplecov'
end
