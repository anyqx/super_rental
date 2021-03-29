class CreateCartItems < ActiveRecord::Migration[5.2]
  def change
    create_table :cart_items do |t|
      t.integer :property_id, null: false
      t.integer :user_id, null: false
      t.float :price, null: false
      t.string :terms, null: false

      t.timestamps
    end

    add_index :cart_items, :property_id
    add_index :cart_items, :user_id
  end
end
