import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as locationActions from 'locationActions';

// Components
import MainPhoto from 'About/MainPhoto';
import LocationsTile from 'About/LocationsTile';

class About extends Component {
  componentWillMount() {
    if(this.props.locations === null) {
      this.props.getLocations();
    }
  }

  render() {
    const locations = this.props.locations;
    const setDefaultLocation = this.props.setDefaultLocation;

    return (
      <section className="about">
        <h1>Gallery</h1>
        <MainPhoto locations={locations} setDefaultLocation={setDefaultLocation} />
        <LocationsTile locations={locations} setDefaultLocation={setDefaultLocation} />
      </section>
    );
  }
}

// Maps state from store to props
const mapStateToProps = (state, ownProps) => {
  return {
    locations: state.locations
  }
};

// Maps actions to props
const mapDispatchToProps = (dispatch) => {
  return {
    getLocations: () => dispatch(locationActions.getLocations()),
    setDefaultLocation: (locationName) => dispatch(locationActions.setDefaultLocation(locationName))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(About);
