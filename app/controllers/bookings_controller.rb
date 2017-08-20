class BookingsController < ApplicationController
  before_action :find_user, only: [ :create ]

  def show
    @booking = Booking.find(params[:id])

    render json: @booking, status: :ok
  end

  def create
      @booking = @user.bookings.new(booking_params)

      if @booking.save
        render json: @booking, status: :created, location: @booking
      else
        render json: @booking.errors, status: :unprocessable_entity
      end
  end

  private

  def booking_params
    params.require(:booking).permit(:start_date, :end_date, :occupants, :special_instructions, :booking_source, :paid)
  end

  def find_user
    @user = User.find_by_email(params[:email])
  end

end
