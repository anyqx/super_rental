class CreateProperties < ActiveRecord::Migration[5.2]
  def change
    create_table :properties do |t|
      t.integer :owner_id, null: false
      t.string :title, null: false
      t.integer :bedroom, null: false
      t.integer :bathroom, null: false
      t.integer :sqft, null: false
      t.string :address, null: false
      t.string :city, null: false
      t.string :state, null: false
      t.integer :zipcode, null: false
      t.integer :longitude, null: false
      t.integer :altitude, null: false
      t.integer :price, null: false
      t.integer :rent, null: false
      t.integer :cap_rate, null: false
      t.integer :annualized_return, null: false
      t.integer :total_return, null: false
      t.integer :gross_yield, null: false

      t.timestamps
    end
    add_index :properties, :title, unique: true

  end
end
