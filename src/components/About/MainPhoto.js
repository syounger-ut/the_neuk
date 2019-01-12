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
    if(nextProps.locations) {
      this.setState({ defaultImage: nextProps.locations.defaultLocation })
    }
  }

  render() {
    const defaultImage = this.state.defaultImage;

    let images;

    if(defaultImage) {
      images =  [{
          original: defaultImage.original_photo_url
      }]
    }

    return (
      <section className="image-gallery-container">
        <ImageGallery items={images} showThumbnails={false} showPlayButton={false}/>
        <h4>{defaultImage.name}</h4>
        <p>{defaultImage.description}</p>
      </section>
    );
  }
}

export default MainPhoto;
