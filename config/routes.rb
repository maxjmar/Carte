Rails.application.routes.draw do
  resources :cards, only: [:show, :index, :create]
  resources :categories, only: [:show, :index, :create] do
    resources :cards, only: [:show, :index, :create]
  end
  resources :users

  post "/login", to: "sessions#login"
  get "/me", to: "users#show"
  delete "/logout", to: "sessions#logout"



  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  # route to test your configuration
end
