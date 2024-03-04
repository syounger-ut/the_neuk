import * as React from 'react';
import ImageGallery from 'react-image-gallery';

type Image = {
  name: string;
  original_photo_url: string;
  thumb_photo_url: string;
}

type Props = {
  locations: {
    Home: {
      images: Image[];
    };
  }[];
}

type ImageGalleryItem = {
  original: string;
  thumbnail: string;
  description: string;
  originalTitle: string;
}

class ImageSlider extends React.Component<Props> {

  render() {
    const locations = this.props.locations

    let images: ImageGalleryItem[] = [];

    if (locations) {
      const home = locations["Home"];

      images = Object.entries<Image>(home.images).map(([index, image]): ImageGalleryItem => ({
        original: image.original_photo_url,
        thumbnail: image.thumb_photo_url,
        description: image.name,
        originalTitle: image.name
      }));
    }

    return (
      <div className="image-gallery-container">
        <ImageGallery items={images} />
      </div>
    );
  }

}

export default ImageSlider;
