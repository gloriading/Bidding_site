class UserSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :email, :password_digest, :full_name


  has_many :auctions
  class AuctionSerializer < ActiveModel::Serializer
    attributes :id, :title, :detail, :end_date, :reserve_price, :created_at, :updated_at, :author_full_name

    def author_full_name
      object.user&.full_name
    end

  end


  has_many :bids
  class BidSerializer < ActiveModel::Serializer
    attributes :id, :bid_price, :created_at, :updated_at, :author_full_name

    def author_full_name
      object.user&.full_name
    end
    
  end


end
