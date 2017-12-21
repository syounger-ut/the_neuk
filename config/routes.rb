Rails.application.routes.draw do
  scope :api do
    resources :users, only: [ :update, :destroy ]
    get '/users/me', to: 'users#show'
    resources :bookings
    resources :pay
    post 'login',    to: 'authentication#login'
    post 'register', to: 'authentication#register'
  end
end
