export const setBookingDates = (startDate: string, endDate: string) => ({
  type: "SET_BOOKING_DATES",
  payload: { startDate, endDate },
});
