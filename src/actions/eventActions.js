import theNeukApi from 'theNeukApi';

export const setEvents = (events) => {
  return {
    type: "SET_EVENTS",
    payload: events
  }
}

export const findEvents = () => {
  return (dispatch) => {
    return theNeukApi.getEvents().then(response => {
      dispatch(setEvents(response))
      return true
    });
  }
}
