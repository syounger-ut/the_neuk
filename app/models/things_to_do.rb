class ThingsToDo < ApplicationRecord

  # Associations
  has_one :image, as: :imageable
end
