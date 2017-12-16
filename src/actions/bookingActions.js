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
