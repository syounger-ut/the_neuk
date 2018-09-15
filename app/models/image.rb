class Image < ApplicationRecord

  # Assocations
  belongs_to :imageable, polymorphic: true

  has_attached_file :photo, styles: {
    thumb: '100x100>',
    square: '200x200#',
    medium: "300x300"
  }

  # Validations
  validates_attachment_presence :photo
  validates_attachment_content_type :photo, content_type: /\Aimage\/.*\z/

end
