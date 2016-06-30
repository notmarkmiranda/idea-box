class IdeaSerializer < ActiveModel::Serializer
  attributes :id, :title, :body, :created_at, :quality
  has_many :tags
end
