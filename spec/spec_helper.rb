require 'capybara/rspec'
RSpec.configure do |config|

  config.expect_with :rspec do |expectations|
    expectations.include_chain_clauses_in_custom_matcher_descriptions = true
  end

  config.mock_with :rspec do |mocks|
    mocks.verify_partial_doubles = true
  end

  config.before(:suite) do
    DatabaseCleaner.strategy = :transaction
    DatabaseCleaner.clean_with(:truncation)
  end

  config.around(:each) do |example|
    DatabaseCleaner.cleaning do
      example.run
    end
  end

end

def create_ideas(num)
  num.times do
    Idea.create(title: Faker::Hipster.sentence,
    body: Faker::Hipster.paragraph,
    quality: Random.new.rand(0..2))
  end
end
