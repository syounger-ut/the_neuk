import * as React from 'react';

import { connect } from 'react-redux';
import * as locationActions from '../actions/locationActions';
import * as toDoActions from '../actions/toDoActions';

// Components
import MainPhoto from '../components/About/MainPhoto';
import LocationsTile from '../components/About/LocationsTile';
import MapContainer from '../components/About/MapContainer';
import ThingsToDo from '../components/About/ThingsToDo';

type Props = {
  getThingsToDo: () => void;
  getLocations: () => void;
  setDefaultLocation: (image: any) => void;
}

type State = {
  locations: { defaultLocation: any };
  thingsToDo: {
    image: {
      thumb_photo_url: string;
    };
    name: string;
    description: string;
    website_url: string;
  }[];
}

class About extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      locations: { defaultLocation: '' },
      thingsToDo: [],
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
        <MainPhoto locations={locations} />
        <LocationsTile locations={locations} setDefaultLocation={setDefaultLocation} />
        <MapContainer />
        <ThingsToDo thingsToDo={thingsToDo} />
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
