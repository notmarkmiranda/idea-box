class Tag < ActiveRecord::Base
  validates_presence_of :name

  has_many :idea_tags
  has_many :ideas, through: :idea_tags

  def self.setup(tag, idea_id)
    tag.split(",").map(&:strip).each do |tag|
      Idea.find(idea_id).tags.find_or_create_by(name: tag)
    end
  end
end
