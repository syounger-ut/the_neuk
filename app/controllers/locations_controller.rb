class LocationsController < ApplicationController
  skip_before_action :authenticate_user!, only: [:index]

  def index
    locations = Location.all
    render json: locations, each_serializer: LocationSerializer
  end
end
