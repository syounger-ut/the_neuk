class BookingSerializer < ActiveModel::Serializer
  has_one :user
  attributes :id, :start_date, :end_date, :occupants, :special_instructions
end
