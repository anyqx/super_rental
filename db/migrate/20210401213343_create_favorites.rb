class CreateFavorites < ActiveRecord::Migration[5.2]
  def change
    create_table :favorites do |t|
      t.integer :user_id, null: false
      t.integer :property_id, null: false
      
      t.timestamps
    end

    add_index :favorites, :property_id
    add_index :favorites, :user_id
  end
end
