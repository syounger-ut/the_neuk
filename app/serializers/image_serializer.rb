class ImageSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :thumb_photo_url, :square_photo_url, :medium_photo_url, :original_photo_url

  def thumb_photo_url
    object.photo.url(:thumb)
  end

  def square_photo_url
    object.photo.url(:square)
  end

  def medium_photo_url
    object.photo.url(:medium)
  end

  def original_photo_url
    object.photo.url(:original)
  end

end
