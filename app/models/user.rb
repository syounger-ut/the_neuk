class User < ApplicationRecord
  has_secure_password

  # Enums
  enum role: [ :admin, :guest, :family ]

  # Validations
  validates :name,         presence: true
  validates :email,        presence: true, uniqueness: true
  validates :phone_number, presence: true

end
