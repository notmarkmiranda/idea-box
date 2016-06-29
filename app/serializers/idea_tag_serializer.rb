class IdeaTagSerializer < ActiveModel::Serializer
  attributes :id, :idea_id, :tag_id
  belongs_to :idea
  belongs_to :tag
end
