require 'rails_helper'

describe Api::V1::IdeasController do
  before do
    create_ideas(2)
  end

  it "GET#index" do
    get :index, format: :json
    ideas = JSON.parse(response.body)
    expect(response.status).to eq 200
    expect(ideas.count).to eq 2
  end
end
