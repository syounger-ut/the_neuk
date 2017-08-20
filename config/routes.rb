Rails.application.routes.draw do
  scope :api do
    resources :users
    resources :bookings
    namespace :stripe do
      resources :charges
    end
    post 'login',    to: 'authentication#login'
    post 'register', to: 'authentication#register'
  end
end
