import React, { Component } from 'react';

import ImageGallery from 'react-image-gallery';

class MainPhoto extends Component {
  constructor(props) {
    super(props);
    this.state = {
      defaultImage: null
    }
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    const firstLocation = Object.keys(nextProps.locations)[0]
    const locations = this.props.locations || {};
    if(!locations.defaultLocation) {
      this.props.setDefaultLocation(firstLocation);
    } else {
      this.setState({ defaultImage: locations[locations.defaultLocation] })

      console.log(this.state)
    }
  }

  render() {
    const defaultImage = this.state.defaultImage;
    // const locations = this.props.locations;

    let images;

    if(defaultImage) {
      // console.log(this.state)
      // const imageLocation = this.state.defaultImage;
      // const imageLocation = locations[this.props.locations.defaultLocation];
      // if(imageLocation) {
        images = Object.entries(defaultImage.images).map(([index, image]) => {
          return {
            original: image.original_photo_url,
            thumbnail: image.thumb_photo_url,
            description: image.description,
            originalTitle: image.name
          }
        })
      // }
    }

    return (
      <section className="photos">
        <ImageGallery items={images} showThumbnails={false} showPlayButton={false}/>
      </section>
    );
  }
}

export default MainPhoto;
