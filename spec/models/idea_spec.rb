require 'rails_helper'

RSpec.describe Idea, "validations" do
  it { should validate_presence_of(:title) }
  it { should validate_presence_of(:body) }
  # it { should validate_presence_of(:quality) }
  it { should have_many(:idea_tags) }
  it { should have_many(:tags).through(:idea_tags) }
end
