class ImagesController < ApplicationController
  def index
    images = Image.all
    render json: images, each_serializer: ImageSerializer
  end

  def show
    image = Image.find(params[:id])
    render json: {photo: ImageSerializer.new(image)}
  end
end
