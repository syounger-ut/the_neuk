class LocationSerializer < ActiveModel::Serializer
  has_one :image
  attributes :name, :description, :website_url
end
