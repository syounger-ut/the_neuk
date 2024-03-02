class Image < ApplicationRecord
  # Assocations
  belongs_to :imageable, polymorphic: true, optional: true

  has_one_attached :photo
end
