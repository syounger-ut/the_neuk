class LocationSerializer < ActiveModel::Serializer
  has_many :images
  attributes :name, :description
end
