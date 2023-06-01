import axios from "axios";
import { Booking } from "../store/types/bookingTypes";

export const getBookings = async (): Promise<Booking[]> => {
  const response = await axios.get("/bookings");
  return response.data.data;
};
