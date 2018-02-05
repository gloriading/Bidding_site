class CreateAuctions < ActiveRecord::Migration[5.1]
  def change
    create_table :auctions do |t|
      t.string :title
      t.text :detail
      t.date :end_date
      t.float :reserve_price

      t.timestamps
    end
  end
end
