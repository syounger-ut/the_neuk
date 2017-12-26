class EventsController < ApplicationController

  def index
    headers  = { Authorization: "Bearer #{ENV['LIST_API_KEY']}" }

    # Coordinates of Kames, with 5 mile radius
    params   = { near: [ '55.8850849', '-5.2365178' ], _distance: '5' }
    response = HTTParty.get('https://api.list.co.uk/v1/events', headers: headers, params: params)

    if response
      response_serialized = response.map{ |event| EventsSerializer.new(event) }
      render json: response_serialized, status: :ok
    else
      render json: { errors: "Something went wrong getting events" }
    end
  end

end
