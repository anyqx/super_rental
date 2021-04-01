class ChangeCartItems < ActiveRecord::Migration[5.2]
  def change
    remove_column :cart_items, :price
    add_column :cart_items, :offer_price, :float

  end
end
