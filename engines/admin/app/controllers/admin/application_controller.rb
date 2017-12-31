class Admin::ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  before_action :authenticate_user!

  def authenticate_user!
    render json: { errors: ["Unauthorized"] }, status: 401 unless !!current_user
  end

  def current_user
    @current_user ||= User.where(id: decoded_token[:id], role: 'admin').first if id_found?
  rescue
    nil
  end

  private

  def id_found?
    token && decoded_token && decoded_token[:id]
  end

  def decoded_token
    @decoded_token ||= JsonWebToken.decode(token) if token
  end

  def token
    @token ||= if request.headers['Authorization'].present?
      request.headers['Authorization'].split.last
    end
  end

end
