import theNeukApi from 'theNeukApi';

export const setBookingStart = (date) => {
  return {
    type: "BOOKING_START",
    payload: date
  };
};

export const setBookingEnd = (date) => {
  return {
    type: "BOOKING_END",
    payload: date
  };
};

export const setBooking = (booking) => {
  return {
    type: "SET_BOOKING",
    payload: booking
  }
}

export const submitBooking = (booking) => {
  return (dispatch) => {
    return theNeukApi.submitBooking(booking).then(response => {
      dispatch(setBooking(response))
      return true
    });
  }
}
