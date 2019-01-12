const bookingsReducer = (state = null, action) => {
  switch (action.type) {
    case "SET_BOOKINGS":
      return Object.assign({}, state, action.payload);
    default:
      return state
  }
}

export default bookingsReducer;
