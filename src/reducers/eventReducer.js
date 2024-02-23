const eventReducer = (state = null, action) => {
  switch (action.type) {
    case 'SET_EVENTS':
      let newState = new Object;

      action.payload.forEach(event => {
        newState[event.event_id] = event
      });

      return Object.assign({}, state, newState)
    default:
      return state
  }
}

export default eventReducer;
