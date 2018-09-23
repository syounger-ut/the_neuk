class ThingsToDosController < ApplicationController
  def index
    ThingsToDo.all
  end
end
