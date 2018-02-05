class Auction < ApplicationRecord
  has_many :bids
  validates :title, presence: true, uniqueness: true
  validates :reserve_price, presence: true, numericality: { greater_than: 0 }

end
