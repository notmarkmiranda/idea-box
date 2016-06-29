class Idea < ActiveRecord::Base
  validates_presence_of :title
  validates_presence_of :body
  enum quality: ["swill", "plausible", "genius"]

  has_many :idea_tags
  has_many :tags, through: :idea_tags
end
