require "spec_helper"
ENV["RAILS_ENV"] ||= "test"
require File.expand_path("../../config/environment", __FILE__)
abort("The Rails environment is running in production mode!") if Rails.env.production?
require "rspec/rails"
require "database_cleaner"

ActiveRecord::Migration.maintain_test_schema!

RSpec.configure do |config|
  SimpleCov.formatter = SimpleCov::Formatter::Console
  SimpleCov.start 'rails' do
    add_filter "/channels/"
    add_filter "/controllers/"
    add_filter "/jobs/"
    add_filter "/mailers/"
    add_filter "/serializers/"
    add_filter "/services/"
    add_filter "/views/"
    add_filter "/lib/"
  end
  SimpleCov.minimum_coverage 90
  SimpleCov.minimum_coverage_by_file 90

  config.include FactoryBot::Syntax::Methods

  config.before(:suite) do
    DatabaseCleaner.clean_with(:truncation)
    DatabaseCleaner.strategy = :transaction
  end

  config.around(:each) do |example|
    DatabaseCleaner.cleaning do
      example.run
    end
  end

  config.fixture_path = "#{::Rails.root}/spec/fixtures"
  config.use_transactional_fixtures = true
  config.infer_spec_type_from_file_location!
  config.filter_rails_from_backtrace!
end
