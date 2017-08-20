Rails.application.routes.draw do
  scope :api do
    resources :users
    post 'login',    to: 'authentication#login'
    post 'register', to: 'authentication#register'
  end
end
