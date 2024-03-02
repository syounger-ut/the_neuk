class Location < ApplicationRecord
  # Associations
  has_many :images, as: :imageable

  # Validations
  validates :name, presence: true
end
