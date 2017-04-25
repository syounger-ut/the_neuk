Rails.application.routes.draw do

  resources :users, only: [ :create, :update ] do
    collection do
      post 'confirm'
      post 'login'
      post 'email_update'
    end
  end

  post 'password/forgot', to: 'passwords#forgot'
  post 'password/reset',  to: 'passwords#reset'
  put  'password/update', to: 'passwords#update'

end
