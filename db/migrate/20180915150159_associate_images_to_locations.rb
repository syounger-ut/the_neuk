class AssociateImagesToLocations < ActiveRecord::Migration[5.0]
  def change
    add_reference :images, :location, index: true
  end
end
