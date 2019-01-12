import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as locationActions from 'locationActions';
import * as toDoActions from 'toDoActions';

// Components
import MainPhoto from 'About/MainPhoto';
import LocationsTile from 'About/LocationsTile';
import MapContainer from 'About/MapContainer';
import ThingsToDo from 'About/ThingsToDo';

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      locations: '',
      thingsToDo: ''
    };
  }


  componentWillMount() {
    this.props.getThingsToDo();
    this.props.getLocations();
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      locations: nextProps.locations,
      thingsToDo: nextProps.thingsToDo
    })
  }

  render() {
    const locations = this.state.locations;
    const thingsToDo = this.state.thingsToDo;
    const setDefaultLocation = this.props.setDefaultLocation;

    return (
      <section className="about">
        <h1>Gallery</h1>
        <MainPhoto locations={locations} setDefaultLocation={setDefaultLocation} />
        <LocationsTile locations={locations} setDefaultLocation={setDefaultLocation} />
        <MapContainer/>
        <ThingsToDo thingsToDo={thingsToDo}/>
      </section>
    );
  }
}

// Maps state from store to props
const mapStateToProps = (state, ownProps) => {
  return {
    locations: state.locations,
    thingsToDo: state.thingsToDo
  }
};

// Maps actions to props
const mapDispatchToProps = (dispatch) => {
  return {
    getLocations: () => dispatch(locationActions.getLocations()),
    setDefaultLocation: (locationName) => dispatch(locationActions.setDefaultLocation(locationName)),
    getThingsToDo: () => dispatch(toDoActions.getToDos())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(About);
