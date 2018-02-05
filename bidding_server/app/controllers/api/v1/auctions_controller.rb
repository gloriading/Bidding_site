class Api::V1::AuctionsController < Api::ApplicationController

  before_action :authenticate_user!
  before_action :find_auction, only: [:show, :destroy, :update]


	def index
    @auctions = Auction.order(created_at: :desc)
		render json: @auctions
	end

  def show
    render json: @auction
  end


  def create
    auction = Auction.new auction_params
    auction.user = current_user
    if auction.save
      render json: { id: auction.id }
    else
      render json: { error: auction.errors.full_messages}
    end
  end

  def destroy
    if @auction.destroy
      head :ok
    else
      head :bad_request
    end
  end

  def update
    if @auction.update auction_params
      render json: @auction
    else
      render json: { error: @auction.errors.full_messages}
    end
  end

  private
  def auction_params
    params.require(:auction).permit(:title, :detail, :end_date, :reserve_price)
  end

  def find_auction
    @auction = Auction.find params[:id]
  end

end
