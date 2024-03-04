import theNeukApi from '../api/theNeukApi';

export const setBookings = (bookings) => {
  return {
    type: "SET_BOOKINGS",
    payload: bookings
  }
}
