class Admin::ImagesController < Admin::ApplicationController

  def index
    @images = Image.all
    # binding.pry
    render json: @images, each_serializer: ImageSerializer
  end

  def create
    binding.pry
    @image = Image.new(image_params)

    if @image.save
      redirect_to @image, notice: 'Friend was successfully created.'
    else
      render action: 'new'
    end
  end

  private

  def image_params
    params.permit(:photo, :name, :description)
  end

end
