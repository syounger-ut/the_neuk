class EventsController < ApplicationController

  def index
    headers  = { Authorization: "Bearer #{ENV['LIST_API_KEY']}" }

    # Coordinates of Kames, with 5 mile radius
    list_params = { near: '55.8853827,-5.235613/30', min_date: params[:start_date], max_date: params[:end_date] }
    response = HTTParty.get('https://api.list.co.uk/v1/events', headers: headers, query: list_params)

    if response
      render json: response.parsed_response
    else
      render json: { errors: "Something went wrong getting events" }
    end
  end

  private

  def event_params
    params.permit(:start_date, :end_date)
  end

end
