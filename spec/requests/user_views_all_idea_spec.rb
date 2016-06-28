require 'rails_helper'

describe 'get /api/v1/ideas' do
  before do
    create_ideas(5)
  end

  it "GET#index" do
    get '/api/v1/ideas'
    ideas_json = JSON.parse(response.body)
    expect(response.status).to eq 200
    expect(ideas_json.size).to eq 5
  end
end
