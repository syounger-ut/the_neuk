import theNeukApi from 'theNeukApi';

export const setLocations = (locations) => {
  return {
    type: "SET_LOCATIONS",
    payload: locations
  };
};


export const getLocations = () => {
  return (dispatch) => {
    return theNeukApi.getLocations().then(response => {
      dispatch(setLocations(response))
      return true
    })
  }
}
