require 'rails_helper'

describe 'delete /api/v1/ideas' do
  before do
    create_ideas(2)
  end

  it "DELETE#destroy" do
    idea = Idea.first
    delete "/api/v1/ideas/#{idea.id}"
    expect(response.status).to eq 204
  end
end
