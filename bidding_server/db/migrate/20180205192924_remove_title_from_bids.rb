class RemoveTitleFromBids < ActiveRecord::Migration[5.1]
  def change
    remove_column :bids, :title, :string
  end
end
