import * as React from 'react';
import ImageGallery from 'react-image-gallery';

class ImageSlider extends React.Component {

  render() {
    const locations = this.props.locations

    let images = [];

    if (locations) {
      const home = locations["Home"];

      images = Object.entries(home.images).map(([index, image]) => {
        return {
          original: image.original_photo_url,
          thumbnail: image.thumb_photo_url,
          description: image.name,
          originalTitle: image.name
        }
      })
    }

    return (
      <div className="image-gallery-container">
        <ImageGallery items={images} />
      </div>
    );
  }

}

export default ImageSlider;
