class User < ApplicationRecord
  has_secure_password

  # Relationships
  has_many :bookings

  # Enums
  enum role: [ :guest, :family, :admin ]

  # Validations
  validates :name,         presence: true
  validates :email,        presence: true, uniqueness: true
  validates :phone_number, presence: true

  before_create :format_text

  private

  def format_text
    self.name  = self.name.downcase
    self.email = self.email.downcase
  end

end
