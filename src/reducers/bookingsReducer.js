const bookingsReducer = (state = null, action) => {
  switch (action.type) {
    case "SET_BOOKINGS":
      let initialState = {}
      action.payload.forEach(function(booking) {
        initialState[booking.id] = booking;
      })
      return Object.assign({}, state, initialState)
    case 'SET_UPDATED_BOOKING':
      let id = action.payload.id;
      return Object.assign({}, state, {
        [id]: Object.assign({}, state[id], action.payload)
      });
    default:
      return state
  }
}

export default bookingsReducer;
