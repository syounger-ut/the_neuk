import * as React from 'react';

import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

export class MapContainer extends React.Component {
  render() {
    const style = {
      width: '100%',
      height: '30rem'
    }
    return (
      <div>
        <section className="map-container">
          <h2>Where is it?</h2>
          <Map
            className='map'
            google={this.props.google}
            zoom={15}
            style={style}
            initialCenter={{
              lat: 55.885260,
              lng: -5.235913
            }}>

            <Marker position={{ lat: 55.885260, lng: -5.235913 }} />
          </Map>
        </section>
        <p>Address: The Neuk, Kames, Tighnabruaich, Argyll, PA212AG, United Kingdom</p>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ("AIzaSyDYbLqp3cQSnJTKIo6sdUiEIDYh7F4r4No")
})(MapContainer)
