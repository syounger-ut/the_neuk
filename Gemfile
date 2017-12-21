source 'https://rubygems.org'

gem 'rails', '~> 5.0.5'
gem 'pg', '~> 0.18'
gem 'puma', '~> 3.0'
gem 'rack-cors'
# Use Redis adapter to run Action Cable in production
# gem 'redis', '~> 3.0'

# Authentication
gem 'bcrypt', '~> 3.1', '>= 3.1.11'
gem 'jwt'
gem 'active_model_serializers'

# Payment
gem 'stripe', '~> 3.9', '>= 3.9.1'

group :development, :test do
  gem 'byebug', platform: :mri
  gem 'rspec-rails', '~> 3.6'
  gem 'pry'
  gem 'dotenv-rails'
end

group :development do
  gem 'listen', '~> 3.0.5'
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
end

group :test do
  gem 'factory_girl', '~> 4.8'
  gem 'shoulda-matchers', '~> 3.1'
  gem 'database_cleaner', '~> 1.6', '>= 1.6.1'
  gem 'simplecov'
end
