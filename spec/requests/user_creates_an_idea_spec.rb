require 'rails_helper'

describe 'post /api/v1/ideas' do
  it "POST#create" do
    idea = {title: "new title",
            body: "new body for an idea"}
    post '/api/v1/ideas', idea
    idea_json = JSON.parse(response.body)

    expect(response.status).to eq 201
    expect(idea_json["title"]).to eq idea[:title]
    expect(idea_json["body"]).to eq idea[:body]
  end
end
