class UserSerializer < ActiveModel::Serializer
  has_many :bookings
  attributes :id, :full_name, :first_name, :last_name, :email, :phone_number, :role

  def bookings
    object.bookings.order("start_date DESC")
  end

  def full_name
    "#{object.first_name} #{object.last_name}"
  end
end
