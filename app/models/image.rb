class Image < ApplicationRecord
  # Assocations
  belongs_to :imageable, polymorphic: true, optional: true

  has_one_attached :photo

  # Validations
  validates_absence_of :photo
  validates_acceptance_of :photo, content_type: /\Aimage\/.*\z/
end
