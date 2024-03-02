class User < ApplicationRecord
  has_secure_password validations: false # => removes password_confirmation check

  # Relationships
  has_many :bookings

  # Enums
  enum role: [:guest, :family, :admin]

  # Validations
  validates :first_name, :last_name, :phone_number, presence: true
  validates :password, presence: true, on: :create
  validates :email, presence: true, uniqueness: true, if: :email_changed?

  before_create :format_text

  private

  def format_text
    self.first_name = first_name&.downcase
    self.last_name = last_name&.downcase
    self.email = email&.downcase
  end
end
