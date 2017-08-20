class AuthenticationController < ApplicationController
  skip_before_action :authenticate_request

  def register
    user = User.new(user_params)
    if user.save
      token = JsonWebToken.encode({id: user.id})
      user_to_render = user.as_json(only: [:name, :email, :role, :phone_number])
      render json: { token: token, user: user_to_render }, status: :ok
    else
      render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def login
    command = AuthenticateUser.call(params[:email], params[:password])

    if command.success?
      render json: { auth_token: command.result }
    else
      render json: { error: command.errors }, status: :unauthorized
    end
  end

  private

  def user_params
    hash = {}
    hash.merge! params.slice(:name, :email, :role, :phone_number, :password, :password_confirmation)
    hash
  end

end
