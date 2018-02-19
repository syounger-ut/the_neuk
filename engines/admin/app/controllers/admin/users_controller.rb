class Admin::UsersController < Admin::ApplicationController

  def index
    users = User.all
    users_serialized = users.map { |user| UserSerializer.new(user) }
    render json: { users: users_serialized }
  end

end
