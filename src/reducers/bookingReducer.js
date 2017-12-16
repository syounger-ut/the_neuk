const bookingReducer = (state = {}, action) => {
  switch (action.type) {
    case 'BOOKING_START':
      return Object.assign({}, state, Object.assign({}, state.start, { start: action.payload }));
    case 'BOOKING_END':
      return Object.assign({}, state, Object.assign({}, state.end, { end: action.payload }))
    case 'SET_BOOKING':
      debugger
      return state
    case 'REST_BOOKING':
      return Object.assign({}, state, null)
    default:
      return state
  }
}

export default bookingReducer;
