import theNeukApi from 'theNeukApi';

export const setBookings = (bookings) => {
  return {
    type: "SET_BOOKINGS",
    payload: bookings
  }
}
