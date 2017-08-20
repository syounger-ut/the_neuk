class BookingsController < ApplicationController
  skip_before_action :authenticate_request, only: [ :create ]
  before_action :find_user, only: [ :create ]

  def show
    @booking = @current_user.bookings.find(params[:id])

    render json: @booking, status: :ok
  end

  def create
    @booking = @user.bookings.new(booking_params)
    user_to_render = @user.as_json(only: [:name, :email, :phone_number])

    if @booking.save
      UserMailer.welcome_email(@user, password, @booking).deliver_later
      render json: { booking: @booking, user: user_to_render}, status: :created
    else
      render json: @booking.errors, status: :unprocessable_entity
    end
  end

  private

  def booking_params
    params.require(:booking).permit(:start_date, :end_date, :occupants, :special_instructions, :booking_source, :paid)
  end

  def find_user
    @user ||= User.find_by_email(params[:user][:email])
    @user.update(user_params) if @user
    @user ||= User.create(user_params) unless @user
  end

  def user_params
    params.require(:user).permit(:name, :email, :phone_number).merge(password: password, password_confirmation: password)
  end

  def password(pass_code = nil)
    @password ||= SecureRandom.hex(12) unless pass_code
  end

end
