class SimpleCovHelper
  def self.setup(config)
    if config.files_to_run.length > 1
      SimpleCov.formatter = SimpleCov::Formatter::Console
      SimpleCov.start "rails" do
        add_filter "/channels/"
        add_filter "/controllers/"
        add_filter "/jobs/"
        add_filter "/mailers/"
        add_filter "/serializers/"
        add_filter "/views/"
        add_filter "/lib/"
      end
      SimpleCov.minimum_coverage 90
      SimpleCov.minimum_coverage_by_file 90
    end
  end
end
