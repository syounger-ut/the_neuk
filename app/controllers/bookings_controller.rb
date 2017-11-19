class BookingsController < ApplicationController

  def index
    bookings = @current_user.bookings.all
    bookings_serialized = bookings.map{ |booking| BookingSerializer.new(booking) }
    render json: { bookings: bookings_serialized }
  end

  def show
    booking = @current_user.bookings.find(params[:id])
    render json: { booking: BookingSerializer.new(booking) }, status: :ok
  end

  def create
    booking = @current_user.bookings.new(booking_params)

    if booking.save && !!booking.paid
      UserMailer.booking_email(@current_user, @booking).deliver_later
      render json: { booking: BookingSerializer.new(booking) }, status: :created
    elsif !booking.paid
      render json: { paid: "The booking is unpaid. Please pay" }
    else
      render json: booking.errors.full_messages, status: :unprocessable_entity
    end
  end

  def update
    booking = @current_user.bookings.find(params[:id])

    if booking.update(booking_params)
      render json: { booking: BookingSerializer.new(booking) }, status: :ok
    else
      render json: booking.errors.full_messages, status: :unprocessable_entity
    end
  end

  private

  def booking_params
    params.require(:booking).permit(:start_date, :end_date, :occupants, :special_instructions, :booking_source, :paid)
  end

end
