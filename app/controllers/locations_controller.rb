class LocationsController < ApplicationController
  def index
    locations = Location.all
    render json: locations, each_serializer: LocationSerializer
  end
end
