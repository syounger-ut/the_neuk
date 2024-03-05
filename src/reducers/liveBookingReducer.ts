type Booking = {
  start_date: string;
  end_date: string;
}

const liveBookingReducer = (state: Booking = {} as Booking, action) => {
  switch (action.type) {
    case 'BOOKING_START':
      if (state === null) { state = {} as Booking }
      return Object.assign({}, state, Object.assign({}, state.start_date, { start_date: action.payload }));
    case 'BOOKING_END':
      return Object.assign({}, state, Object.assign({}, state.end_date, { end_date: action.payload }))
    case 'SET_BOOKING':
      return Object.assign({}, state, action.payload)
    default:
      return state
  }
}

export default liveBookingReducer;
