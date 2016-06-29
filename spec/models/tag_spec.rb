require 'rails_helper'

describe Tag, 'validations' do
  it { should validate_presence_of(:name) }

  it { should have_many(:idea_tags) }
  it { should have_many(:ideas).through(:idea_tags) }
end
