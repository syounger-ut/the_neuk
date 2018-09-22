import React, { Component } from 'react';

import ImageGallery from 'react-image-gallery';

class MainPhoto extends Component {
  constructor(props) {
    super(props);
    this.state = {
      defaultImage: ''
    }
  }

  componentWillMount() {
    if(this.props.locations) {
      this.setState({ defaultImage: this.props.locations.defaultLocation })
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ defaultImage: nextProps.locations.defaultLocation })
  }

  render() {
    const defaultImage = this.state.defaultImage;

    let images;

    if(defaultImage) {
      images =  [{
          original: defaultImage.original_photo_url,
          thumbnail: defaultImage.thumb_photo_url,
          description: defaultImage.description,
          originalTitle: defaultImage.name
      }]
    }

    return (
      <section className="photos">
        <ImageGallery items={images} showThumbnails={false} showPlayButton={false}/>
      </section>
    );
  }
}

export default MainPhoto;
