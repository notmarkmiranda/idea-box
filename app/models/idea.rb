class Idea < ActiveRecord::Base
  validates_presence_of :title
  validates_presence_of :body
  # validates_presence_of :quality

  enum quality: ["swill", "plausible", "genius"]
end
