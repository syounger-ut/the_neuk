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
    # Remove tok_visa later, for testing only
    payment = StripeService.charge("tok_visa", params[:booking][:description], params[:booking][:price])
    # payment = StripeService.charge(params[:stripe_token], params[:booking][:description], params[:booking][:price])
    booking = @current_user.bookings.new(booking_params)

    if payment && booking.save
      UserMailer.booking_email(@current_user, @booking).deliver_later
      render json: { booking: BookingSerializer.new(booking) }, status: :created
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
    params.require(:booking).permit(:start_date, :end_date, :occupants, :special_instructions, :booking_source)
  end

end
