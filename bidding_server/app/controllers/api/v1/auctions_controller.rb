class Api::V1::AuctionsController < ApplicationController

  # before_action :authenticate_user!
  # before_action :find_post, only: [:show, :destroy, :update]


	def index
    @auctions = Auction.order(created_at: :desc)
		render json: @auctions
	end
  #
  # def show
  #   # return render json: current_user
  #   render json: @post
  # end
  #
  #
  # def create
  #   post = Post.new post_params
  #   post.user = current_user
  #   # if post.save
  #   #   render json: { id: post.id }
  #   # else
  #   #   render json: { error: post.errors.full_messages}
  #   # end
  #   post.save!
  #   render json: { id: post.id }
  # end
  #
  # def destroy
  #   if @post.destroy
  #     head :ok
  #   else
  #     head :bad_request
  #   end
  # end
  #
  # def update
  #   if @post.update post_params
  #     render json: @post
  #   else
  #     render json: { error: @post.errors.full_messages}
  #   end
  # end

  private
  # def post_params
  #   params.require(:post).permit(:title, :body)
  # end
  #
  # def find_post
  #   @post = Post.find params[:id]
  # end

end
