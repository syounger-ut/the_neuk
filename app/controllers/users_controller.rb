class UsersController < ApplicationController

  def update
    user = @current_user

    if user.update(user_params)
      render json: user, serializer: UserSerializer, status: :ok
    else
      render json: user.errors.full_messages, status: :unprocessable_entity
    end
  end

  def destroy
    binding.pry
    user = @current_user

    if user.destroy
      render json: { user: "User deleted" }, status: :ok
    else
      render json: user.errors.full_messages, status: :unprocessable_entity
    end
  end

  private

  def user_params
    params.require(:user).permit(:first_name, :last_name, :email, :phone_number, :password)
  end

end
