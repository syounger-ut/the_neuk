class User < ApplicationRecord
  has_secure_password validations: false # => removes password_confirmation check

  # Relationships
  has_many :bookings

  # Enums
  enum role: [ :guest, :family, :admin ]

  # Validations
  validates :first_name, :last_name, :phone_number, :password, presence: true
  validates :email, presence: true, uniqueness: true

  before_create :format_text

  private

  def format_text
    self.first_name = self.first_name.downcase
    self.last_name  = self.last_name.downcase
    self.email      = self.email.downcase
  end

end
