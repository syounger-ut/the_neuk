const bookingReducer = (state = {}, action) => {
  switch (action.type) {
    case 'BOOKING_START':
      return Object.assign({}, state, Object.assign({}, state.start, { start_date: action.payload }));
    case 'BOOKING_END':
      return Object.assign({}, state, Object.assign({}, state.end, { end_date: action.payload }))
    case 'SET_BOOKING':
      return Object.assign({}, state, action.payload.booking)
    case 'REST_BOOKING':
      return Object.assign({}, state, null)
    default:
      return state
  }
}

export default bookingReducer;
