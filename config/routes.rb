Rails.application.routes.draw do
  scope :api do
    resources :users, only: [:update, :destroy]
    resources :bookings
    resources :pay
    resources :locations, only: :index
    resources :images, only: [:index, :show]
    resources :things_to_dos, only: :index
    get "events", to: "events#index"
    post "login", to: "authentication#login"
    post "register", to: "authentication#register"
    get "users/me", to: "authentication#me"

    # Engines
    mount Admin::Engine, at: "/admin", as: "admin"
  end
end
