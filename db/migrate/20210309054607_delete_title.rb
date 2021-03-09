class DeleteTitle < ActiveRecord::Migration[5.2]
  def change
    remove_column :properties, :title
  end
end
