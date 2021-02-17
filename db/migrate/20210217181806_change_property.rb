class ChangeProperty < ActiveRecord::Migration[5.2]
  def change
    remove_column :properties, :longitude
    remove_column :properties, :altitude
    remove_column :properties, :cap_rate
    remove_column :properties, :annualized_return
    remove_column :properties, :total_return
    remove_column :properties, :gross_yield

    add_column :properties, :longitude, :float
    add_column :properties, :altitude, :float
    add_column :properties, :cap_rate, :float
    add_column :properties, :annualized_return, :float
    add_column :properties, :total_return, :float
    add_column :properties, :gross_yield, :float
  end
end
