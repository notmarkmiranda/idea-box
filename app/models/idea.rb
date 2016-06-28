class Idea < ActiveRecord::Base
  validates_presence_of :title
  validates_presence_of :body

  enum quality: ["swill", "plausible", "genius"]
end
