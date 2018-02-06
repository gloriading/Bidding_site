class BidSerializer < ActiveModel::Serializer
  attributes :id, :bid_price, :created_at, :updated_at

  belongs_to :user, key: :author
  class UserSerializer < ActiveModel::Serializer
    attributes :id, :first_name, :last_name, :full_name
  end




end
