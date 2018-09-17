import React, { Component } from 'react';

class LocationsTile extends Component {
  componentWillReceiveProps(nextProps) {
    const firstLocation = Object.keys(nextProps.locations)[0]
    this.props.setDefaultLocation(firstLocation);
  }

  changeLocation(locationName, imageName) {
    console.log(locationName);
    console.log(imageName);
  }

  render() {
    const locations = this.props.locations;

    let images;

    if(locations) {
      const imageLocation = locations[this.props.locations.defaultLocation];

      images = Object.entries(imageLocation.images).map(([index, image]) => {
        return {
          original: image.original_photo_url,
          thumbnail: image.thumb_photo_url,
          description: image.description,
          originalTitle: image.name
        }
      })
    }

    return (
      <section className="photos">
        <ImageGallery items={images} />
      </section>
    );
  }
}

export default LocationsTile;
