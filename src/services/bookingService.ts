import axios from "axios";
import { Booking } from "../store/types/bookingTypes";

export const getBookings = async (): Promise<Booking[]> => {
  try {
    const response = await axios.get("/bookings");
    return response.data;
  } catch (error) {
    // Handle error
    throw new Error("Failed to fetch bookings");
  }
};
