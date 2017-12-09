class AuthenticationController < ApplicationController
  skip_before_action :authenticate_user!

  def register
    user = User.new(user_params)
    if user.save
      token = JsonWebToken.issue({id: user.id})
      UserMailer.welcome_email(user).deliver_later
      render json: { token: token }, status: :ok
    else
      render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def login
    user = User.find_by_email(params[:email])
    if user && user.authenticate(params[:password])
      token = JsonWebToken.issue({id: user.id})
      render json: { token: token }, status: :ok
    else
      render json: { errors: ["Invalid login credentials."]}, status: 401
    end
  end

  private

  def user_params
    params.permit(:first_name, :last_name, :email, :phone_number, :password)
  end

end
