class Admin::UsersController < Admin::ApplicationController
  def index
    users = User.all.order(last_name: :asc, first_name: :asc)
    render json: users, each_serializer: UserSerializer
  end
end
