import { Room } from "../types/roomTypes";

export const setBookingDates = (
  startDate: string,
  endDate: string,
  room: Room
) => ({
  type: "SET_BOOKING_DATA",
  payload: { startDate, endDate, room },
});
