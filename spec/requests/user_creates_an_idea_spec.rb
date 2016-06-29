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

  it "POST#create, with one tag" do
    idea = {title: "another title",
            body: "another body",
            tags: "first"}
    post '/api/v1/ideas', idea
    idea_json = JSON.parse(response.body)

    expect(response.status).to eq 201
    expect(idea_json["title"]).to eq idea[:title]
    expect(idea_json["body"]).to eq idea[:body]

    expect(Tag.count).to eq 1
  end
  it "POST#create, with two tags" do
    idea = {title: "another title",
            body: "another body",
            tags: "first, second"}
    post '/api/v1/ideas', idea
    idea_json = JSON.parse(response.body)

    expect(response.status).to eq 201
    expect(idea_json["title"]).to eq idea[:title]
    expect(idea_json["body"]).to eq idea[:body]

    expect(Tag.count).to eq 2
  end

  it "POST#create, with three tags" do
    idea = {title: "another title",
            body: "another body",
            tags: "first, second, third"}
    post '/api/v1/ideas', idea
    idea_json = JSON.parse(response.body)

    expect(response.status).to eq 201
    expect(idea_json["title"]).to eq idea[:title]
    expect(idea_json["body"]).to eq idea[:body]

    expect(Tag.count).to eq 3
  end
end
