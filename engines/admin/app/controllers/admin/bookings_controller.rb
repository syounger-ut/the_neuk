class Admin::BookingsController < Admin::ApplicationController

  def index
    bookings = Booking.all.order(start_date: :desc)
    render json: bookings, each_serializer: BookingSerializer
  end

  def show
    booking = booking.find(params[:id])
    render json: BookingSerializer.new(booking)
  end

  def create
    booking = Booking.new(booking_params)

    if booking.save
      render json: BookingSerializer.new(booking)
    else
      render json: booking.errors.full_messages, status: :unprocessable_entity
    end
  end

  def update
    booking = Booking.find(params[:id])
    if booking.update(booking_params)
      render json: BookingSerializer.new(booking)
    else
      render json: booking.errors.full_messages, status: :unprocessable_entity
    end
  end

  private

  def booking_params
    params.require(:booking).permit(:start_date, :end_date, :occupants, :special_instructions, :booking_source, :user_id)
  end

end
