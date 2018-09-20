import React, { Component } from 'react';

// Components
import ImageThumb from 'About/ImageThumb';

class LocationsTile extends Component {
  render() {
    const locations = this.props.locations;

    let locationsTile;
    let images;

    if(locations) {
      locationsTile = Object.entries(locations).map(([index, location]) => {
        return (
          <section key={index} className="locationsTile">
            <h3>{location.name}</h3>
            <ImageThumb
              images={location.images}
              changeImage={this.props.setDefaultLocation}/>
          </section>
        );
      });
    }

    return (
      <div>
        {locationsTile}
      </div>
    );
  }
}

export default LocationsTile;
