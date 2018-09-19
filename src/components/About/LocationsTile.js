import React, { Component } from 'react';

// Components
import ImageThumb from 'About/ImageThumb';

class LocationsTile extends Component {
  changeLocation(locationName, imageName) {
    console.log(locationName);
    console.log(imageName);
  }

  render() {
    const locations = this.props.locations;

    let locationsTile;
    let images;

    if(locations) {
      locationsTile = Object.entries(locations).map(([index, location]) => {
        // images = Object.entries(location.images).map(([index, image]) => {
        //   return <img key={index} href={image.thumb_photo_url}/>
        // });

        return (
          <section key={index} className="image">
            <ImageThumb />
          </section>
        );
      });
    }

    return (
      <section className="photos-file">
        {locationsTile}
      </section>
    );
  }
}

export default LocationsTile;
