Rails.application.routes.draw do
  scope :api do
    resources :users, only: [ :update, :destroy ]
    get '/users/me', to: 'users#show'
    resources :bookings
    resources :pay
    get  'events',   to: 'events#index'
    post 'login',    to: 'authentication#login'
    post 'register', to: 'authentication#register'

    # Engines
    mount Admin::Engine, at: '/admin', as: 'admin'
  end
end
