class Booking < ApplicationRecord
  # Relationships
  belongs_to :user

  # Enums
  enum booking_source: [:website, :air_bnb]

  # Validations
  validates :start_date, presence: true
  validates :end_date, presence: true
  validates :occupants, presence: true
end
