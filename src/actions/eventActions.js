import theNeukApi from 'theNeukApi';

export const setEvents = (events) => {
  return {
    type: "SET_EVENTS",
    payload: events
  }
}

export const findEvents = (start, end) => {
  return (dispatch) => {
    return theNeukApi.getEvents(start, end).then(response => {
      dispatch(setEvents(response))
      return true
    });
  }
}
