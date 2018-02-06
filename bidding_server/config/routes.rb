Rails.application.routes.draw do

  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      resources :users
      resources :auctions do 
        resources :bids
      end
      resources :tokens, only: [:create]
    end
  end

end
