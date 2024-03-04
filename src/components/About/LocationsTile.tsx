import * as React from 'react';

// Components
import ImageThumb from './ImageThumb';

type Props = {
  locations: { defaultLocation: any };
  setDefaultLocation: (image: any) => void;
}

class LocationsTile extends React.Component<Props> {
  render() {
    const locations = Object.assign({}, this.props.locations);
    let locationsTile;
    let images;

    if (locations) {

      // Remove the default location from the tile

      delete locations["defaultLocation"];

      locationsTile = Object.entries(locations).map(([index, location]) => {
        return (
          <section key={index} className="locationsTile">
            <h3>{location.name}</h3>
            <ImageThumb
              images={location.images}
              changeImage={this.props.setDefaultLocation} />
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
