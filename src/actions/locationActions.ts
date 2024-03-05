import theNeukApi from '../api/theNeukApi';

export const setLocations = (locations) => {
  return {
    type: "SET_LOCATIONS",
    payload: locations
  };
};

export const setDefaultLocation = (locationName) => {
  return {
    type: "SET_DEFAULT_LOCATION",
    payload: locationName
  }
}


export const getLocations = () => {
  return (dispatch) => {
    return theNeukApi.getLocations().then(response => {
      dispatch(setLocations(response))
      return true
    })
  }
}
