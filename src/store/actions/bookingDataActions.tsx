import { Room } from "../types/roomTypes";
import { Product } from "../types/productTypes";

export const setBookingData = (
  startDate: string,
  endDate: string,
  room: Room,
  selectedProducts: Product[]
) => ({
  type: "SET_BOOKING_DATA",
  payload: { startDate, endDate, room, selectedProducts },
});
