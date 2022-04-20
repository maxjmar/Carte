Rails.application.routes.draw do
  resources :cards
  resources :categories
  resources :users

  post "/login", to: "sessions#login"

  get "/authorized_user", to: "users#show"

  delete "/logout", to: "sessions#logout"

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  # route to test your configuration
end
