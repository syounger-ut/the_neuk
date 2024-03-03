import * as React from 'react';

type Props = {
  changeImage: (image: any) => void;
  images: any[];
}

class ImageThumb extends React.Component<Props> {
  constructor(props) {
    super(props);
    this.changeImage = this.changeImage.bind(this);
  }

  changeImage(image, event) {
    // Work to do here. Pass the Image to the ImageReducer to change the DefaultImage
    // debugger
    this.props.changeImage(image);
  }

  render() {
    const images = this.props.images;

    let imageTile;

    if (images) {
      imageTile = Object.entries(images).map(([index, image]) => {
        return (
          <img
            key={index}
            src={`http:${image.thumb_photo_url}`}
            onClick={(event) => { this.changeImage(image, event) }} />
        );
      });
    }

    return (
      <div className="images">{imageTile}</div>
    );
  }
}

export default ImageThumb;
