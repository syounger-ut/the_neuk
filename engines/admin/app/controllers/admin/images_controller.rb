class Admin::ImagesController < Admin::ApplicationController

  def index
    images = Image.all
    render json: images, each_serializer: ImageSerializer
  end

  def show
    image = Image.find(params[:id])
    render json: { image: ImageSerializer.new(image) }
  end

  def create
    image = Image.new(photo_params)

    if image.save
      render json: { image: ImageSerializer.new(image) }
    else
      render json: { errors: image.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def update
    image = Image.find(params[:id])

    if image.update(image_params)
      render json: { image: ImageSerializer.new(image) }, status: :ok
    else
      render json: { error: image.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def destroy
    image = Image.find(params[:id])

    if image.destroy
      render json: { image: "Image deleted" }, status: :ok
    else
      render json: { error: image.errors.full_messages }, status: :unprocessable_entity
    end
  end

  private

  def photo_params
    params.permit(:photo, :name, :description)
  end

  def image_params
    params.require(:image).permit(:photo, :name, :description)
  end

end
