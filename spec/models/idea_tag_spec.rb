require 'rails_helper'

RSpec.describe IdeaTag, 'validations' do
  it { should belong_to(:idea) }
  it { should belong_to(:tag) }
end
