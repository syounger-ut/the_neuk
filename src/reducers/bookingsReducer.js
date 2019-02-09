const bookingsReducer = (state = null, action) => {
  switch (action.type) {
    case "SET_BOOKINGS":
      let initialState = {}
      action.payload.forEach(function(booking) {
        initialState[booking.id] = booking;
      })
      return Object.assign({}, state, initialState)
    default:
      return state
  }
}

export default bookingsReducer;
