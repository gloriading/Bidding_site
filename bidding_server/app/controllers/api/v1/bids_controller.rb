class Api::V1::BidsController < Api::ApplicationController
  before_action :authenticate_user!
  before_action :find_bid, only: [:show, :destroy, :update]
  before_action :find_auction


	# def index
  #   @bids = Bid.order(created_at: :desc)
	# 	render json: @bids
	# end
  #
  # def show
  #   render json: @bid
  # end


  def create
    bid = Bid.new bid_params
    bid.user = current_user
    bid.auction = @auction

    if bid.save
      render json: { id: bid.id }
    else
      render json: { error: bid.errors.full_messages}
    end
  end

  # def destroy
  #   if @bid.destroy
  #     head :ok
  #   else
  #     head :bad_request
  #   end
  # end
  #
  # def update
  #   if @bid.update bid_params
  #     render json: @bid
  #   else
  #     render json: { error: @bid.errors.full_messages}
  #   end
  # end

  private
  def bid_params
    params.require(:bid).permit(:bid_price)
  end

  def find_bid
    @bid = Bid.find params[:id]
  end

  def find_auction
    @auction = Auction.find params[:auction_id]
  end


end
