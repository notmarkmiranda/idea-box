class IdeaSerializer < ActiveModel::Serializer
  attributes :id, :title, :body, :created_at
  has_many :tags
end
