class AuthenticationController < ApplicationController
  skip_before_action :authenticate_request

  def register
    user = User.new(user_params)
    if user.save
      token = JsonWebToken.encode({id: user.id})
      user_to_render = user.as_json(only: [:name, :email, :role, :phone_number])

      UserMailer.welcome_email(user, password).deliver_later

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
    hash.merge! params.slice(:name, :email, :role, :phone_number).merge(password: password, password_confirmation: password)
    hash
  end

  def password(pass_code = nil)
    @password ||= SecureRandom.hex(12) unless pass_code # => generate a random 12 digit password
  end

end
