require 'rails_helper'

describe 'update /api/v1/ideas - happy paths' do
  before do
    Idea.create(title: "title", body: "body", quality: 1)
  end

  it "PATCH#update - +1" do
    idea = Idea.first
    patch "/api/v1/ideas/#{idea.id}", {quality: "1"}
    idea = Idea.first
    expect(idea.quality).to eq("genius")
  end

  it "PATCH#update - -1" do
    idea = Idea.first
    patch "/api/v1/ideas/#{idea.id}", {quality: "-1"}
    idea = Idea.first
    expect(idea.quality).to eq("swill")
  end

end

describe 'update /api/v1/ideas - sad paths - 1' do
  before do
    Idea.create(title: "title", body: "body", quality: 0)
    Idea.create(title: "title", body: "body", quality: 2)
  end

  it "PATCH#update - -1" do
    idea = Idea.first
    patch "/api/v1/ideas/#{idea.id}", {quality: "-1"}
    idea = Idea.first
    expect(idea.quality).to eq("swill")
  end

  it "PATCH#update - +1" do
    idea = Idea.last
    patch "/api/v1/ideas/#{idea.id}", {quality: "1"}
    idea = Idea.last
    expect(idea.quality).to eq("genius")
  end
end
