class CreateThingsToDos < ActiveRecord::Migration[5.0]
  def change
    create_table :things_to_dos do |t|
      t.string :name
      t.string :description
      t.string :website_url
    end

    add_reference :images, :things_to_do, index: true
  end
end
