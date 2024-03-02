class CreateBooking < ActiveRecord::Migration[5.0]
  def change
    create_table :bookings do |t|
      t.belongs_to :user, index: true
      t.date    :start_date
      t.date    :end_date
      t.integer :occupants
      t.string  :special_instructions
      t.integer :booking_source, default: 0
      t.boolean :paid,   default: false

      t.timestamps
    end
  end
end
