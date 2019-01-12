class ThingsToDosController < ApplicationController
  skip_before_action :authenticate_user!, only: [:index]

  def index
    things_to_do = ThingsToDo.all
    render json: things_to_do, each_serializer: ThingsToDoSerializer
  end
end
