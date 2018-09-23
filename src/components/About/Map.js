import React, { Component } from 'react';

class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      defaultImage: ''
    }
  }

  render() {
    return (
      <section className="map">
        <h2>Where is it?</h2>
        <div id="map"></div>
      </section>
    );
  }
}

export default Map;
