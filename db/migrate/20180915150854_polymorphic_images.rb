class PolymorphicImages < ActiveRecord::Migration[5.0]
  def up
    change_table :images do |t|
      t.references :imageable, polymorphic: true
    end
  end

  def down
    change_table :images do |t|
      t.remove_references :imageable, polymorphic: true
    end
  end
end
