class AuctionSerializer < ActiveModel::Serializer
  attributes :id, :title, :detail, :end_date, :reserve_price, :created_at, :updated_at


end
